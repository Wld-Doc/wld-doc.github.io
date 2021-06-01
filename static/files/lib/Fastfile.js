// This is a generated file! Please edit source .ksy file and use kaitai-struct-compiler to rebuild

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['kaitai-struct/KaitaiStream'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('kaitai-struct/KaitaiStream'));
  } else {
    root.Fastfile = factory(root.KaitaiStream);
  }
}(this, function (KaitaiStream) {
var Fastfile = (function() {
  function Fastfile(_io, _parent, _root) {
    this._io = _io;
    this._parent = _parent;
    this._root = _root || this;

    this._read();
  }
  Fastfile.prototype._read = function() {
    this.numOffsets = this._io.readU4le();
    this.firstOffset = this._io.readU4le();
    this.files = new Array((this.numOffsets - 1));
    for (var i = 0; i < (this.numOffsets - 1); i++) {
      this.files[i] = new FileEntry(this._io, this, this._root, i);
    }
  }

  var FileEntry = Fastfile.FileEntry = (function() {
    function FileEntry(_io, _parent, _root, i) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this.i = i;

      this._read();
    }
    FileEntry.prototype._read = function() {
      this.filename = KaitaiStream.bytesToStr(KaitaiStream.bytesTerminate(this._io.readBytes(13), 0, false), "ASCII");
      this.ofsEnd = this._io.readU4le();
    }
    Object.defineProperty(FileEntry.prototype, 'ofsStart', {
      get: function() {
        if (this._m_ofsStart !== undefined)
          return this._m_ofsStart;
        this._m_ofsStart = (this.i > 0 ? this._parent.files[(this.i - 1)].ofsEnd : this._parent.firstOffset);
        return this._m_ofsStart;
      }
    });
    Object.defineProperty(FileEntry.prototype, 'filesize', {
      get: function() {
        if (this._m_filesize !== undefined)
          return this._m_filesize;
        this._m_filesize = (this.ofsEnd - this.ofsStart);
        return this._m_filesize;
      }
    });
    Object.defineProperty(FileEntry.prototype, 'body', {
      get: function() {
        if (this._m_body !== undefined)
          return this._m_body;
        var _pos = this._io.pos;
        this._io.seek(this.ofsStart);
        this._m_body = this._io.readBytes(this.filesize);
        this._io.seek(_pos);
        return this._m_body;
      }
    });

    return FileEntry;
  })();

  return Fastfile;
})();
return Fastfile;
}));
