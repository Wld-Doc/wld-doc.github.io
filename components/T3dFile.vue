<template>
  <div>

    <input type="file" @change="parseT3dFile($event.target.files[0])">

    <div v-if="t3d">
      <div class="grid grid-cols-3 gap-4">
        <div v-for="file in t3d.files" :key="file.i">
          <strong>{{ file.filename }}</strong> {{ file.filesize }}B
          <img v-if="file.filename.toLowerCase().endsWith('.bmp')" :src="objectUrl(file)">
          <a :href="objectUrl(file)" :download="file.filename">Download</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Fastfile from '../static/files/lib/Fastfile'
import TanarusT3d from '../static/files//lib/TanarusT3d'
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
      objectUrls: {}
    }
  },
  computed: {
    parser() {
      let parser;

      switch (this.t3dType) {
      case 'tanarus':
        parser = TanarusT3d;
        break;
      case 'fastfile':
        parser = Fastfile;
        break;
      default:
        parser = Fastfile;
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
    objectUrl(file) {
      // return URL.createObjectURL(new Blob([file.body]));
      this.objectUrls[file.filename] = this.objectUrls[file.filename] || URL.createObjectURL(new Blob([file.body]));

      return this.objectUrls[file.filename];
    }
  }
}
</script>

<style>

</style>
