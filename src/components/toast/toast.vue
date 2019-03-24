<template>
  <div
    :class="{'z-toast':true ,'z-toast-flex-column': (layout=='column')}"
    :style="`${ position=='top' ?`top:${top}px` : ''}; ${position=='bottom' ? `bottom:${bottom}px` : ''}; opacity:${opacity};${style}`"
  >
    <div class="z-toast-message" :style="(layout=='row')? 'border-right-width: 1px' : 'border-bottom-width: 1px'">{{message}}</div>
    <div v-if="showCloseButton" class="z-toast-closeBtn" @click="close">{{closeButtonText}}</div>
  </div>
</template>
<script>
export default {
  data() {
    const top = this.position == "top" ? -100 : "";
    const bottom = this.position == "bottom" ? -100 : "";
    return {
      style: "",
      top,
      bottom,
      opacity: 0
    };
  },
  props: {
    message: {
      type: String
    },
    showCloseButton: {
      type: Boolean,
      default: true
    },
    closeButtonText: {
      type: String,
      default: "关闭"
    },
    autoClose: {
      type: Boolean,
      default: true
    },
    duration: {
      type: [String, Number],
      default: 2000
    },
    position: {
      type: String,
      default: "top",
      validator(value) {
        const positions = ["top", "bottom"];
        const result = positions.includes(value);
        if (!result) {
          console.error(
            `toast组件position属性的值只能选择[${positions}]${
              positions.length
            }种类型，而你给的值是${value}`
          );
        }
        return result;
      }
    },
    layout: {
      type: String,
      default: "row",
      validator(value) {
        const layouts = ["row", "column"];
        const result = layouts.includes(value);
        if (!result) {
          console.error(
            `toast组件position属性的值只能选择[${layouts}]${
              layouts.length
            }种类型，而你给的值是${value}`
          );
        }
        return result;
      }
    }
  },
  methods: {
    close() {
      const position = this.position;
      this.opacity = 0;
      if (position == "top") {
        this.top = -100;
        this.bottom = "";
      }
      if (position == "bottom") {
        this.bottom = -100;
        this.top = "";
      }
      setTimeout(() => {
        this.$el.remove();
        this.$destroy();
      }, 1000);
    }
  },
  mounted() {
    setTimeout(() => {
      const position = this.position;

      this.opacity = 1;
      if (position == "top") {
        this.top = 0;
        this.bottom = "";
      }
      if (position == "bottom") {
        this.bottom = 0;
        this.top = "";
      }

      if (this.autoClose) {
        setTimeout(this.close, this.duration);
      }
    }, 10);
  }
};
</script>
<style lang="scss" scoped>
.z-toast {
  transition: all 0.4s;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 100;
  left: 0;
  right: 0;
  margin: auto;
  background-color: #000;
  color: #fff;
  font-size: 14px;
  flex-direction: row;
  box-shadow: 0 1px 10px 4px darken(#fff, 50%);

  .z-toast-message {
    flex: 3;
    padding: 8px 16px;
    height: 100%;
    justify-content: space-between;
    word-break: break-all;
    border: 0px solid darken($color: #fff, $amount: 50%);
    width: 100%;
  }
  .z-toast-closeBtn {
    flex: 1;
    cursor: pointer;
    padding: 8px 16px;
    height: 100%;
    color: #1890ff;
    text-align: center;
    width: 100%;
  }
}

.z-toast-flex-column {
  flex-direction: column;
  flex: 1
}
</style>
