---
title: FFCREATE.EXE
description: ''
position: 10
category: files
---

Found in the map editor for Tanarus [Basic_MapEdit.zip](/tanarus/map-editor)

See [T3dFastFile](/formats/t3d_fast_file) for more information regarding the file format.

## Usage

```bash
> FFCREATE.exe
WAD File Creation Utility v1.40, Copyright 1995-1996 PyroTechnix, Inc.
Usage: FFCREATE [-8.3] [WAD file]
       This program bundles all of the files in the current directory
       together into a single file. The name of the resulting file is
       specified on the command line. If the WAD file name is omitted,
       the file is named RESULT.FF and is placed in the root directory
       of the current drive. Do not attempt to create the WAD file in
       the same directory as the source files. The '-8.3' option can be
       used to reduce the WAD file size slightly in the case that only
       DOS 8.3 file names are used.
```

## Examples

<code-group>
  <code-block label="command" active>

  ```bash
  $ ls .
  Example.txt

  $ cat Example.txt
  Hello There

  $ ffcreate.exe ../Example.t3d
  WAD File Creation Utility v1.40, Copyright 1995-1996 PyroTechnix, Inc.
  Creating WAD File "../Example.t3d"
  Pass 1: building header
  Pass 2: adding data files
  WAD File "../Example.t3d" created:
      1 files
      56 total file size
  ```

  </code-block>
  <code-block label="result">

  ```hexdump[Example.t3d]
  00000000  02 3d ff ff 00 57 01 00  02 00 00 00 0c 00 00 00  |.=...W..........|
  00000010  2c 00 00 00 10 00 00 00  38 00 00 00 00 00 00 00  |,.......8.......|
  00000020  45 78 61 6d 70 6c 65 2e  74 78 74 00 48 65 6c 6c  |Example.txt.Hell|
  00000030  6f 20 54 68 65 72 65 0a                           |o There.|
  00000038
  ```

  </code-block>
</code-group>
