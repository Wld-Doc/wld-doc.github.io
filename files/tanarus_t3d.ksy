meta:
  id: tanarus_t3d
  file-extension: t3d
  endian: le

seq:
  - id: header
    type: header

  - id: files
    type: file(_index)
    repeat: expr
    repeat-expr: header.num_offsets - 1

  - id: total_filesize
    type: u8

  - id: filenames
    type: strz
    encoding: ASCII
    repeat: expr
    repeat-expr: header.num_offsets - 1

types:
  header:
    seq:
      - id: magic
        contents: [0x02, 0x3D, 0xFF, 0xFF]
      - id: version
        contents: [0x00, 0x57, 0x01, 0x00]
      - id: num_offsets
        type: u4
      - id: filenames_length
        type: u4
  file:
    params:
      - id: i
        type: u4
    seq:
      - id: file_offset
        type: u4
      - id: filename_offset
        type: u4
    instances:
      next_file_offset:
        value: '(i == _root.header.num_offsets - 2) ? _root.total_filesize : _parent.files[i + 1].file_offset'
      filename:
        io: _root._io
        type: strz
        encoding: ASCII
        pos: sizeof<header> + (sizeof<file> * i) + filename_offset
      filesize:
        value: next_file_offset - file_offset
      body:
        io: _root._io
        pos: file_offset
        size: filesize

