<template>
  <div>
    <p>
      <z-checkbox   name="zha" disabled value="苹果">苹果</z-checkbox>
      <z-checkbox   name="zha" value="香蕉" checked>香蕉</z-checkbox>
      <z-checkbox   name="zha" value="橘子">橘子</z-checkbox>
    </p>
  </div>
</template>
<script>
import Checkbox from "../../../src/components/checkbox/checkbox.vue";
import Button from "../../../src/components/button/button.vue";
export default {
    components: {
        'z-checkbox': Checkbox,
        'z-button': Button
    }
};
</script>