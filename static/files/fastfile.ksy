meta:
  id: fastfile
  file-extension: fastfile
  endian: le
seq:
  - id: num_offsets
    type: u4
  - id: first_offset
    type: u4
  - id: files
    type: file_entry(_index) # <= pass `_index` into file_entry
    repeat: expr
    repeat-expr: num_offsets - 1
types:
  file_entry:
    params:
      - id: i                # => receive `_index` as `i` here
        type: u4
    seq:
      - id: filename
        type: strz
        size: 13
        encoding: ASCII
      - id: ofs_end
        type: u4
    instances:
      ofs_start:
        # Normally we access previous file's end offset and use it as
        # our current start offset, but for the very first file we'll
        # use special field, as "previous file" does not exist for it.
        value: 'i > 0 ? _parent.files[i - 1].ofs_end : _parent.first_offset'
      filesize:
        value: ofs_end - ofs_start
      body:
        pos: ofs_start
        size: filesize
