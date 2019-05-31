<template>
  <label class="z-checkbox-swrap" @click.prevent="checkHandle">
    <input
      class="z-checkbox-input"
      type="checkbox"
      :checked="checked"
      :name="name"
      :value="value"
      :disabled="disabled"
    >
    <span class="z-checkbox-box" :data-checkded="isChecked" :data-disabled="disabled"></span>
    <slot></slot>
  </label>
</template>
<script>
export default {
  data() {
    return {
      isChecked: this.checked
    };
  },
  props: {
    value: {
      type: String,
      required: true
    },
    checked: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      required: true
    }
  },
  watch: {
    checked(val) {
      this.isChecked = val;
    }
  },
  methods: {
    checkHandle() {
      if (this.disabled === true) return;
      this.isChecked = !this.isChecked;
      this.$emit("change", this.isChecked, {
        name: this.name,
        checked: this.isChecked,
        value: this.value
      });
    }
  }
};
</script>
<style lang="scss" scoped>
@import'src/style/var.scss';

.z-checkbox-swrap {
  display: inline-flex;
  align-items: center;
  justify-items: center;
  vertical-align: middle;
  .z-checkbox-input {
    display: none;
  }
  .z-checkbox-box {
    position: relative;
    display: inline-block;
    height: $z-checkbox-size;
    width: $z-checkbox-size;
    border-radius: 50%;
    background-color: #fff;
    border: 1px solid #aaa;
    cursor: pointer;
    transition: 0.4s;
    user-select: none;
    vertical-align: middle;

    &:after {
      position: absolute;
      content: "";
      width: 10px;
      height: 2px;
      background-color: #ffffff;
      top: 9px;
      right: 3px;
      transform: rotate(-45deg) scale(0);
    }

    &:before {
      position: absolute;
      content: "";
      width: 6px;
      height: 2px;
      background-color: #ffffff;
      top: 11px;
      left: 4px;
      transform: rotate(45deg) scale(0);
    }

    &[data-checkded="true"] {
      background-color: $z-checkbox-color;

      &:after {
        transform: rotate(-45deg) scale(1);
      }
      &:before {
        transform: rotate(45deg) scale(1);
      }
    }

    &[data-disabled="true"] {
      background-color: #aaa;
      cursor: not-allowed;

      &:after {
        transform: rotate(-45deg) scale(1);
      }
      &:before {
        transform: rotate(45deg) scale(1);
      }
    }
  }
}
</style>
