(window.webpackJsonp=window.webpackJsonp||[]).push([[26,14],{275:function(t,e){},276:function(t,e){},285:function(t,e){},286:function(t,e){},289:function(t,e){},290:function(t,e){},299:function(t,e,r){"use strict";r.r(e);var n,o=r(3),f=(r(24),r(67),r(270)),h=r.n(f),l={props:{file:{type:Object,required:!0}},data:function(){return{fileType:null}},computed:{isImage:function(){return this.fileType&&this.fileType.mime.startsWith("image")},objectUrl:function(){return URL.createObjectURL(new Blob([this.file.body]))}},created:(n=Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.fromBuffer(this.file.body);case 2:this.fileType=t.sent;case 3:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},_=l,d=r(2),component=Object(d.a)(_,(function(){var t=this,e=t._self._c;return e("div",[e("strong",[t._v(t._s(t.file.filename))]),t._v(" "+t._s(t.file.filesize)+"B\n  "),t.isImage?e("img",{attrs:{src:t.objectUrl}}):t._e(),t._v(" "),e("a",{attrs:{href:t.objectUrl,download:t.file.filename}},[t._v("Download")])])}),[],!1,null,null,null);e.default=component.exports},333:function(t,e,r){var n,o,f;r(247);o=[r(248)],void 0===(f="function"==typeof(n=function(t){return function(){function e(t,e,r){this._io=t,this._parent=e,this._root=r||this,this._read()}e.prototype._read=function(){this.numOffsets=this._io.readU4le(),this.firstOffset=this._io.readU4le(),this.files=new Array(this.numOffsets-1);for(var i=0;i<this.numOffsets-1;i++)this.files[i]=new r(this._io,this,this._root,i)};var r=e.FileEntry=function(){function e(t,e,r,i){this._io=t,this._parent=e,this._root=r||this,this.i=i,this._read()}return e.prototype._read=function(){this.filename=t.bytesToStr(t.bytesTerminate(this._io.readBytes(13),0,!1),"ASCII"),this.ofsEnd=this._io.readU4le()},Object.defineProperty(e.prototype,"ofsStart",{get:function(){return void 0!==this._m_ofsStart||(this._m_ofsStart=this.i>0?this._parent.files[this.i-1].ofsEnd:this._parent.firstOffset),this._m_ofsStart}}),Object.defineProperty(e.prototype,"filesize",{get:function(){return void 0!==this._m_filesize||(this._m_filesize=this.ofsEnd-this.ofsStart),this._m_filesize}}),Object.defineProperty(e.prototype,"body",{get:function(){if(void 0!==this._m_body)return this._m_body;var t=this._io.pos;return this._io.seek(this.ofsStart),this._m_body=this._io.readBytes(this.filesize),this._io.seek(t),this._m_body}}),e}();return e}()})?n.apply(e,o):n)||(t.exports=f)},370:function(t,e,r){var n,o,f;r(247);o=[r(248)],void 0===(f="function"==typeof(n=function(t){return function(){function e(t,e,r){this._io=t,this._parent=e,this._root=r||this,this._read()}e.prototype._read=function(){this.header=new r(this._io,this,this._root),this.files=new Array(this.header.numOffsets-1);for(var i=0;i<this.header.numOffsets-1;i++)this.files[i]=new n(this._io,this,this._root,i);for(this.totalFilesize=this._io.readU8le(),this.filenames=new Array(this.header.numOffsets-1),i=0;i<this.header.numOffsets-1;i++)this.filenames[i]=t.bytesToStr(this._io.readBytesTerm(0,!1,!0,!0),"ASCII")};var r=e.Header=function(){function e(t,e,r){this._io=t,this._parent=e,this._root=r||this,this._read()}return e.prototype._read=function(){if(this.magic=this._io.readBytes(4),0!=t.byteArrayCompare(this.magic,[2,61,255,255]))throw new t.ValidationNotEqualError([2,61,255,255],this.magic,this._io,"/types/header/seq/0");if(this.version=this._io.readBytes(4),0!=t.byteArrayCompare(this.version,[0,87,1,0]))throw new t.ValidationNotEqualError([0,87,1,0],this.version,this._io,"/types/header/seq/1");this.numOffsets=this._io.readU4le(),this.filenamesLength=this._io.readU4le()},e}(),n=e.File=function(){function e(t,e,r,i){this._io=t,this._parent=e,this._root=r||this,this.i=i,this._read()}return e.prototype._read=function(){this.fileOffset=this._io.readU4le(),this.filenameOffset=this._io.readU4le()},Object.defineProperty(e.prototype,"nextFileOffset",{get:function(){return void 0!==this._m_nextFileOffset||(this._m_nextFileOffset=this.i==this._root.header.numOffsets-2?this._root.totalFilesize:this._parent.files[this.i+1].fileOffset),this._m_nextFileOffset}}),Object.defineProperty(e.prototype,"filename",{get:function(){if(void 0!==this._m_filename)return this._m_filename;var e=this._root._io,r=e.pos;return e.seek(16+8*this.i+this.filenameOffset),this._m_filename=t.bytesToStr(e.readBytesTerm(0,!1,!0,!0),"ASCII"),e.seek(r),this._m_filename}}),Object.defineProperty(e.prototype,"filesize",{get:function(){return void 0!==this._m_filesize||(this._m_filesize=this.nextFileOffset-this.fileOffset),this._m_filesize}}),Object.defineProperty(e.prototype,"body",{get:function(){if(void 0!==this._m_body)return this._m_body;var t=this._root._io,e=t.pos;return t.seek(this.fileOffset),this._m_body=t.readBytes(this.filesize),t.seek(e),this._m_body}}),e}();return e}()})?n.apply(e,o):n)||(t.exports=f)},395:function(t,e,r){"use strict";r.r(e);var n=r(3),o=(r(24),r(11),r(333)),f=r.n(o),h=r(370),l=r.n(h),_=r(248),d=r.n(_),c=r(371),m=r.n(c),y=r(372),v={props:{t3dType:{type:String,default:"tanarus"}},data:function(){return{t3dFilename:null,t3d:null}},computed:{parser:function(){var t;switch(this.t3dType){case"t3dfastfile":default:t=l.a;break;case"fastfile":t=f.a}return t},t3dZipFilename:function(){return"".concat(this.t3dFilename,".zip")}},methods:{fileChange:function(t){var e=t.target.files[0];this.t3dFilename=e.name,this.parseT3dFile(e)},parseT3dFile:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.arrayBuffer();case 2:n=r.sent,e.parseT3d(n);case 4:case"end":return r.stop()}}),r)})))()},parseT3d:function(t){var e=new d.a(t);this.t3d=new this.parser(e),console.dir(this.t3d)},downloadZip:function(){var t=this,e=new m.a;this.t3d.files.forEach((function(t){return e.file(t.filename,t.body)})),e.generateAsync({type:"blob"}).then((function(e){Object(y.saveAs)(e,t.t3dZipFilename)}))}}},O=r(2),component=Object(O.a)(v,(function(){var t=this,e=t._self._c;return e("div",[e("input",{attrs:{type:"file"},on:{change:t.fileChange}}),t._v(" "),t.t3d&&t.t3dFilename?e("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.downloadZip.apply(null,arguments)}}},[t._v("Download all")]):t._e(),t._v(" "),t.t3d?e("div",[e("div",{staticClass:"grid grid-cols-3 gap-4"},t._l(t.t3d.files,(function(t){return e("fast-file-record",{key:t.i,attrs:{file:t}})})),1)]):t._e()])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{FastFileRecord:r(299).default})}}]);