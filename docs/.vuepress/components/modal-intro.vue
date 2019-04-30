<template>
  <div>
    <p>
      <z-button @click="alert">触发 modal</z-button>
    </p>
  </div>
</template>
<script>
import modal from "../../../src/plugins/modal.js";
import Button from "../../../src/components/button/button.vue";
import Vue from "vue";

Vue.use(modal);

export default {
  components: {
    "z-button": Button
  },
  methods: {
    alert() {
      this.$zmodal({
        value: "hi",
        type: "prompt",
        onOk: val =>{
          return new Promise((resolve)=>{
              setTimeout(()=>{
                  resolve();
              },5000)
          })
        }
      });
    }
  }
};
</script>

