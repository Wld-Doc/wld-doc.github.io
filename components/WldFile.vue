<template>
  <div>

    <input type="file" @change="parseWldFile($event.target.files[0])">

    <div v-if="wld">
      <p>
        JSON below excludes lazy evaluated properties.
        Use browser console or the <a href="https://ide.kaitai.io">Kaitai WebIDE</a> to further explore.
      </p>

      <!-- ugh this doesnt parse the object correctly -->
      <!-- <tree-view :data="wldDump" :options="{maxDepth: 32}"></tree-view> -->
      <pre>{{ JSON.stringify(wldDump, undefined, 2) }}</pre>
    </div>
  </div>
</template>

<script>
import SonyWld from '../static/files/lib/SonyWld'
import KaitaiStream from 'kaitai-struct/KaitaiStream'
export default {
  data() {
    return {
      wld: null,
    }
  },
  computed: {
    wldDump() {
      return JSON.parse(JSON.stringify(this.wld, function replacer(key, value) {
        if (key.startsWith('_io') || key.startsWith('_parent') || key.startsWith('_root'))
          return undefined;
        return value;
      }));
    }
  },
  methods: {
    async parseWldFile(file) {
      const arrayBuffer = await file.arrayBuffer();
      this.parseWld(arrayBuffer)
    },
    parseWld(buffer) {
      this.wld = new SonyWld(new KaitaiStream(buffer))
      console.dir(this.wld)
    }
  }
}
</script>

<style>

</style>
