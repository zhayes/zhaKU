<template>
  <div>
    <h4>Picker组件</h4>
    <p>{{pcaItems[0] ? pcaItems[0].name : '- 省 -'}} / {{pcaItems[1] ? pcaItems[1].name : '- 市 -'}} / {{pcaItems[2] ? pcaItems[2].name : '- 区 -'}}</p>
    <z-button @click="togglePicker">显示picker</z-button>
    <p>
      <z-picker
        :visible="pickerVisible"
        @confirm="pickerChange"
        @cancel="cancelPicker"
        :value="pickerValue"
        :data="dataList"
        valueKey="code"
        title="请选择省市区"
      ></z-picker>
    </p>
  </div>
</template>
<script>
import Picker from "../../../src/components/picker/picker.vue";
import pca from "../../../src/components/picker/pca.js";
import Button from "../../../src/components/button/button.vue";

export default {
  components: {
    "z-picker": Picker,
    "z-button": Button
  },
  data() {
    return {
      pickerVisible: false,
      pickerValue: [],
      pcaItems: [],
      dataList: pca
    };
  },
  methods: {
    togglePicker() {
      this.pickerVisible = !this.pickerVisible;
    },
    pickerChange(value, data) {
      this.pickerValue = value;
      this.pcaItems = data;
      console.log(this.pickerValue);
      this.pickerVisible = false;
    },
    cancelPicker() {
      this.pickerVisible = false;
    }
  }
};
</script>
