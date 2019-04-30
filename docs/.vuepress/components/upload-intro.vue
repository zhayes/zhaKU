<template>
  <div>
    <p>
      <z-upload />
    </p>
  </div>
</template>
<script>
import Upload from "../../../src/components/upload/upload.vue";
import Button from '../../../src/components/button/button.vue'

export default {
  components: {
    "z-upload": Upload,
    "z-button": Button
  },
  methods: {
   
  }
};
</script>
<style lang="scss" scoped>

</style>

