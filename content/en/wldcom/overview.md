---
title: Game WLD file compressor - WLDCOM.EXE
description: ''
position: 10
category: wldcom
---

Found in the map editor for Tanarus [Basic_MapEdit.zip](/tanarus/map-editor)

## Usage

```bash
> WLDCOM.EXE
Game WLD file compressor v1.47, Copyright 1995-1996 PyroTechnix, Inc.
Usage:  WLDCOM [-flags] infile [outfile]
        flags:
        -c:<file>    Palette file for RGB color matching (default=palette.bmp)
        -r:<n1>:<n1> Use palette colors <n1> through <n2> (default:11:246)
        -i:<dir;..>  Path to search for INCLUDE files (default:%WLDPATH%)
        -n[:cmd]     List referenced file names (opt. format using cmd string)
        -q           Quiet mode (no progress messages)
        -s           Collect statistics on WLD file
        -d           Decompress (produces ASCII version of binary WLD file)
        -x           Use memory mapping for the region visibility information
        Default behaviour is to compress files with include files expanded
        inline. Output file name is required. The utility will not overwrite
        an existing file. A temporary file named WCOMnnnn.TMP is created during
        the compilation and will normally be destroyed automatically. If the
        -x option is specified, an additional .VIS file will also be created.
```

## Examples

### Compress

<code-group>
  <code-block label="command" active>

  ```
  > WLDCOM.EXE SIMPLESPRITEDEF-anim.ascii.wld SIMPLESPRITEDEF-anim.bin.wld

  Game WLD file compressor v1.47, Copyright 1995-1996 PyroTechnix, Inc.
  Compressing...
  SIMPLESPRITEDEF-anim.ascii.wld
  ...completed.

    processed: 5 objects (0 regions)
  max object: 32 bytes
  string pool: 5 strings (46 bytes)
  ```

  </code-block>
  <code-block label="stats">

  ```
  > WLDCOM.EXE -s SIMPLESPRITEDEF-anim.ascii.wld SIMPLESPRITEDEF-anim.bin.wld

  Game WLD file compressor v1.47, Copyright 1995-1996 PyroTechnix, Inc.
  Compressing...
  SIMPLESPRITEDEF-anim.ascii.wld
  ...completed.

    processed: 5 objects (0 regions)
  max object: 32 bytes
  string pool: 5 strings (46 bytes)

  -- object summary --                     count     space
  default palette file name                    0         0
  world user data                              0         0
  BM Info's                                    4        96
  simple sprite definitions                    1        32
  simple sprite instances                      0         0
  2D sprite definitions                        0         0
  2D sprite instances                          0         0
  3D sprite definitions                        0         0
  3D sprite instances                          0         0
  4D sprite definitions                        0         0
  4D sprite instances                          0         0
  particle sprite definitions                  0         0
  particle sprite instances                    0         0
  composite sprite definitions                 0         0
  composite sprite instances                   0         0
  hierarchical sprite definitions              0         0
  hierarchical sprite instances                0         0
  track definitions                            0         0
  track instances                              0         0
  actor definitions                            0         0
  actor instances                              0         0
  sphere volumes                               0         0
  polyhedron definitions                       0         0
  polyhedron instances                         0         0
  spherelist definitions                       0         0
  spherelist instances                         0         0
  light definition                             0         0
  light instances                              0         0
  point lights                                 0         0
  WAV Info's                                   0         0
  sound definitions                            0         0
  sound instances                              0         0
  world tree                                   0         0
  normal regions                               0         0
  active geometry regions                      0         0
  sky regions                                  0         0
  directional light                            0         0
  blit sprite definition                       0         0
  blit sprite instance                         0         0
  point lights                                 0         0
  zone                                         0         0
  ambient lights                               0         0
  directional light                            0         0
  (null)                                       0         0
  ```

  </code-block>
  <code-block label="ascii">

  ```c[SIMPLESPRITEDEF-anim.ascii.wld]
  source:SIMPLESPRITEDEF-anim.ascii.wld
  ```

  </code-block>
  <code-block label="bin">

  ```hexdump[SIMPLESPRITEDEF-anim.bin.wld]
  00000000  02 3d 50 54 00 55 01 00  05 00 00 00 00 00 00 00  |.=PT.U..........|
  00000010  20 00 00 00 30 00 00 00  05 00 00 00 95 6a ac 50  | ...0........j.P|
  00000020  ef 1b a5 5b 95 6a ac 50  ef 1b a5 58 95 6a ac 50  |...[.j.P...X.j.P|
  00000030  ef 1b a5 59 95 6a ac 50  ef 1b a5 5e 95 6a 8c 70  |...Y.j.P...^.j.p|
  00000040  cf 3b ca 39 c5 68 8c 7e  d0 7a 00 00 18 00 00 00  |.;.9.h.~.z......|
  00000050  03 00 00 00 ff ff ff ff  00 00 00 00 0c 00 c5 53  |...............S|
  00000060  bf 50 f4 4a a4 44 f7 57  b5 2a 00 00 18 00 00 00  |.P.J.D.W.*......|
  00000070  03 00 00 00 f7 ff ff ff  00 00 00 00 0c 00 c5 53  |...............S|
  00000080  bf 50 f4 4a a7 44 f7 57  b5 2a 00 00 18 00 00 00  |.P.J.D.W.*......|
  00000090  03 00 00 00 ef ff ff ff  00 00 00 00 0c 00 c5 53  |...............S|
  000000a0  bf 50 f4 4a a6 44 f7 57  b5 2a 00 00 18 00 00 00  |.P.J.D.W.*......|
  000000b0  03 00 00 00 e7 ff ff ff  00 00 00 00 0c 00 c5 53  |...............S|
  000000c0  bf 50 f4 4a a1 44 f7 57  b5 2a 00 00 20 00 00 00  |.P.J.D.W.*.. ...|
  000000d0  04 00 00 00 df ff ff ff  18 00 00 00 04 00 00 00  |................|
  000000e0  c8 00 00 00 01 00 00 00  02 00 00 00 03 00 00 00  |................|
  000000f0  04 00 00 00 ff ff ff ff                           |........|
  000000f8
  ```

  </code-block>
</code-group>
