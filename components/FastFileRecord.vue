<template>
  <div>
    <strong>{{ file.filename }}</strong> {{ file.filesize }}B
    <img v-if="isImage" :src="objectUrl">
    <a :href="objectUrl" :download="file.filename">Download</a>
  </div>
</template>
<script>
import FileType from 'file-type/browser'

export default {
  props: {
    file: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      fileType: null
    }
  },
  computed: {
    isImage() {
      return this.fileType && this.fileType.mime.startsWith('image')
    },
    objectUrl() {
      return URL.createObjectURL(new Blob([this.file.body]));
    }
  },
  created: async function(){
    this.fileType = await FileType.fromBuffer(this.file.body)
  }
}
</script>
