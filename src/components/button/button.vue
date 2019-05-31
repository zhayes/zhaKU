<template>
  <button
    :class="{'z-btn': true, [`z-btn-${type}`]: true, [`z-btn-${size}`]: true, 'z-btn-ghost': ghost, [`z-btn-ghost-${type}`]: ghost, [`z-btn-disabled`]: disabled, [`z-btn-${type}-loading`]: loading}"
    :disabled="disabled||loading"
    @click="click"
  >
    <z-icon v-if="loading" spinning name="loading_mum" class="z-btn-loading"/>
    <slot></slot>
  </button>
</template>
<script>
import Icon from "../icon/icon.vue";
export default {
  name: "z-button",
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "default",
      validator(value) {
        const types = ["default", "primary", "danger"];
        const result = types.includes(value);
        if (!result) {
          console.error(`按钮类型只能选择[${types}]${types.length}种类型`);
        }
        return result;
      }
    },
    size: {
      type: String,
      default: "middle",
      validator(value) {
        const sizes = ["small", "middle", "large"];
        const result = sizes.includes(value);
        if (!result) {
          console.error(`按钮类型只能选择[${sizes}]${sizes.length}种类型`);
        }
        return result;
      }
    },
    ghost: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  components: {
    "z-icon": Icon
  },
  methods: {
    click() {
      this.$emit("click");
    }
  }
};
</script>
<style lang="scss" scoped>
@import "src/style/var.scss";

.z-btn {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  background-color: $btn-bg-default-color;
  border: $btn-border-size;
  border-style: $btn-border-style;
  border-radius: $btn-border-radius;
  outline: none;
  cursor: pointer;
  padding: 0 1em;
  height: $btn-height-small;
  font-size: $btn-font-size-middle;
  user-select: none;

  @extend .z-btn-default;

   i.z-icon {
    color: #fff;
  }
}

.z-btn-default {
  background-color: $btn-bg-default-color;
  border-color: darken($btn-bg-default-color, 15%);
  &:hover {
    background-color: darken($btn-bg-default-color, 10%);
  }

  &:focus {
    background-color: darken($btn-bg-default-color, 20%);
  }
}

.z-btn-primary {
  background-color: $btn-bg-primary-color;
  border-color: darken($btn-bg-primary-color, 15%);
  &:hover {
    background-color: darken($btn-bg-primary-color, 10%);
  }

  &:focus {
    background-color: darken($btn-bg-primary-color, 20%);
  }
}

.z-btn-danger {
  background-color: $btn-bg-danger-color;
  border-color: darken($btn-bg-danger-color, 15%);
  &:hover {
    background-color: darken($btn-bg-danger-color, 10%);
  }

  &:focus {
    background-color: darken($btn-bg-danger-color, 20%);
  }
}

.z-btn-small {
  height: $btn-height-small;
  font-size: $btn-font-size-small;
}
.z-btn-middle {
  height: $btn-height-middle;
  font-size: $btn-font-size-middle;
}
.z-btn-large {
  height: $btn-height-large;
  font-size: $btn-font-size-large;
}

.z-btn-primary,
.z-btn-danger {
  color: #fff;
}

.z-btn-ghost {
  border-style: dashed;
  border-color: darken($btn-bg-default-color, 30%);
  color: inherit;
  &:hover {
    background-color: "";
  }
}

.z-btn-ghost-default {
  &:hover {
    border-color: inherit;
  }
}

.z-btn-ghost-primary {
  &:hover {
    border-color: darken($btn-bg-primary-color, 10%);
    color: darken($btn-bg-primary-color, 10%);
  }
}

.z-btn-ghost-danger {
  &:hover {
    border-color: darken($btn-bg-danger-color, 10%);
    color: darken($btn-bg-danger-color, 10%);
  }
}

.z-btn-ghost-default,
.z-btn-ghost-primary,
.z-btn-ghost-danger {
  background-color: #fff;
}

.z-btn-ghost-default,
.z-btn-ghost-primary,
.z-btn-ghost-danger {
  &:hover {
    background-color: #fff;
  }
  &:focus {
    background-color: #eaeaea;
  }
}

.z-btn-disabled {
  color: $btn-disabled-color;
  background-color: $btn-disabled-bg-color;
  border-color: darken($btn-disabled-color, 10%);
  &:hover {
    background-color: $btn-disabled-bg-color;
    color: $btn-disabled-color;
  }
  cursor: not-allowed;
}

.z-btn-default-loading {
  background-color: darken($btn-bg-default-color, 10%);
}
.z-btn-primary-loading {
  background-color: darken($btn-bg-primary-color, 10%);
}
.z-btn-danger-loading {
  background-color: darken($btn-bg-danger-color, 10%);
}

.z-btn-default-loading,
.z-btn-primary-loading,
.z-btn-danger-loading {
  color: $btn-disabled-color;
  cursor: not-allowed;
}

.z-btn-loading {
  position: absolute;
  font-size: 1.7em;
}
</style>
