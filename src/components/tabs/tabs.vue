<template>
  <div class="z-tabs">
    <slot></slot>
  </div>
</template>
<script>
import Vue from "vue";
export default {
  name: "z-tabs",
  props: {
    selected: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      eventBus: new Vue()
    };
  },
  provide() {
    return {
      eventBus: this.eventBus
    };
  },
  mounted() {
    if (this.eventBus) {
      this.eventBus.$on("update:selected", name => {
        this.$emit("update:selected", name);
      });
      this.eventBus.$emit("update:selected", this.selected);
    }
  },
  watch: {
    selected(name) {
      this.selected = name;
      this.eventBus && this.eventBus.$emit("update:selected", this.selected);
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
