<template>
  <div :class="{'z-tabs-item': true, 'z-tabs-item-active': active, [`${activeClass}`]: (active && activeClass)}" @click="click">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name:'z-tabs-item',
  data() {
    return {
      active: false
    };
  },
  props: {
    name: {
      type: [String,Number]
    },
    activeClass: {
      type: String
    }
  },
  inject: ["eventBus"],
  methods:{
      click(){
          if(this.eventBus){
              this.eventBus.$emit('update:selected', this.name)
          }
      }
  },
  created() {
    if (this.eventBus) {
      this.eventBus.$on("update:selected", name => {
        this.active = name === this.name;
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.z-tabs-item {
  align-items: center;
}
.z-tabs-item-active {
  background-color: #ccc;
}
</style>
