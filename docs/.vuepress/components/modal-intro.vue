<template>
  <div>
    <p>
      <z-btn-goup>
        <z-button @click="confirm">调用Modal.confirm</z-button>
        <z-button @click="visible=true">控制组件内容显示</z-button>
      </z-btn-goup>

      <z-modal :visible="visible" :onOk="alert" :onCancel="()=>visible=false">
          Hello, World!
      </z-modal>
    </p>
  </div>
</template>
<script>
import Button from "../../../src/components/button/button.vue";
import ButtonGroup from "../../../src/components/button/group.vue";
import Modal from '../../../src/components/modal/index.js';
import Vue from "vue";

export default {
  data:()=>{
    return {
      visible: false
    }
  },
  components: {
    "z-button": Button,
    "z-modal": Modal,
    "z-btn-goup": ButtonGroup
  },
  methods: {
    alert(){
      this.visible = false;
    },
    confirm() {
      Modal.confirm({
        content: "您喜欢zhaKU库吗？",
        okText:'喜欢',
        cancelText:'还没感觉'
      });
    }
  }
};
</script>

