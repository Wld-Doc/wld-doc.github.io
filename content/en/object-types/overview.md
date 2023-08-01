---
title: Overview
description: ''
position: 20
category: object types
---

## CPIWORLD

<alert type="info">
<strong>CPI</strong> may refer to PyroTechnix's former name, Computer Presentations, Inc.
</alert>

```c
CPIWORLD "%s"
ENDCPIWORLD "%s
```

## INCLUDE

```c
INCLUDE "%s"
```

## DEFAULTPALETTEFILE - 0x01

```c
DEFAULTPALETTEFILE "%s.bmp"
```

[Ref]()

## USERDATA - 0x02

```c
USERDATA "%s"
```

[Ref]()

## FRAME - 0x03

```c
FRAME "%s.bmp" "%s"
```

[Ref](https://eqemu.gitbook.io/server/categories/zones/customizing-zones/wld-file-reference#0x03-texture-bitmap-name-s-plain)

## BMINFO - 0x03

```c
BMINFO "%s" "%s.bmp"
```

[Ref](https://eqemu.gitbook.io/server/categories/zones/customizing-zones/wld-file-reference#0x03-texture-bitmap-name-s-plain)

## SIMPLESPRITEDEF - 0x04

```c
SIMPLESPRITEDEF
  SIMPLESPRITETAG "%s"
  NUMFRAMES %d
  FRAME "%s.bmp" "%s"
  CURRENTFRAME %d
  SLEEP %d
  SKIPFRAMES ON
ENDSIMPLESPRITEDEF
```

[Ref](https://eqemu.gitbook.io/server/categories/zones/customizing-zones/wld-file-reference#0x04-texture-bitmap-info-plain)

## SIMPLESPRITEINST - 0x05

<alert type="warning">Unverified</alert>

```c
// SIMPLESPRITEINST
//   TAG "PIZZA_SPRITE"
// ENDSIMPLESPRITEINST

SIMPLESPRITEINST
  DEFINITION "%s"
  SKIPFRAMES ON
ENDSIMPLESPRITEINST
```

[Ref](https://eqemu.gitbook.io/server/categories/zones/customizing-zones/wld-file-reference#0x05-texture-bitmap-info-reference-reference)

## 2DSPRITEDEF - 0x06

<alert type="warning">Unverified</alert>

```c
2DSPRITEDEF
  2DSPRITETAG "%s"
  CENTEROFFSET %f %f %f
  NUMFRAMES %d
  // I assume it needs a FRAME as well?
  CURRENTFRAME %d
  SLEEP %d
  SKIPFRAMES ON
  SPRITESIZE %f %f
  DEPTHSCALE %f
  NUMPITCHES %d
  PITCH
    PITCHCAP %d
    TOPORBOTTOMVIEW
    NUMHEADINGS %d
    HEADING
      HEADINGCAP %d
    ENDHEADING
  ENDPITCH

  source:partials/RENDER.txt

  source:partials/SPHERE.txt

  BOUNDINGRADIUS %f
END2DSPRITEDEF
```

[Ref](https://eqemu.gitbook.io/server/categories/zones/customizing-zones/wld-file-reference#0x06-two-dimensional-object-plain)

## 0x07

<alert type="warning">Unverified</alert>
Might be related to 2DSPRITEDEF

```c
```

[Ref](https://eqemu.gitbook.io/server/categories/zones/customizing-zones/wld-file-reference#0x07-camera-reference-reference)

## 3DSPRITEDEF - 0x08

<alert type="warning">Unverified</alert>

```c
3DSPRITEDEF
  3DSPRITETAG "%s"
  ENABLEGOURAUD2
  CENTEROFFSET %f %f %f
  NUMVERTICES %d
  XYZ %f %f %f
  NUMBSPNODES %d
  BSPNODE
    NORMALABCD %f %f %f %f
    NUMVERTICES %d
    VERTEXLIST %d ...%d

    source:partials/RENDER.txt

    FRONTTREE %d
    BACKTREE %d
  ENDBSPNODE

  source:partials/SPHERE.txt

  BOUNDINGRADIUS %f
END3DSPRITEDEF
```

[Ref](https://eqemu.gitbook.io/server/categories/zones/customizing-zones/wld-file-reference#0x08-camera-plain)

## 0x09

<alert type="warning">Unverified</alert>
Related to 3DSPRITEDEF, Maybe the 3DSPRITETAG to map the string.
When I added a second ACTION to ACTORINST test, a second 0x09 was added. maybe from the 3DSPRITE %s. bodies are both compressed to 0 1 0

```c
```

[Ref](https://eqemu.gitbook.io/server/categories/zones/customizing-zones/wld-file-reference#0x09-camera-reference-reference)

## 4DSPRITEDEF - 0xa

<alert type="warning">Unverified</alert>

```c
```

[Ref]()

## 0xb
FUN_004079a0
<alert type="warning">Unverified</alert>

```c
```

[Ref]()

## PARTICLESPRITEDEF - 0xc

<alert type="warning">Unverified</alert>

```c
PARTICLESPRITEDEF
  PARTICLESPRITETAG "%s"
  CENTEROFFSET %f %f %f
  LARGEDOTS ON
  NUMVERTICES %d

  XYZPEN %f %f %f %d

  source:partials/RENDER.txt

ENDPARTICLESPRITEDEF
```

Example: oldeq/EQUIP.t3d/COLLDISP.SPR

[Ref]()

## 0xd
<alert type="warning">Unverified</alert>

```c
```

[Ref]()

## COMPOSITESPRITEDEF - 0xe

<alert type="warning">Unverified</alert>

```c
COMPOSITESPRITEDEF
  COMPOSITESPRITETAG "%s"
  NUMFRAMES %d
  NUMCOMPONENTS %d
    COMPONENT

      source:partials/SPRITETYPE.txt

      FRAMETRANSFORM %f %d %d %d %f %f %f
    ENDCOMPONENT
  CURRENTFRAME %d
  SLEEP %d
  SKIPFRAMES ON
  CENTEROFFSET %f %f %f

  source:partials/SPHERE.txt

  BOUNDINGRADIUS %f
ENDCOMPOSITESPRITEDEF
```

[Ref]()

## 0xf
<alert type="warning">Unverified</alert>

```c
```

[Ref]()

## HIERARCHICALSPRITEDEF - 0x10

<alert type="warning">Unverified</alert>

```c
HIERARCHICALSPRITEDEF
  TAG "%s"
  NUMDAGS %d
  DAG
    TAG "%s"

    source:partials/SPRITETYPE.txt

    TRACK "%s"
    NUMSUBDAGS %d
    SUBDAGLIST %d... // might have args like 2 4 6
  ENDDAG
  CENTEROFFSET %f %f %f

  source:partials/SPHERE.txt

  BOUNDINGRADIUS %f
ENDHIERARCHICALSPRITEDEF
```

### Examples
- oldeq/EQUIP.t3d/*.SPH

[Ref](https://eqemu.gitbook.io/server/categories/zones/customizing-zones/wld-file-reference#0x10-skeleton-track-set-plain)

## 0x11

<alert type="warning">Unverified</alert>

```c
```

[Ref](https://eqemu.gitbook.io/server/categories/zones/customizing-zones/wld-file-reference#0x11-skeleton-track-set-reference-reference)

## TRACKDEFINITION- 0x12

<alert type="warning">Unverified</alert>

Functions for calculating the tranform are interesting.

```c
TRACKDEFINITION
  TAG "%s"
  NUMFRAMES %d
  FRAMETRANSFORM %f %d %d %d %f %f %f
ENDTRACKDEFINITION
```

### Examples
- oldeq/EQUIP.t3d/*.SPH

[Ref](https://eqemu.gitbook.io/server/categories/zones/customizing-zones/wld-file-reference#0x12-mob-skeleton-piece-track-plain)

## TRACKINSTANCE - 0x13

<alert type="warning">Unverified</alert>

```c
TRACKINSTANCE
  TAG "%s"
  DEFINITION "%s"
  REVERSE
  INTERPOLATE
  SLEEP %d
ENDTRACKINSTANCE
```

### Examples
- oldeq/EQUIP.t3d/*.SPH

[Ref](https://eqemu.gitbook.io/server/categories/zones/customizing-zones/wld-file-reference#0x13-mob-skeleton-piece-track-reference-reference)

## ACTORDEF - 0x14

<alert type="warning">Unverified</alert>

```c
ACTORDEF
  ACTORTAG "%s"
  ACTIVEGEOMETRY
  CALLBACK "%s"
  NUMACTIONS %d
  ACTION
    NUMLEVELSOFDETAIL %d
    LEVELOFDETAIL

      source:partials/SPRITETYPE.txt

      MINDISTANCE %f
      MAXDISTANCE %f

    ENDLEVELOFDETAIL
  ENDACTION
  CURRENTACTION %d
  LOCATION %d %f %f %f %d %d %d
  SPRITEVOLUMEONLY

  source:partials/SPHERE.txt

  USERDATA "%s"
ENDACTORDEF
```

### Examples
- oldeq/EQUEST.t3d/EQUEST.WLD

[Ref](https://eqemu.gitbook.io/server/categories/zones/customizing-zones/wld-file-reference#0x14-static-or-animated-model-reference-player-info-plain)

## ACTORINST - 0x15

<alert type="warning">Unverified</alert>

```c
ACTORINST
  DEFINITION "%s"
  TAG "%s"
  ACTIVE
  CURRENTACTION %d
  LOCATION %d %f %f %f %d %d %d
  SPRITEVOLUMEONLY

  source:partials/SPHERE.txt

  // It appears that spritesize can be used instead of boundingradius and scalefactor
  // trying both returns "sprite size illegal with bounding radius & scale factor"
  // SPRITESIZE %f %f

  BOUNDINGRADIUS %f
  SCALEFACTOR %f
  SOUND "%s"
  USERDATA "%s"
ENDACTORINST
```

### Examples
- oldeq/EQUEST.t3d/EQUEST.WLD

[Ref](https://eqemu.gitbook.io/server/categories/zones/customizing-zones/wld-file-reference#0x15-object-location-reference)

## 0x16

Generated from ACTORINST test

<alert type="warning">Unverified</alert>

```c
```

[Ref](https://eqemu.gitbook.io/server/categories/zones/customizing-zones/wld-file-reference#0x16-zone-unknown-plain)

## POLYHEDRONDEFINITION - 0x17

<alert type="warning">Unverified</alert>

```c
POLYHEDRONDEFINITION
  TAG "%s"
  BOUNDINGRADIUS %f
  SCALEFACTOR %f
  NUMVERTICES %d
  XYZ %f %f %f
  NUMFACES %d
  FACE
    NORMALABCD %f %f %f %f
    NUMVERTICES %d
    VERTEXLIST %d ...%d
  ENDFACE
ENDPOLYHEDRONDEFINITION
```

[Ref](https://eqemu.gitbook.io/server/categories/zones/customizing-zones/wld-file-reference#0x17-polygon-animation-plain)

## 0x18
<alert type="warning">Unverified</alert>

```c
```

[Ref](https://eqemu.gitbook.io/server/categories/zones/customizing-zones/wld-file-reference#0x18-polygon-animation-reference-reference)

## SPHERELISTDEFINITION - 0x19

<alert type="warning">Unverified</alert>

```c
SPHERELISTDEFINITION
  TAG "%s"
  BOUNDINGRADIUS %f
  SCALEFACTOR %f
  NUMSPHERES %d
  SPHERE %f %f %f %f
ENDSPHERELISTDEFINITION
```

[Ref]()

## 0x1a

Added by 3DSPRITEDEF
<alert type="warning">Unverified</alert>

```c
```

[Ref]()

## LIGHTDEFINITION - 0x1b

<alert type="warning">Unverified</alert>

```c
LIGHTDEFINITION
  TAG "%s"
  NUMFRAMES %d
  LIGHTLEVELS %f ...%f
  CURRENTFRAME %d
  SLEEP %d
  SKIPFRAMES ON
  // Repeated for each light level
  COLOR  %f %f %f
ENDLIGHTDEFINITION
```

[Ref](https://eqemu.gitbook.io/server/categories/zones/customizing-zones/wld-file-reference#0x-1-b-light-source-plain)

## 0x1c
<alert type="warning">Unverified</alert>

```c
```

[Ref](https://eqemu.gitbook.io/server/categories/zones/customizing-zones/wld-file-reference#0x-1-c-light-source-reference-reference)

## POINTLIGHT - 0x1d

<alert type="warning">Unverified</alert>

```c
POINTLIGHT
  TAG "%s"
  XYZ %f %f %f

  // FUN_0040ba70 // maybe this is loading the name for the following LIGHT call?

  LIGHT "%s"
  RADIUSOFINFLUENCE %f
ENDPOINTLIGHT
```

### Examples
- oldeq/EQUEST.t3d/EQUEST.WLD

[Ref]()

## 0x1e
<alert type="warning">Unverified</alert>

```c
```

[Ref]()

## SOUNDDEFINITION - 0x1f

Lots of strings around here that arnt in the decompile.

<alert type="warning">Unverified</alert>

```c
SOUNDDEFINITION
  TAG "%s"
  DRYWAVE unknown // FUN_0040a290
  WETWAVE unknown // FUN_0040a290
  NUMBUFFERS %d
  VOLUME %f %s // maybe CONSTANT or POSITIONBASED
  PAN POSITIONBASED
  // PAN %f
  DOPPLER %f %s
  IMMEDIATE ON
  UPDATE ON
  TEMPORARY ON
  INTERRUPT ON
  SYNC ON
  REVERB ON
  LOOP ON
  DELTATIME %d
  DESTROYTIME %d
ENDSOUNDDEFINITION
```

[Ref]()

## SOUNDINSTANCE - 0x20

<alert type="warning">Unverified</alert>

```c
SOUNDINSTANCE
  DEFINITION "%s"
  TAG "%s"
  XYZ %f %f %f
  BEGINTIME %d
  VOLUME %f %s
  PAN POSITIONBASED
  // PAN %f
  DOPPLER %f %s
  IMMEDIATE %s
  UPDATE %s
  TEMPORARY %s
  INTERRUPT %s
  SYNC %s
  REVERB %s
  LOOP %s
  DELTATIME %d
  DESTROYTIME %d
ENDSOUNDINSTANCE
```

[Ref]()

## WORLDTREE - 0x21

<alert type="warning">Unverified</alert>

```c
WORLDTREE
  NUMWORLDNODES %d
    WORLDNODE
      NORMALABCD %f %f %f %f
      WORLDREGIONTAG %d
      FRONTTREE %d
      BACKTREE %d
    ENDWORLDNODE
ENDWORLDTREE
```

[Ref](https://eqemu.gitbook.io/server/categories/zones/customizing-zones/wld-file-reference#0x21-bsp-tree-plain)

## REGION - 0x22

<alert type="warning">Unverified</alert>

```c
NUMREGIONS %d
  REGION
  source:partials/REGION.txt

```

### Examples
- oldeq/EQUEST.t3d/EQUEST.WLD

[Ref](https://eqemu.gitbook.io/server/categories/zones/customizing-zones/wld-file-reference#0x22-bsp-region-plain)

## ACTIVEGEOMETRYREGION- 0x23

<alert type="warning">Unverified</alert>

```c
NUMREGIONS %d
  ACTIVEGEOMETRYREGION
  source:partials/REGION.txt
```
### Examples
- oldeq/EQUEST.t3d/EQUEST.WLD

[Ref]()

## SKYREGION - 0x24

<alert type="warning">Unverified</alert>

```c
NUMREGIONS %d
  SKYREGION
    REGIONTAG "%s"
    AMBIENTLIGHT "%s"
    NUMREGIONVERTEX %d
      XYZ %f %f %f
    NUMACTIONS %d
      ACTION
        NUMLEVELSOFDETAIL %d
          LEVELOFDETAIL
            source:partials/RENDER.txt
            MINDISTANCE %f
            MAXDISTANCE %f
          ENDLEVELOFDETAIL
      ENDACTION
    CURRENTACTION %d
    FOGDISTANCE %f
    SPHERE %f %f %f %f
    USERDATA "%s"
  ENDREGION
```

[Ref]()

## DIRECTIONALLIGHT - 0x25

<alert type="warning">Unverified</alert>

```c
DIRECTIONALLIGHT
  TAG "%s"
  NORMAL %f %f %f
  // FUN_0040ba70 // maybe this is loading the name for the following LIGHT call?
  LIGHT "%s"
  NUMREGIONS %d
  REGIONS %d ...%d
ENDDIRECTIONALLIGHT
```

[Ref]()

## BLITSPRITEDEFINITION - 0x26

<alert type="warning">Unverified</alert>

```c
BLITSPRITEDEFINITION
  TAG "%s"

  source:partials/SPRITETYPE.txt

  TRANSPARENT ON
ENDBLITSPRITEDEFINITION
```

[Ref]()

## 0x27
<alert type="warning">Unverified</alert>

```c
```

[Ref]()

## POINTLIGHT (regions) - 0x28

A second POINTLIGHT. Adds STATIC, STATICINFLUENCE, NUMREGIONS, REGIONS

<alert type="warning">Unverified</alert>

```c
POINTLIGHT
  TAG "%s"
  XYZ %f %f %f

  // FUN_0040ba70 // maybe this is loading the name for the following LIGHT call?

  LIGHT "%s"
  RADIUSOFINFLUENCE %f
  STATIC
  STATICINFLUENCE
  NUMREGIONS %d
  REGIONS %d ...%d
ENDPOINTLIGHT
```

[Ref](https://eqemu.gitbook.io/server/categories/zones/customizing-zones/wld-file-reference#0x28-light-info-reference)

## ZONE - 0x29

<alert type="warning">Unverified</alert>

```c
ZONE
  TAG "%s"
  NUMREGIONS %d
  REGIONS %d ...%d
  USERDATA "%s"
ENDZONE
```

[Ref](https://eqemu.gitbook.io/server/categories/zones/customizing-zones/wld-file-reference#0x29-region-flag-plain)

## AMBIENTLIGHT - 0x2a

<alert type="warning">Unverified</alert>

```c
AMBIENTLIGHT
  TAG "%s"

  // FUN_0040ba70 // maybe this is loading the name for the following LIGHT call?

  LIGHT "%s"
  NUMREGIONS %d
  REGIONS %d ...%d
ENDAMBIENTLIGHT
```

[Ref](https://eqemu.gitbook.io/server/categories/zones/customizing-zones/wld-file-reference#0x-2-a-ambient-light-reference)

## DIRECTIONALLIGHT (static flag) - 0x2b

A second DIRECTIONALLIGHT with flag for STATIC

<alert type="warning">Unverified</alert>

```c
DIRECTIONALLIGHT
  TAG "%s"
  NORMAL %f %f %f

  // FUN_0040ba70 // maybe this is loading the name for the following LIGHT call?
  LIGHT "%s"
  STATIC
  NUMREGIONS %d
  REGIONS %d ...%d
ENDDIRECTIONALLIGHT
```

[Ref]()

## 0x2c+
<alert type="danger">I believe WLDCOM.EXE stops at 0x2b</alert>
