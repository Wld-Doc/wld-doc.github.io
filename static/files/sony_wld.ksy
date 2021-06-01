meta:
  id: sony_wld
  file-extension: wld
  endian: le

# rethink flags
#  (flags & 0b10) >> 1 == 1 could be (flags & 0b10) != 0
#  look into kaitai's bitfield docs

seq:
  - id: header
    type: header
  - id: string_hash
    type: xor_string(header.string_hash_bytes, header.string_count)

  - id: objects
    type: wld_object
    repeat: expr
    repeat-expr: header.object_count

  - id: footer
    contents: [0xff, 0xff, 0xff, 0xff]

types:
  header:
    seq:
    - id: magic
      contents: [0x02, 0x3d, 0x50, 0x54]
    - id: version
      type: u4
    - id: object_count
      type: u4
    - id: region_count
      type: u4
    - id: max_object_bytes
      type: u4
    - id: string_hash_bytes
      type: u4
    - id: string_count
      type: u4

  decoded_string_raw:
    params:
      - id: repeats
        type: u2
    seq:
      - id: strings
        type: strz
        encoding: ASCII
        repeat: expr
        repeat-expr: repeats + 1
    instances:
      raw:
        pos: 0
        type: str
        encoding: ASCII
        size-eos: true

  xor_string:
    params:
      - id: length
        type: u2
      - id: count
        type: u2
    seq:
      - id: decoded
        size: length
        # wasn't able to get the key stored as a value instance
        process: xor([0x95, 0x3A, 0xC5, 0x2A, 0x95, 0x7A, 0x95, 0x6A])
        type: decoded_string_raw(count)

  string_hash_reference:
    params:
      - id: position
        type: u2
    instances:
      string:
        io: _root.string_hash.decoded._io
        pos: position * -1
        type: strz
        encoding: ASCII

  color_rgb:
    seq:
      - id: red
        type: f4
      - id: green
        type: f4
      - id: blue
        type: f4

  frame_transform:
    seq:
      - id: rotate_denominator
        type: f4
      - id: rotate_x_numerator
        type: f4
      - id: rotate_y_numerator
        type: f4
      - id: rotate_z_numerator
        type: f4
      - id: shift_x_numerator
        type: f4
      - id: shift_y_numerator
        type: f4
      - id: shift_z_numerator
        type: f4
      - id: shift_denominator
        type: f4

  # WORLDNODE
  world_node:
    seq:
      # NORMALABCD %f %f %f %f
      - id: normal_a
        type: f4
      - id: normal_b
        type: f4
      - id: normal_c
        type: f4
      - id: normal_d
        type: f4

      # WORLDREGIONTAG %d
      - id: region_tag
        type: u4
      # TODO: revisit with more examples and add conditions when region isn't zero

      # FRONTTREE %d
      - id: front_tree
        type: u4
        if: region_tag == 0

      # BACKTREE %d
      - id: back_tree
        type: u4
        if: region_tag == 0

  wld_object:
    seq:
      - id: length
        type: u4
      - id: object_type
        type: u4
      - id: body
        size: length
        type:
          switch-on: object_type
          cases:
            0x3: object_type_03 # FRAME and BMINFO
            0x4: object_type_04 # SIMPLESPRITEDEF
            # 0x5: object_type_05 # merchant 25 I think
            0x8: object_type_08
            0x12: object_type_12 # TRACKDEFINITION
            0x13: object_type_13 # TRACKINSTANCE
            0x1a: object_type_1a
            0x1b: object_type_1b
            0x1c: object_type_1c # part of pointlight
            0x21: object_type_21 # WORLDTREE
            0x28: object_type_28 # POINTLIGHT
            # 0x19 # SPHERELISTDEFINITION
            # _: object_type_unknown

  # FRAME and BMINFO
  # FRAME "filename" "name"
  object_type_03:
    seq:
      - id: name_reference
        type: s4
      - id: size1
        type: u4
      - id: filenames_length
        type: u2
      - id: filenames
        type: xor_string(filenames_length, size1)
    instances:
      name:
        type: string_hash_reference(name_reference)
      filename:
        value: filenames.decoded.strings.first

  # SIMPLESPRITEDEF
  object_type_04:
    doc: |
      SIMPLESPRITEDEF
        SIMPLESPRITETAG %s
        NUMFRAMES %d
        // repeated NUMFRAMES times
        FRAME "%s" "%s"
        CURRENTFRAME %d
        SLEEP %d
        SKIPFRAMES ON
      ENDSIMPLESPRITEDEF
    seq:
      - id: name_reference
        type: s4

      # bit 2 => CURRENTFRAME %d
      # bit 3 => SLEEP %d
      # bit 3 and 5 => SKIPFRAMES ON
      - id: flags
        type: s4
        # type: b16le

      # NUMFRAMES %d
      - id: frame_count
        type: u4

      # SLEEP %d
      - id: sleep
        type: u4
        if: animated == 1

      # points to 0x03 objects
      - id: frame_references
        type: u4
        repeat: expr
        repeat-expr: frame_count

    instances:
      # SIMPLESPRITETAG "%s"
      name:
        type: string_hash_reference(name_reference)
        # TODO: should it check if name_reference is 0
      animated:
        value: (flags & 0b1000) >> 3
      skip_frames:
        value: (flags & 0b101000) != 0


  # I think this is the ascii that is it generated from: im pretty confident
  # SIMPLESPRITEINST
  #   TAG "PIZZA_SPRITE"
  # ENDSIMPLESPRITEINST
  # object_type_05:

  # Added by 3DSPRITEDEF
  # massive - the whole bsp nodes and everything.
  object_type_08:
    seq:
      - id: unk
        type: u1

  # TRACKDEFINITION
  object_type_12:
    seq:
      # TAG
      - id: name_reference
        type: s4
      # unk
      - id: flags
        type: u4
      # NUMFRAMES %d
      - id: frame_count
        type: u4
      - id: frames
        type: frame_transform
        repeat: expr
        repeat-expr: frame_count
      # TODO: handle fields added by flags

    instances:
      name:
        type: string_hash_reference(name_reference)

  # TRACKINSTANCE
  object_type_13:
    seq:
      # TAG
      - id: name_reference
        type: s4

      - id: track_reference
        type: u4

      # bit 0 => sleep
      # bit 1 => reverse
      # bit 2 => interpolate
      - id: flags
        type: u4

      - id: sleep
        type: u4
        if: (flags & 0b1) == 1

    instances:
      name:
        type: string_hash_reference(name_reference)
      interpolate:
        value: (flags & 0b100) >> 2 == 1
      reverse:
        value: (flags & 0b10) >> 1 == 1

  # Added by 3DSPRITEDEF
  # No idea what this one is trying to do, will need to see if changing the file changes this object.
  # maybe this is the spherelist def?
  # could check mapedit for an example spherelist with more data
  object_type_1a:
    seq:
      - id: unk1
        type: u4
      # might be a name_ref
      - id: unk2
        type: s4
      - id: unk3
        type: u4

  # LIGHTDEFINITION
  # unable to test CURRENTFRAME or multiple frames/colors.
  object_type_1b:
    seq:
      - id: name_reference
        type: s4

      # bit 0 => CURRENTFRAME %d
      # bit 1 => SLEEP %d
      # bit 2 => LIGHTLEVELS %f
      # bit 3 => SKIPFRAMES ON
      # bit 4 and 1 => COLOR
      - id: flags
        type: s4
        # type: b16le

      # NUMFRAMES
      - id: frame_count
        type: u4
      # SLEEP %d
      - id: sleep
        type: u4
        if: (flags & 0b10) >> 1 == 1
      # LIGHTLEVELS %f
      - id: light_levels
        type: f4
        if: (flags & 0b100) >> 2 == 1
      # COLOR  %f %f %f
      - id: colors
        type: color_rgb
        repeat: expr
        repeat-expr: frame_count
        if: (flags & 0b1010) != 0 and frame_count != 0

    instances:
      name:
        type: string_hash_reference(name_reference)
      # SKIPFRAMES ON
      skip_frames:
        value: (flags & 0b1000) >> 3 == 1

  # LIGHT "%s"
  # unk fields were both 0 even with all the added instructions
  object_type_1c:
    seq:
      # always 0?
      - id: unk1
        type: u4
      - id: name_reference
        type: s4
      # always 0?
      - id: unk2
        type: u4
    instances:
      name:
        type: string_hash_reference(name_reference)

  # WORLDTREE
  object_type_21:
    seq:
      - id: unk
        type: u4

      # NUMWORLDNODES %d
      - id: world_node_count
        type: u4

      # WORLDNODE
      - id: world_nodes
        type: world_node
        repeat: expr
        repeat-expr: world_node_count

  # POINTLIGHT
  object_type_28:
    seq:
      # TAG
      - id: name_reference
        type: s4
      - id: light_reference
        type: s4

      # bit 5 => STATIC
      # bit 6 => STATICINFLUENCE
      # bit 7 => NUMREGIONS and REGIONS
      - id: flags
        type: u4

      # XYZ %f, %f, %f
      - id: x
        type: f4
      - id: y
        type: f4
      - id: z
        type: f4

      # RADIUSOFINFLUENCE
      - id: radius
        type: f4

      # NUMREGIONS %d
      - id: region_count
        type: u4
        if: (flags & 0b10000000) != 0

      # REGIONS %d
      # values are offset by 1
      # REGIONS 0, 3, 5
      # becomes -1, 2, 4
      - id: regions
        type: s4
        repeat: expr
        repeat-expr: region_count
        if: (flags & 0b10000000) != 0

    instances:
      name:
        type: string_hash_reference(name_reference)
        if: name_reference != 0
      static:
        value: (flags & 0b100000) != 0
      static_influence:
        value: (flags & 0b1000000) != 0

  # # object_type_unknown:

