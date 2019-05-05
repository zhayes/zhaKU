<template>
  <div>
    <div class="z-modal-mask" v-if="showModalHandle" @click="clickModal"></div>
    <div class="z-modal" ref="zmodal" v-if="!destroyed">
      <div class="z-modal-header" v-if="title">{{title}}</div>
      <div
        class="z-modal-body"
        v-if="type!='prompt'"
        :style="!title ? 'padding-top: 1.4em; padding-bottom: 1.4em;' : ''"
      >
        <slot>{{content}}</slot>
      </div>
      <div class="z-modal-body" v-else>
        <z-input class="z-modal-prompt-input" v-model="inputValue"/>
      </div>
      <div class="z-modal-footer" v-if="showFooter">
        <div
          v-if="type!='alert'"
          class="z-modal-btn z-modal-btn-cancel"
          @click="cancel"
        >{{cancelText}}</div>
        <div
          class="z-modal-btn z-modal-btn-confirm"
          @click="confirm"
          :style="(confirmLoading ? 'color:#aaa; fill: #aaa; cursor: not-allowed' : '')"
        >
          <z-icon v-if="confirmLoading" spinning name="loading_mum" class="z-confirm-loading"/>
          {{okText}}
        </div>
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
      destroyed: !this.visible
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
      default: "alert",
      validator(val) {
        const types = ["alert", "confirm", "prompt"];

        if (!types.includes(val)) {
          console.error(
            `Modal 的type参数应该是${types}其中之一，而你的传值是${val}`
          );
        }

        return types.includes(val);
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
      default: false
    },
    onOk: {
      type: Function
    },
    onCancel: {
      type: Function
    },
    confirmLoading: {
      type: Boolean,
      default: false
    },
    showFooter: {
      type: Boolean,
      default: true
    },
    isStatic: {
      type: Boolean,
      default: false
    },
    okText: {
      type: String,
      default: "确定"
    },
    cancelText: {
      type: String,
      default: "取消"
    },
     showModel: {
      type: Boolean,
      default: true
    },
    maskClosable: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    visible(val) {
      this.destroyed = !val;
    },
    value(val) {
      this.inputValue = val;
    }
  },
  computed:{
    showModalHandle(){
      if(!this.destroyed){
        if(this.showModel){
          return true
        }
      }

      return false;
    }
  },
  methods: {
    destroy() {
      this.destroyed = true;
    },
    clickModal(){
      this.maskClosable && this.cancel()
    },
    async confirm() {
      if(this.isStatic && !this.onOk){
        return this.destroy();
      }
      if (this.confirmLoading || !this.onOk) return;

      let result = undefined;

      if (this.type === "prompt") {
        result = this.onOk(this.inputValue);
      }
      if (this.type != "alert") {
        result = this.onOk();
      }

      //点击确定后如果promise对象，则自动显示loading图标，resolve()后解除
      if (result && result.constructor.name === "Promise") {
        this.confirmLoading = true;
        await result;
        this.confirmLoading = false;
      }

      if (this.type === "alert" || this.isStatic) {
        this.onOk();
        this.destroy();
      }
    },
    cancel() {
      this.onCancel && this.onCancel();

      (this.type === "prompt" || this.type === "alert" || this.isStatic) &&
        this.destroy();
    }
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.z-modal-mask{
  position: fixed;
  top:0;
  bottom:0;
  left:0;
  right:0;
  background-color: rgba(0,0,0,.6);
  z-index: 99;
}

.z-modal {
  position: fixed;
  z-index: 100;
  width: 90%;
  border-radius: 4px;
  overflow: hidden;
  background-color: #fff;

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

