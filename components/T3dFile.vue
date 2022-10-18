<template>
  <div>

    <input type="file" @change="fileChange">
    <a v-if="t3d && t3dFilename" href="#" @click.prevent="downloadZip">Download all</a>
    <div v-if="t3d">
      <div class="grid grid-cols-3 gap-4">
        <fast-file-record v-for="file in t3d.files" :key="file.i" :file="file"></fast-file-record>
      </div>
    </div>
  </div>
</template>

<script>
import Fastfile from '../static/files/lib/Fastfile'
import T3dFastFile from '../static/files/lib/T3dFastFile'
import KaitaiStream from 'kaitai-struct/KaitaiStream'
import JSZip from 'jszip'
import { saveAs } from 'file-saver'

export default {
  props: {
    t3dType: {
      type: String,
      default: 'tanarus'
    }
  },
  data() {
    return {
      t3dFilename: null,
      t3d: null,
    }
  },
  computed: {
    parser() {
      let parser;

      switch (this.t3dType) {
      case 't3dfastfile':
        parser = T3dFastFile;
        break;
      case 'fastfile':
        parser = Fastfile;
        break;
      default:
        parser = T3dFastFile;
      }

      return parser;
    },
    t3dZipFilename() {
      return `${this.t3dFilename}.zip`
    }
  },
  methods: {
    fileChange(event) {
      const file = event.target.files[0];
      this.t3dFilename = file.name;
      this.parseT3dFile(file);
    },
    async parseT3dFile(file) {
      const arrayBuffer = await file.arrayBuffer();
      this.parseT3d(arrayBuffer);
    },
    parseT3d(buffer) {
      const stream = new KaitaiStream(buffer);
      this.t3d = new this.parser(stream);
      console.dir(this.t3d)
    },
    downloadZip() {
      const zip = new JSZip();
      this.t3d.files.forEach(file => zip.file(file.filename, file.body));
      zip.generateAsync({type:"blob"}).then((blob) => {
        saveAs(blob, this.t3dZipFilename);
      });
    },
  }
}
</script>

<style>

</style>
