<template>
  <div>
    <p>
      <z-switch v-model="checked">
        <div style="margin-right:.5em">点击我</div>
      </z-switch>
    </p>
    <z-button @click="triggerHandle">通过checked改变</z-button>
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