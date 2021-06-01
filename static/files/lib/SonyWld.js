// This is a generated file! Please edit source .ksy file and use kaitai-struct-compiler to rebuild

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['kaitai-struct/KaitaiStream'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('kaitai-struct/KaitaiStream'));
  } else {
    root.SonyWld = factory(root.KaitaiStream);
  }
}(this, function (KaitaiStream) {
var SonyWld = (function() {
  function SonyWld(_io, _parent, _root) {
    this._io = _io;
    this._parent = _parent;
    this._root = _root || this;

    this._read();
  }
  SonyWld.prototype._read = function() {
    this.header = new Header(this._io, this, this._root);
    this.stringHash = new XorString(this._io, this, this._root, this.header.stringHashBytes, this.header.stringCount);
    this.objects = new Array(this.header.objectCount);
    for (var i = 0; i < this.header.objectCount; i++) {
      this.objects[i] = new WldObject(this._io, this, this._root);
    }
    this.footer = this._io.readBytes(4);
    if (!((KaitaiStream.byteArrayCompare(this.footer, [255, 255, 255, 255]) == 0))) {
      throw new KaitaiStream.ValidationNotEqualError([255, 255, 255, 255], this.footer, this._io, "/seq/3");
    }
  }

  var XorString = SonyWld.XorString = (function() {
    function XorString(_io, _parent, _root, length, count) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this.length = length;
      this.count = count;

      this._read();
    }
    XorString.prototype._read = function() {
      this._raw__raw_decoded = this._io.readBytes(this.length);
      this._raw_decoded = KaitaiStream.processXorMany(this._raw__raw_decoded, [149, 58, 197, 42, 149, 122, 149, 106]);
      var _io__raw_decoded = new KaitaiStream(this._raw_decoded);
      this.decoded = new DecodedStringRaw(_io__raw_decoded, this, this._root, this.count);
    }

    return XorString;
  })();

  var ObjectType1b = SonyWld.ObjectType1b = (function() {
    function ObjectType1b(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    ObjectType1b.prototype._read = function() {
      this.nameReference = this._io.readS4le();
      this.flags = this._io.readS4le();
      this.frameCount = this._io.readU4le();
      if (((this.flags & 2) >>> 1) == 1) {
        this.sleep = this._io.readU4le();
      }
      if (((this.flags & 4) >>> 2) == 1) {
        this.lightLevels = this._io.readF4le();
      }
      if ( (((this.flags & 10) != 0) && (this.frameCount != 0)) ) {
        this.colors = new Array(this.frameCount);
        for (var i = 0; i < this.frameCount; i++) {
          this.colors[i] = new ColorRgb(this._io, this, this._root);
        }
      }
    }
    Object.defineProperty(ObjectType1b.prototype, 'name', {
      get: function() {
        if (this._m_name !== undefined)
          return this._m_name;
        this._m_name = new StringHashReference(this._io, this, this._root, this.nameReference);
        return this._m_name;
      }
    });
    Object.defineProperty(ObjectType1b.prototype, 'skipFrames', {
      get: function() {
        if (this._m_skipFrames !== undefined)
          return this._m_skipFrames;
        this._m_skipFrames = ((this.flags & 8) >>> 3) == 1;
        return this._m_skipFrames;
      }
    });

    return ObjectType1b;
  })();

  var ObjectType13 = SonyWld.ObjectType13 = (function() {
    function ObjectType13(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    ObjectType13.prototype._read = function() {
      this.nameReference = this._io.readS4le();
      this.trackReference = this._io.readU4le();
      this.flags = this._io.readU4le();
      if ((this.flags & 1) == 1) {
        this.sleep = this._io.readU4le();
      }
    }
    Object.defineProperty(ObjectType13.prototype, 'name', {
      get: function() {
        if (this._m_name !== undefined)
          return this._m_name;
        this._m_name = new StringHashReference(this._io, this, this._root, this.nameReference);
        return this._m_name;
      }
    });
    Object.defineProperty(ObjectType13.prototype, 'interpolate', {
      get: function() {
        if (this._m_interpolate !== undefined)
          return this._m_interpolate;
        this._m_interpolate = ((this.flags & 4) >>> 2) == 1;
        return this._m_interpolate;
      }
    });
    Object.defineProperty(ObjectType13.prototype, 'reverse', {
      get: function() {
        if (this._m_reverse !== undefined)
          return this._m_reverse;
        this._m_reverse = ((this.flags & 2) >>> 1) == 1;
        return this._m_reverse;
      }
    });

    return ObjectType13;
  })();

  var FrameTransform = SonyWld.FrameTransform = (function() {
    function FrameTransform(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    FrameTransform.prototype._read = function() {
      this.rotateDenominator = this._io.readF4le();
      this.rotateXNumerator = this._io.readF4le();
      this.rotateYNumerator = this._io.readF4le();
      this.rotateZNumerator = this._io.readF4le();
      this.shiftXNumerator = this._io.readF4le();
      this.shiftYNumerator = this._io.readF4le();
      this.shiftZNumerator = this._io.readF4le();
      this.shiftDenominator = this._io.readF4le();
    }

    return FrameTransform;
  })();

  var ObjectType1a = SonyWld.ObjectType1a = (function() {
    function ObjectType1a(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    ObjectType1a.prototype._read = function() {
      this.unk1 = this._io.readU4le();
      this.unk2 = this._io.readS4le();
      this.unk3 = this._io.readU4le();
    }

    return ObjectType1a;
  })();

  var ObjectType12 = SonyWld.ObjectType12 = (function() {
    function ObjectType12(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    ObjectType12.prototype._read = function() {
      this.nameReference = this._io.readS4le();
      this.flags = this._io.readU4le();
      this.frameCount = this._io.readU4le();
      this.frames = new Array(this.frameCount);
      for (var i = 0; i < this.frameCount; i++) {
        this.frames[i] = new FrameTransform(this._io, this, this._root);
      }
    }
    Object.defineProperty(ObjectType12.prototype, 'name', {
      get: function() {
        if (this._m_name !== undefined)
          return this._m_name;
        this._m_name = new StringHashReference(this._io, this, this._root, this.nameReference);
        return this._m_name;
      }
    });

    return ObjectType12;
  })();

  var WldObject = SonyWld.WldObject = (function() {
    function WldObject(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    WldObject.prototype._read = function() {
      this.length = this._io.readU4le();
      this.objectType = this._io.readU4le();
      switch (this.objectType) {
      case 4:
        this._raw_body = this._io.readBytes(this.length);
        var _io__raw_body = new KaitaiStream(this._raw_body);
        this.body = new ObjectType04(_io__raw_body, this, this._root);
        break;
      case 27:
        this._raw_body = this._io.readBytes(this.length);
        var _io__raw_body = new KaitaiStream(this._raw_body);
        this.body = new ObjectType1b(_io__raw_body, this, this._root);
        break;
      case 3:
        this._raw_body = this._io.readBytes(this.length);
        var _io__raw_body = new KaitaiStream(this._raw_body);
        this.body = new ObjectType03(_io__raw_body, this, this._root);
        break;
      case 33:
        this._raw_body = this._io.readBytes(this.length);
        var _io__raw_body = new KaitaiStream(this._raw_body);
        this.body = new ObjectType21(_io__raw_body, this, this._root);
        break;
      case 19:
        this._raw_body = this._io.readBytes(this.length);
        var _io__raw_body = new KaitaiStream(this._raw_body);
        this.body = new ObjectType13(_io__raw_body, this, this._root);
        break;
      case 8:
        this._raw_body = this._io.readBytes(this.length);
        var _io__raw_body = new KaitaiStream(this._raw_body);
        this.body = new ObjectType08(_io__raw_body, this, this._root);
        break;
      case 40:
        this._raw_body = this._io.readBytes(this.length);
        var _io__raw_body = new KaitaiStream(this._raw_body);
        this.body = new ObjectType28(_io__raw_body, this, this._root);
        break;
      case 28:
        this._raw_body = this._io.readBytes(this.length);
        var _io__raw_body = new KaitaiStream(this._raw_body);
        this.body = new ObjectType1c(_io__raw_body, this, this._root);
        break;
      case 18:
        this._raw_body = this._io.readBytes(this.length);
        var _io__raw_body = new KaitaiStream(this._raw_body);
        this.body = new ObjectType12(_io__raw_body, this, this._root);
        break;
      case 26:
        this._raw_body = this._io.readBytes(this.length);
        var _io__raw_body = new KaitaiStream(this._raw_body);
        this.body = new ObjectType1a(_io__raw_body, this, this._root);
        break;
      default:
        this.body = this._io.readBytes(this.length);
        break;
      }
    }

    return WldObject;
  })();

  var ObjectType08 = SonyWld.ObjectType08 = (function() {
    function ObjectType08(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    ObjectType08.prototype._read = function() {
      this.unk = this._io.readU1();
    }

    return ObjectType08;
  })();

  var DecodedStringRaw = SonyWld.DecodedStringRaw = (function() {
    function DecodedStringRaw(_io, _parent, _root, repeats) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this.repeats = repeats;

      this._read();
    }
    DecodedStringRaw.prototype._read = function() {
      this.strings = new Array((this.repeats + 1));
      for (var i = 0; i < (this.repeats + 1); i++) {
        this.strings[i] = KaitaiStream.bytesToStr(this._io.readBytesTerm(0, false, true, true), "ASCII");
      }
    }
    Object.defineProperty(DecodedStringRaw.prototype, 'raw', {
      get: function() {
        if (this._m_raw !== undefined)
          return this._m_raw;
        var _pos = this._io.pos;
        this._io.seek(0);
        this._m_raw = KaitaiStream.bytesToStr(this._io.readBytesFull(), "ASCII");
        this._io.seek(_pos);
        return this._m_raw;
      }
    });

    return DecodedStringRaw;
  })();

  var ColorRgb = SonyWld.ColorRgb = (function() {
    function ColorRgb(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    ColorRgb.prototype._read = function() {
      this.red = this._io.readF4le();
      this.green = this._io.readF4le();
      this.blue = this._io.readF4le();
    }

    return ColorRgb;
  })();

  var Header = SonyWld.Header = (function() {
    function Header(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    Header.prototype._read = function() {
      this.magic = this._io.readBytes(4);
      if (!((KaitaiStream.byteArrayCompare(this.magic, [2, 61, 80, 84]) == 0))) {
        throw new KaitaiStream.ValidationNotEqualError([2, 61, 80, 84], this.magic, this._io, "/types/header/seq/0");
      }
      this.version = this._io.readU4le();
      this.objectCount = this._io.readU4le();
      this.regionCount = this._io.readU4le();
      this.maxObjectBytes = this._io.readU4le();
      this.stringHashBytes = this._io.readU4le();
      this.stringCount = this._io.readU4le();
    }

    return Header;
  })();

  var ObjectType03 = SonyWld.ObjectType03 = (function() {
    function ObjectType03(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    ObjectType03.prototype._read = function() {
      this.nameReference = this._io.readS4le();
      this.size1 = this._io.readU4le();
      this.filenamesLength = this._io.readU2le();
      this.filenames = new XorString(this._io, this, this._root, this.filenamesLength, this.size1);
    }
    Object.defineProperty(ObjectType03.prototype, 'name', {
      get: function() {
        if (this._m_name !== undefined)
          return this._m_name;
        this._m_name = new StringHashReference(this._io, this, this._root, this.nameReference);
        return this._m_name;
      }
    });
    Object.defineProperty(ObjectType03.prototype, 'filename', {
      get: function() {
        if (this._m_filename !== undefined)
          return this._m_filename;
        this._m_filename = this.filenames.decoded.strings[0];
        return this._m_filename;
      }
    });

    return ObjectType03;
  })();

  var ObjectType21 = SonyWld.ObjectType21 = (function() {
    function ObjectType21(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    ObjectType21.prototype._read = function() {
      this.unk = this._io.readU4le();
      this.worldNodeCount = this._io.readU4le();
      this.worldNodes = new Array(this.worldNodeCount);
      for (var i = 0; i < this.worldNodeCount; i++) {
        this.worldNodes[i] = new WorldNode(this._io, this, this._root);
      }
    }

    return ObjectType21;
  })();

  var WorldNode = SonyWld.WorldNode = (function() {
    function WorldNode(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    WorldNode.prototype._read = function() {
      this.normalA = this._io.readF4le();
      this.normalB = this._io.readF4le();
      this.normalC = this._io.readF4le();
      this.normalD = this._io.readF4le();
      this.regionTag = this._io.readU4le();
      if (this.regionTag == 0) {
        this.frontTree = this._io.readU4le();
      }
      if (this.regionTag == 0) {
        this.backTree = this._io.readU4le();
      }
    }

    return WorldNode;
  })();

  var ObjectType1c = SonyWld.ObjectType1c = (function() {
    function ObjectType1c(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    ObjectType1c.prototype._read = function() {
      this.unk1 = this._io.readU4le();
      this.nameReference = this._io.readS4le();
      this.unk2 = this._io.readU4le();
    }
    Object.defineProperty(ObjectType1c.prototype, 'name', {
      get: function() {
        if (this._m_name !== undefined)
          return this._m_name;
        this._m_name = new StringHashReference(this._io, this, this._root, this.nameReference);
        return this._m_name;
      }
    });

    return ObjectType1c;
  })();

  var StringHashReference = SonyWld.StringHashReference = (function() {
    function StringHashReference(_io, _parent, _root, position) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this.position = position;

      this._read();
    }
    StringHashReference.prototype._read = function() {
    }
    Object.defineProperty(StringHashReference.prototype, 'string', {
      get: function() {
        if (this._m_string !== undefined)
          return this._m_string;
        var io = this._root.stringHash.decoded._io;
        var _pos = io.pos;
        io.seek((this.position * -1));
        this._m_string = KaitaiStream.bytesToStr(io.readBytesTerm(0, false, true, true), "ASCII");
        io.seek(_pos);
        return this._m_string;
      }
    });

    return StringHashReference;
  })();

  var ObjectType28 = SonyWld.ObjectType28 = (function() {
    function ObjectType28(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    ObjectType28.prototype._read = function() {
      this.nameReference = this._io.readS4le();
      this.lightReference = this._io.readS4le();
      this.flags = this._io.readU4le();
      this.x = this._io.readF4le();
      this.y = this._io.readF4le();
      this.z = this._io.readF4le();
      this.radius = this._io.readF4le();
      if ((this.flags & 128) != 0) {
        this.regionCount = this._io.readU4le();
      }
      if ((this.flags & 128) != 0) {
        this.regions = new Array(this.regionCount);
        for (var i = 0; i < this.regionCount; i++) {
          this.regions[i] = this._io.readS4le();
        }
      }
    }
    Object.defineProperty(ObjectType28.prototype, 'name', {
      get: function() {
        if (this._m_name !== undefined)
          return this._m_name;
        if (this.nameReference != 0) {
          this._m_name = new StringHashReference(this._io, this, this._root, this.nameReference);
        }
        return this._m_name;
      }
    });
    Object.defineProperty(ObjectType28.prototype, 'static', {
      get: function() {
        if (this._m_static !== undefined)
          return this._m_static;
        this._m_static = (this.flags & 32) != 0;
        return this._m_static;
      }
    });
    Object.defineProperty(ObjectType28.prototype, 'staticInfluence', {
      get: function() {
        if (this._m_staticInfluence !== undefined)
          return this._m_staticInfluence;
        this._m_staticInfluence = (this.flags & 64) != 0;
        return this._m_staticInfluence;
      }
    });

    return ObjectType28;
  })();

  /**
   * SIMPLESPRITEDEF
   *   SIMPLESPRITETAG %s
   *   NUMFRAMES %d
   *   // repeated NUMFRAMES times
   *   FRAME "%s" "%s"
   *   CURRENTFRAME %d
   *   SLEEP %d
   *   SKIPFRAMES ON
   * ENDSIMPLESPRITEDEF
   */

  var ObjectType04 = SonyWld.ObjectType04 = (function() {
    function ObjectType04(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    ObjectType04.prototype._read = function() {
      this.nameReference = this._io.readS4le();
      this.flags = this._io.readS4le();
      this.frameCount = this._io.readU4le();
      if (this.animated == 1) {
        this.sleep = this._io.readU4le();
      }
      this.frameReferences = new Array(this.frameCount);
      for (var i = 0; i < this.frameCount; i++) {
        this.frameReferences[i] = this._io.readU4le();
      }
    }
    Object.defineProperty(ObjectType04.prototype, 'name', {
      get: function() {
        if (this._m_name !== undefined)
          return this._m_name;
        this._m_name = new StringHashReference(this._io, this, this._root, this.nameReference);
        return this._m_name;
      }
    });
    Object.defineProperty(ObjectType04.prototype, 'animated', {
      get: function() {
        if (this._m_animated !== undefined)
          return this._m_animated;
        this._m_animated = ((this.flags & 8) >>> 3);
        return this._m_animated;
      }
    });
    Object.defineProperty(ObjectType04.prototype, 'skipFrames', {
      get: function() {
        if (this._m_skipFrames !== undefined)
          return this._m_skipFrames;
        this._m_skipFrames = (this.flags & 40) != 0;
        return this._m_skipFrames;
      }
    });

    return ObjectType04;
  })();

  return SonyWld;
})();
return SonyWld;
}));
