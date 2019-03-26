<template>
  <div>
    <p>
      <z-checkbox></z-checkbox>
    </p>
  </div>
</template>
<script>
import Checkbox from "../../../src/components/checkbox/checkbox.vue";
export default {
    components: {
        'z-checkbox': Checkbox
    }
};
</script>