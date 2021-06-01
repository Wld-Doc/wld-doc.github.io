---
title: 'T3D Files'
description: ''
position: 4
category: oldeq
---

The [oldeq.zip](/oldeq/oldeq-zip) archive contains a couple files of interest `EQUEST.T3D`, and `EQUIP.T3D`.

While `.t3d` was the extension used for one of Sony's other games, [Tanarus](/games/tanarus), the format didn't exactly match the format described by the [Tanarus .t3d file extractor, T3D](https://github.com/MrPnut/T3D).

The format was simple enough to figure out, see [Fastfile.ksy](/kaitai/structs#fastfileksy) for details.
<alert type="warning">
TODO: Mention Visual Studio 6 directx5 fastfile/ffcreate sample and ffcreate.exe in tanarus mapedit
</alert>

## JS Parser

Extracts `EQUEST.T3D` and `EQUIP.T3D` with [client side JS](/kaitai/js-parsers#fastfilejs) generated from [Fastfile.ksy](/kaitai/structs#fastfileksy).

<t3d-file t3d-type="fastfile"></t3d-file>


## T3D contents

<code-group>
  <code-block label="EQUEST.T3D" active>

  ```
  > ls -1sh EQUEST_t3d
  total 4.1M
  20K ANGEL.BMP
  36K ARMOR.BMP
  20K BLMARBLE.BMP
  20K BLOCK_D.BMP
  20K BMPYWALL.BMP
  8.0K BOARD_.BMP
  20K CAN0001.BMP
  20K CAN0002.BMP
  20K CAN0003.BMP
  20K CAN0004.BMP
  20K CAN0005.BMP
  36K CENTERGL.BMP
  20K CHURCHCI.BMP
  20K CINDER_A.BMP
  20K CLOUDS1.BMP
  20K CLOUDS2.BMP
  20K CLOUDS3.BMP
  20K CLOUDS4.BMP
  20K CLOUDS5.BMP
  20K CLOUDS6.BMP
  20K CREST.BMP
  20K CRUMRCK.BMP
  4.0K EQUEST.DEP
  2.7M EQUEST.WLD
  20K JEWELED.BMP
  68K LEATHER.BMP
  20K MAPLE.BMP
  20K MARBCH_A.BMP
  20K MARBLE_B.BMP
  20K MARBL_E.BMP
  20K MARBLE_D.BMP
  20K MARBLE_I.BMP
  20K MARBLE_M.BMP
  20K MARBL_F.BMP
  20K MARBL_G0.BMP
  20K MARBL_G.BMP
  20K MARFIRE1.BMP
  20K MARFIRE2.BMP
  20K MARFIRE3.BMP
  20K MARFIRE4.BMP
  20K METAL_A.BMP
  20K MRWAL10.BMP
  20K MRWAL11.BMP
  20K MRWAL12.BMP
  20K MRWAL13.BMP
  20K MRWAL14.BMP
  20K PALETTE.BMP
  20K PERSRUG_.BMP
  20K RATTAN.BMP
  20K REDCARP.BMP
  20K ROSEWOOD.BMP
  20K RYALCARP.BMP
  104K SMCAS102.LEV
  20K STNFLR_A.BMP
  20K STONE_A.BMP
  68K STRAW.BMP
  12K TEPESTRY.BMP
  20K TILES_B.BMP
  20K TILES.BMP
  20K TRUNKS.BMP
  20K WATER01.BMP
  20K WATER02.BMP
  20K WATER03.BMP
  20K WATER04.BMP
  20K WEAVE_A.BMP
  20K WOOD_A.BMP
  ```

  </code-block>
  <code-block label="EQUIP.T3D">

  ```
  > ls -1sh EQUIP_t3d
  total 1.9M
  4.0K ARM2.BMP
  4.0K ARM.BMP
  20K BACK.BMP
  412K BEAST1.SPH
  4.0K BOOT.BMP
  8.0K CHEST.BMP
  8.0K CHITON.BMP
  36K COAT.BMP
  24K COLLDISP.SPR
  48K EQUIP.WLD
  8.0K FACEBAK.BMP
  8.0K FACEB.BMP
  8.0K FACE.BMP
  8.0K FACEMER.BMP
  4.0K GLOVE.BMP
  4.0K HANDB.BMP
  4.0K HANDF.BMP
  8.0K HEAD.BMP
  8.0K HELM.BMP
  8.0K HOULDERS.BMP
  8.0K IAXE.BMP
  8.0K IBAG.BMP
  8.0K ICHAIN.BMP
  8.0K ICLOAK.BMP
  8.0K ICOPPER.BMP
  8.0K IDAGGER.BMP
  8.0K IGOLD.BMP
  8.0K IHALBERD.BMP
  8.0K ILANTERN.BMP
  8.0K ILEATHER.BMP
  8.0K IMACE.BMP
  8.0K INCKLACE.BMP
  8.0K IPLAT.BMP
  8.0K IRING.BMP
  8.0K IRINGLT.BMP
  8.0K IROBE.BMP
  8.0K ISCEPTER.BMP
  8.0K ISHIELD.BMP
  8.0K ISILVER.BMP
  8.0K ISWORD2.BMP
  8.0K ISWORD.BMP
  8.0K LEG2.BMP
  8.0K LEGB.BMP
  8.0K LEG.BMP
  20K MANTLE.BMP
  4.0K MEAT1.BMP
  4.0K MEAT2.BMP
  172K MERCHANT.SPH
  8.0K MSLEVE2.BMP
  8.0K MSLEVE.BMP
  192K OLD_ME~1.SPH
  248K OLD_WA~1.SPH
  8.0K RSLEVE2.BMP
  8.0K RSLEVE.BMP
  8.0K SHOULDER.BMP
  12K SLEAVE.BMP
  20K STUD2.BMP
  20K STUDS.BMP
  8.0K SWORD.BMP
  4.0K THROAT.BMP
  36K TUNIC2.BMP
  36K TUNIC.BMP
  244K WARRIOR1.SPH
  ```

  </code-block>
</code-group>

### WLD/SPH files

Mixed in with the `.bmp` files are `.sph` and `.wld` files in an uncompressed ascii format that is (mostly) compaitible with [Tanarus'](/games/tanarus) compressor tool.
See [WLDCOM.EXE](../wldcom/overview) for more info.

<code-group>
  <code-block label="compress" active>

  ```
  > WLDCOM.EXE MERCHANT.SPH MERCHANT.BIN.SPH

  Game WLD file compressor v1.47, Copyright 1995-1996 PyroTechnix, Inc.
  Compressing...
  MERCHANT.SPH
  ...completed.

    processed: 386 objects (0 regions)
  max object: 3596 bytes
  string pool: 216 strings (3983 bytes)
  ```

  </code-block>
  <code-block label="stats">

  ```
  > WLDCOM.EXE -s MERCHANT.SPH MERCHANT.BIN.SPH

  Game WLD file compressor v1.47, Copyright 1995-1996 PyroTechnix, Inc.
  Compressing...
  MERCHANT.SPH
  ...completed.

    processed: 386 objects (0 regions)
  max object: 3596 bytes
  string pool: 216 strings (3983 bytes)

  -- object summary --                     count     space
  default palette file name                    0         0
  world user data                              0         0
  BM Info's                                   12       268
  simple sprite definitions                   12       192
  simple sprite instances                    191      2292
  2D sprite definitions                        0         0
  2D sprite instances                          0         0
  3D sprite definitions                       16     27052
  3D sprite instances                         16       192
  4D sprite definitions                        0         0
  4D sprite instances                          0         0
  particle sprite definitions                  0         0
  particle sprite instances                    0         0
  composite sprite definitions                 0         0
  composite sprite instances                   0         0
  hierarchical sprite definitions              1      1288
  hierarchical sprite instances                0         0
  track definitions                           53      6460
  track instances                             53       848
  actor definitions                            0         0
  actor instances                              0         0
  sphere volumes                               0         0
  polyhedron definitions                       0         0
  polyhedron instances                         0         0
  spherelist definitions                      16       576
  spherelist instances                        16       192
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
</code-block-group>

### Other files

`SMCAS102.LEV` my working assuption is that this is related to the original level editior's save file but I havn't investigated further.

`EQUEST.DEP` contains a list of bmp filenames delimited by `CRLF`
