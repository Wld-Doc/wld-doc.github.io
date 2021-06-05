// This is a generated file! Please edit source .ksy file and use kaitai-struct-compiler to rebuild

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['kaitai-struct/KaitaiStream'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('kaitai-struct/KaitaiStream'));
  } else {
    root.T3dFastFile = factory(root.KaitaiStream);
  }
}(this, function (KaitaiStream) {
var T3dFastFile = (function() {
  function T3dFastFile(_io, _parent, _root) {
    this._io = _io;
    this._parent = _parent;
    this._root = _root || this;

    this._read();
  }
  T3dFastFile.prototype._read = function() {
    this.header = new Header(this._io, this, this._root);
    this.files = new Array((this.header.numOffsets - 1));
    for (var i = 0; i < (this.header.numOffsets - 1); i++) {
      this.files[i] = new File(this._io, this, this._root, i);
    }
    this.totalFilesize = this._io.readU8le();
    this.filenames = new Array((this.header.numOffsets - 1));
    for (var i = 0; i < (this.header.numOffsets - 1); i++) {
      this.filenames[i] = KaitaiStream.bytesToStr(this._io.readBytesTerm(0, false, true, true), "ASCII");
    }
  }

  var Header = T3dFastFile.Header = (function() {
    function Header(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;

      this._read();
    }
    Header.prototype._read = function() {
      this.magic = this._io.readBytes(4);
      if (!((KaitaiStream.byteArrayCompare(this.magic, [2, 61, 255, 255]) == 0))) {
        throw new KaitaiStream.ValidationNotEqualError([2, 61, 255, 255], this.magic, this._io, "/types/header/seq/0");
      }
      this.version = this._io.readBytes(4);
      if (!((KaitaiStream.byteArrayCompare(this.version, [0, 87, 1, 0]) == 0))) {
        throw new KaitaiStream.ValidationNotEqualError([0, 87, 1, 0], this.version, this._io, "/types/header/seq/1");
      }
      this.numOffsets = this._io.readU4le();
      this.filenamesLength = this._io.readU4le();
    }

    return Header;
  })();

  var File = T3dFastFile.File = (function() {
    function File(_io, _parent, _root, i) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this.i = i;

      this._read();
    }
    File.prototype._read = function() {
      this.fileOffset = this._io.readU4le();
      this.filenameOffset = this._io.readU4le();
    }
    Object.defineProperty(File.prototype, 'nextFileOffset', {
      get: function() {
        if (this._m_nextFileOffset !== undefined)
          return this._m_nextFileOffset;
        this._m_nextFileOffset = (this.i == (this._root.header.numOffsets - 2) ? this._root.totalFilesize : this._parent.files[(this.i + 1)].fileOffset);
        return this._m_nextFileOffset;
      }
    });
    Object.defineProperty(File.prototype, 'filename', {
      get: function() {
        if (this._m_filename !== undefined)
          return this._m_filename;
        var io = this._root._io;
        var _pos = io.pos;
        io.seek(((16 + (8 * this.i)) + this.filenameOffset));
        this._m_filename = KaitaiStream.bytesToStr(io.readBytesTerm(0, false, true, true), "ASCII");
        io.seek(_pos);
        return this._m_filename;
      }
    });
    Object.defineProperty(File.prototype, 'filesize', {
      get: function() {
        if (this._m_filesize !== undefined)
          return this._m_filesize;
        this._m_filesize = (this.nextFileOffset - this.fileOffset);
        return this._m_filesize;
      }
    });
    Object.defineProperty(File.prototype, 'body', {
      get: function() {
        if (this._m_body !== undefined)
          return this._m_body;
        var io = this._root._io;
        var _pos = io.pos;
        io.seek(this.fileOffset);
        this._m_body = io.readBytes(this.filesize);
        io.seek(_pos);
        return this._m_body;
      }
    });

    return File;
  })();

  return T3dFastFile;
})();
return T3dFastFile;
}));
