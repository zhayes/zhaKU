<template>
  <div class="z-modal" ref="zmodal" v-if="!destroyed">
    <div class="z-modal-header">{{title}}</div>
    <div class="z-modal-body" v-if="type!='prompt'">{{content}}</div>
    <div class="z-modal-body" v-else>
      <z-input class="z-modal-prompt-input" v-model="inputValue"/>
    </div>
    <div class="z-modal-footer">
      <div v-if="type!='alert'" class="z-modal-btn z-modal-btn-cancel" @click="cancel">取消</div>
      <div
        class="z-modal-btn z-modal-btn-confirm"
        @click="confirm"
        :style="(confirmLoading ? 'color:#aaa; fill: #aaa; cursor: not-allowed' : '')"
      >
        <z-icon v-if="confirmLoading" spinning name="loading_mum" class="z-confirm-loading"/>确定
      </div>
    </div>
  </div>
</template>
<script>
import Input from "../input/input.vue";
import Icon from "../icon/icon.vue";

export default {
  data() {
    return {
      inputValue: this.value,
      destroyed: !this.visible,
      confirmLoading: false
    };
  },
  components: {
    "z-input": Input,
    "z-icon": Icon
  },
  props: {
    title: {
      type: String,
      default: "标题"
    },
    type: {
      type: String,
      default: "prompt",
      validator(val) {
        const types = ["alert", "confirm", "prompt"];

        if (!types.includes(val)) {
          console.error(
            `Modal 的type参数应该是${types}其中之一，而你的传值是${val}`
          );
        }
      }
    },
    content: {
      type: String,
      default: "Hello, World!"
    },
    value: {
      type: String,
      default: ""
    },
    visible: {
      type: Boolean,
      default: true
    },
    onOk: {
        type: Function
    },
    onCancel: {
        type: Function
    }
  },
  watch: {
    visible(val) {
      this.destroyed = !val;
    }
  },
  methods: {
    destroy() {
      this.visible = false;
    },
    async confirm() {
      if (this.confirmLoading || !this.onOk) return;
      
      this.type==="prompt" && this.onOk(this.inputValue);
      this.type!="alert" && this.onOk();

      let result = undefined;

      if(this.type==="prompt"){
          result = this.onOk(this.inputValue);
      }
      if(this.type!="alert"){
          result = this.onOk();
      }

      if(result && result.constructor.name === "Promise"){
          this.confirmLoading = true;
          await result;
          this.confirmLoading = false;
      }

      this.destroy();
    },
    cancel() {
      this.type==="prompt" && this.destroy();
      this.onCancel && this.onCancel();

      this.destroy();
    }
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.z-modal {
  position: fixed;
  z-index: 100;
  width: 90%;
  border-radius: 4px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 0 20px 0 #9e9e9e;

  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  text-align: center;

  .z-modal-header {
    font-size: 18px;
    font-weight: 500;
    padding: 0.8em;
  }

  .z-modal-body {
    font-size: 18px;
    padding: 0 0.8em 0.8em;
    color: #999;

    .z-modal-prompt-input {
      width: 100%;
    }
  }

  .z-modal-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    align-content: center;
    border-top: 1px solid #eaeaea;

    .z-modal-btn-cancel {
      border-right: 1px solid #eaeaea;
    }

    .z-modal-btn-confirm {
      color: #1a73e8;
    }

    .z-modal-btn {
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      font-weight: 500;
      padding: 0.8em;
      cursor: pointer;
      user-select: none;

      .z-confirm-loading {
        font-size: inherit;
        margin-right: 0.2em;
      }
    }
  }
}
</style>

