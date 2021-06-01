(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{261:function(t,e){},262:function(t,e){},265:function(t,e){},266:function(t,e){},290:function(t,e,r){var o,n,f;r(238);n=[r(239)],void 0===(f="function"==typeof(o=function(t){return function(){function e(t,e,r){this._io=t,this._parent=e,this._root=r||this,this._read()}e.prototype._read=function(){this.numOffsets=this._io.readU4le(),this.firstOffset=this._io.readU4le(),this.files=new Array(this.numOffsets-1);for(var i=0;i<this.numOffsets-1;i++)this.files[i]=new r(this._io,this,this._root,i)};var r=e.FileEntry=function(){function e(t,e,r,i){this._io=t,this._parent=e,this._root=r||this,this.i=i,this._read()}return e.prototype._read=function(){this.filename=t.bytesToStr(t.bytesTerminate(this._io.readBytes(13),0,!1),"ASCII"),this.ofsEnd=this._io.readU4le()},Object.defineProperty(e.prototype,"ofsStart",{get:function(){return void 0!==this._m_ofsStart||(this._m_ofsStart=this.i>0?this._parent.files[this.i-1].ofsEnd:this._parent.firstOffset),this._m_ofsStart}}),Object.defineProperty(e.prototype,"filesize",{get:function(){return void 0!==this._m_filesize||(this._m_filesize=this.ofsEnd-this.ofsStart),this._m_filesize}}),Object.defineProperty(e.prototype,"body",{get:function(){if(void 0!==this._m_body)return this._m_body;var t=this._io.pos;return this._io.seek(this.ofsStart),this._m_body=this._io.readBytes(this.filesize),this._io.seek(t),this._m_body}}),e}();return e}()})?o.apply(e,n):o)||(t.exports=f)},331:function(t,e,r){var o,n,f;r(238);n=[r(239)],void 0===(f="function"==typeof(o=function(t){return function(){function e(t,e,r){this._io=t,this._parent=e,this._root=r||this,this._read()}e.prototype._read=function(){this.header=new r(this._io,this,this._root),this.files=new Array(this.header.numOffsets-1);for(var i=0;i<this.header.numOffsets-1;i++)this.files[i]=new o(this._io,this,this._root,i);for(this.totalFilesize=this._io.readU8le(),this.filenames=new Array(this.header.numOffsets-1),i=0;i<this.header.numOffsets-1;i++)this.filenames[i]=t.bytesToStr(this._io.readBytesTerm(0,!1,!0,!0),"ASCII")};var r=e.Header=function(){function e(t,e,r){this._io=t,this._parent=e,this._root=r||this,this._read()}return e.prototype._read=function(){if(this.magic=this._io.readBytes(4),0!=t.byteArrayCompare(this.magic,[2,61,255,255]))throw new t.ValidationNotEqualError([2,61,255,255],this.magic,this._io,"/types/header/seq/0");if(this.version=this._io.readBytes(4),0!=t.byteArrayCompare(this.version,[0,87,1,0]))throw new t.ValidationNotEqualError([0,87,1,0],this.version,this._io,"/types/header/seq/1");this.numOffsets=this._io.readU4le(),this.filenamesLength=this._io.readU4le()},e}(),o=e.File=function(){function e(t,e,r,i){this._io=t,this._parent=e,this._root=r||this,this.i=i,this._read()}return e.prototype._read=function(){this.fileOffset=this._io.readU4le(),this.filenameOffset=this._io.readU4le()},Object.defineProperty(e.prototype,"nextFileOffset",{get:function(){return void 0!==this._m_nextFileOffset||(this._m_nextFileOffset=this.i==this._root.header.numOffsets-2?this._root.totalFilesize:this._parent.files[this.i+1].fileOffset),this._m_nextFileOffset}}),Object.defineProperty(e.prototype,"filename",{get:function(){if(void 0!==this._m_filename)return this._m_filename;var e=this._root._io,r=e.pos;return e.seek(16+8*this.i+this.filenameOffset),this._m_filename=t.bytesToStr(e.readBytesTerm(0,!1,!0,!0),"ASCII"),e.seek(r),this._m_filename}}),Object.defineProperty(e.prototype,"filesize",{get:function(){return void 0!==this._m_filesize||(this._m_filesize=this.nextFileOffset-this.fileOffset),this._m_filesize}}),Object.defineProperty(e.prototype,"body",{get:function(){if(void 0!==this._m_body)return this._m_body;var t=this._root._io,e=t.pos;return t.seek(this.fileOffset),this._m_body=t.readBytes(this.filesize),t.seek(e),this._m_body}}),e}();return e}()})?o.apply(e,n):o)||(t.exports=f)},354:function(t,e,r){"use strict";r.r(e);var o=r(3),n=(r(21),r(290)),f=r.n(n),h=r(331),_=r.n(h),d=r(239),l=r.n(d),c={props:{t3dType:{type:String,default:"tanarus"}},data:function(){return{t3d:null,objectUrls:{}}},computed:{parser:function(){var t;switch(this.t3dType){case"tanarus":t=_.a;break;case"fastfile":t=f.a;break;default:t=f.a}return t}},methods:{parseT3dFile:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.arrayBuffer();case 2:o=r.sent,e.parseT3d(o);case 4:case"end":return r.stop()}}),r)})))()},parseT3d:function(t){var e=new l.a(t);this.t3d=new this.parser(e),console.dir(this.t3d)},objectUrl:function(t){return this.objectUrls[t.filename]=this.objectUrls[t.filename]||URL.createObjectURL(new Blob([t.body])),this.objectUrls[t.filename]}}},m=r(2),component=Object(m.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("input",{attrs:{type:"file"},on:{change:function(e){return t.parseT3dFile(e.target.files[0])}}}),t._v(" "),t.t3d?r("div",[r("div",{staticClass:"grid grid-cols-3 gap-4"},t._l(t.t3d.files,(function(e){return r("div",{key:e.i},[r("strong",[t._v(t._s(e.filename))]),t._v(" "+t._s(e.filesize)+"B\n        "),e.filename.toLowerCase().endsWith(".bmp")?r("img",{attrs:{src:t.objectUrl(e)}}):t._e(),t._v(" "),r("a",{attrs:{href:t.objectUrl(e),download:e.filename}},[t._v("Download")])])})),0)]):t._e()])}),[],!1,null,null,null);e.default=component.exports}}]);