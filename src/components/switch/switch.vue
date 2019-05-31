<template>
  <div class="z-switch-swrap">
    <slot></slot>
    <button
      role="button"
      :disabled="disabled"
      @click="switchHandle"
      :data-size="size"
      :data-checked="''+isChecked"
      :data-disabled="disabled"
      class="z-switch"
    >
      <span class="circleBtn" :data-checked="''+isChecked"></span>
    </button>
  </div>
</template>
<script>
export default {
  name: "Switch",
  data() {
    return {
      isChecked: this.value
    };
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: "middle",
      validator(value) {
        const sizes = ["small", "middle", "large"];
        const result = sizes.includes(value);
        if (!result) {
          console.error(
            `Switch属性size不支持${value}类型。它应属于[${sizes}]中之一`
          );
        }
        return result;
      }
    }
  },
  watch: {
    value(value) {
      this.isChecked = value;
    }
  },
  methods: {
    switchHandle() {
      this.isChecked = !this.isChecked;
      this.$emit("input", this.isChecked);
      this.$emit("change", this.isChecked);
    }
  }
};
</script>
<style lang="scss" scoped>
@import'src/style/var.scss';

.z-switch-swrap {
  display: inline-flex;
  align-items: center;
  vertical-align: middle;

  .z-switch {
    height: $z-switch-middle-height;
    width: $z-switch-middle-width;
    border-radius: 14px;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    border: 1px solid #aaa;
    outline: none;
    appearance: none;

    .circleBtn {
      position: absolute;
      top: 1px;
      left: 2px;
      border-radius: 50%;
      transition: left 0.4s;
      background-color: #fff;
    }

    transition: background-color 0.4s;
  }

  .z-switch[data-disabled="true"] {
    cursor: not-allowed;
    background-color: #f5f5f5;

    .circleBtn {
      background-color: #f5f5f5;
    }
  }

  .z-switch[data-checked="false"] {
    background-color: #eaeaea;
    border-color: darken(#eaeaea, 15%);
  }

  .z-switch[data-checked="true"] {
    background-color: $primary-color;
    border-color: darken($primary-color, 15%);
  }

  .z-switch[data-size="small"] {
    height: $z-switch-small-height;
    width: $z-switch-small-width;
    border-radius: $z-switch-small-radius;

    .circleBtn {
      height: $z-switch-small-size;
      width: $z-switch-small-size;
    }

    .circleBtn[data-checked="true"] {
      left: 16px;
    }
  }

  .z-switch[data-size="middle"] {
    height: $z-switch-middle-height;
    width: $z-switch-middle-width;
    border-radius: $z-switch-middle-radius;

    .circleBtn {
      height: $z-switch-middle-size;
      width: $z-switch-middle-size;
    }

    .circleBtn[data-checked="true"] {
      left: 28px;
    }
  }

  .z-switch[data-size="large"] {
    height: $z-switch-large-height;
    width: $z-switch-large-width;
    border-radius: $z-switch-large-radius;

    .circleBtn {
      height: $z-switch-large-size;
      width: $z-switch-large-size;
    }

    .circleBtn[data-checked="true"] {
      left: 40px;
    }
  }
}
</style>
