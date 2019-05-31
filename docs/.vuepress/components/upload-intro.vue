<template>
  <div>
    <p>
      <z-upload 
        :filesList="filesList"
        @loadEnd="loadEnd" 
        @loadStart="loadStart" 
        @success="success" 
        @delete="deleteHandle"
      />
    </p>
  </div>
</template>
<script>
import Upload from "../../../src/components/upload/upload.vue";
import Button from '../../../src/components/button/button.vue'

export default {
  data(){
    return {
      filesList: []
    }
  },
  components: {
    "z-upload": Upload,
    "z-button": Button
  },
  methods: {
    loadEnd(data){
      console.log('结束',data)
    },
    loadStart(data, xhr){
      console.log('开始',data, xhr)
    },
    success(data, files, xhr){
      console.log(data, files, xhr)
    },
    deleteHandle(item, index, files){
      files.splice(index, 1);
      this.filesList = files
    }
  }
};
</script>
<style lang="scss" scoped>

</style>

