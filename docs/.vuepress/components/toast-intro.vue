<template>
  <div>
    <h4>Toast组件</h4>
    <p>
      <z-button @click="toastTop">触发 top toast</z-button>
      <z-button @click="toastBottom">触发 bottom toast</z-button>
      <z-button @click="toastLayoutColumn">触发上下布局toast</z-button>
    </p>
  </div>
</template>
<script>
import { toast } from "../../../src/plugins/toast.js";
import Button from "../../../src/components/button/button.vue";
import Vue from "vue";

Vue.use(toast);

export default {
  components: {
    "z-button": Button
  },
  methods: {
    toastTop() {
      this.$ztoast(
        "hi, zhaUI! 我在上面展示 我在上面展示 我在上面展示 我在上面展示 我在上面展示 我在上面展示 我在上面展示 我在上面展示",
        {
          closeButtonText: "知道了",
          position: "top"
        }
      );
    },
    toastBottom() {
      this.$ztoast("hi, zhaUI! 我在下面展示", {
        closeButtonText: "知道了",
        position: "bottom"
      });
    },
    toastLayoutColumn() {
      this.$ztoast("hi, zhaUI! 我是上下布局", {
        closeButtonText: "知道了",
        layout: "column"
      });
    }
  }
};
</script>

