<template>
  <div>
    <h4>Cascarder组件</h4>
    <p>
      <z-cascader :data="dataList" :value="districts" @change="selectChange" valueKey="code" placeholder="请选择省市区"/>
    </p>
    <p>
      <z-button @click="districts=['12', '1201', '120101']" type="primary">动态改变选中项</z-button>
    </p>
  </div>
</template>
<script>
import Cascader from "../../../src/components/cascader/cascader.vue";
import pca from "../../../src/components/picker/pca.js";
import Button from "../../../src/components/button/button.vue";

export default {
  components: {
    "z-cascader": Cascader,
    "z-button": Button
  },
  data() {
    return {
      dataList: pca,
      //districts: ["11", "1101", "110101"]
      districts: []
    };
  },
  methods: {
    selectChange(vlues, labels, data) {
      console.log(vlues, labels, data);
    }
  }
};
</script>