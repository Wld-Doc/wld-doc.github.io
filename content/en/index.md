---
title: Introduction
description: ''
position: 1
category: ''
---

<alert type="warning">
This is very much a WIP.
</alert>

# True3d Engine / Sony `.wld` file format

While quite a bit is already known \(see Windcatcher's [WLD File Reference](https://eqemu.gitbook.io/server/categories/zones/customizing-zones/wld-file-reference)\), I
wanted to document my attempts at leveraging other games and files to further define the format and share some interesting things I found along the way.


## Topics

- Games and programs that utilize variants of the `.wld` file format
- Small `.wld` file snippets that can be processed by [WLDCOM.EXE](wldcom/overview)
- [Kaitai Structs](kaitai/structs) to document the formats and generate parsers

## Reminders

Various things I need to add or have come across but havn't documented yet:

- Reorg parsers into their own category.

- Create section for ascii files found in `global4_chr.s3d`
  - `*.mdf`
  - `*.sps`

- ASCII source file exts found
  - `.mdf` - material definition (file?)
  - `.sps` - sprite simple
  - `.sph` - sprite hierarchical
  - `.adf` - actor definition file?
  - `.ant` - (unk - included instead of a .sps)
  - `.dep` - file dependency
  - RtK has a whole slew of new file exts for different compressed objects.

- MapEdit function `FUN_0041a810` generates an ascii "TANARUS3D Preview World" `.wld`

- GameGen
  - MapEdit string: `// Source File Type: GameGen`
  - https://www.bloomberg.com/press-releases/1996-05-15/pyrotechnix-and-viacom-new-media-sign-development-and-licensing [(mirror)](https://archive.today/knfE3)
  - > True3D is a Windows 95, real-time, 3-D game development system with data import support for 3D Studio(TM), Alias(TM) and GameGen(TM).
  - > "This is our second major development deal using the True3D technology," said PyroTechnix President, Sinjin Bain, referring to last week's announcement regarding a development and licensing deal with Sony Interactive.

- Ascii `.wld` snippets w/ hexdump of corresponding bin. Something like [this](/wldcom/overview#compress)

- [DAG hierarchy](https://knowledge.autodesk.com/guidref/MAYAUL/2022/learn-explore/GUID-5029CF89-D420-4236-A7CF-884610828B70)

## TL;DR

I've found that [WLDCOM.EXE](wldcom/overview) and other files could be used to expand the public understanding of binary `.wld` files and the ascii format they were generated from.
