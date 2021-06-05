<template>
  <div>

    <input type="file" @change="parseT3dFile($event.target.files[0])">

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

export default {
  props: {
    t3dType: {
      type: String,
      default: 'tanarus'
    }
  },
  data() {
    return {
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
    }
  },
  methods: {
    async parseT3dFile(file) {
      const arrayBuffer = await file.arrayBuffer();
      this.parseT3d(arrayBuffer);
    },
    parseT3d(buffer) {
      const stream = new KaitaiStream(buffer);
      this.t3d = new this.parser(stream);
      console.dir(this.t3d)
    },
  }
}
</script>

<style>

</style>
