<template>
  <div class="z-switch-swrap">
    <slot></slot>
    <button
      role="button"
      @click="switchHandle"
      :class="{'z-switch': true, 'z-switch-checked-true': isChecked, 'z-switch-checked-false': !isChecked}"
    >
      <span class="circleBtn"></span>
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
.z-switch-swrap {
  display: inline-flex;
  align-items: center;
}
.z-switch {
  outline: none;
  height: 32px;
  width: 60px;
  border-radius: 14px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  border: 1px solid #aaa;

  .circleBtn {
    position: absolute;
    top: 1px;
    height: 28px;
    width: 28px;
    border-radius: 14px;
    background-color: #fff;
    transition: left 0.4s;
  }

  transition: background-color 0.4s;
}

.z-switch-checked-true {
  .circleBtn {
    left: 28px;
  }
  background-color: #1a73e8;
}

.z-switch-checked-false {
  .circleBtn {
    left: 2px;
  }
  background-color: #eaeaea;
}
</style>
