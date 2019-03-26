<template>
  <div>
    <p>
      <z-switch v-model="checked" size="small" />
      <z-switch v-model="checked" size="middle"/>
      <z-switch v-model="checked" size="large"/>
    </p>
    <z-button type="primary" @click="triggerHandle">通过checked改变</z-button>
  </div>
</template>
<script>
import Switch from "../../../src/components/switch/switch.vue";
import Button from "../../../src/components/button/button.vue";
export default {
  data(){
    return {
      checked: false
    }
  },
    components: {
        'z-switch': Switch,
        'z-button': Button
    },
    methods:{
      triggerHandle(){
        this.checked = !this.checked;
      }
    }
};
</script>