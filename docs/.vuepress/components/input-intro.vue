<template>
  <div>
    <h4>三种不同的尺寸</h4>
    <p>
      <z-input type="text" size="small" placeholder="small输入框"/>
      <z-input type="text" size="middle" placeholder="middle输入框"/>
      <z-input type="text" size="large" placeholder="large输入框"/>
    </p>
    <h4>禁止跟只读</h4>
    <p>
      <z-input disabled placeholder="disabled输入框"></z-input>
      <z-input readonly placeholder="只读输入框"></z-input>
    </p>
    <h4>支持双向数据绑定</h4>
    <p>
      <z-input type="text" v-model="inputVal"/>
      {{inputVal}}
    </p>
    <h4>带图标</h4>
    <p>
      <z-input type="text" iconName="search"/>
      <z-input type="text" iconName="search" iconPosition="after"/>
    </p>
  </div>
</template>
<script>
import Input from "../../../src/components/input/input.vue";
export default {
  name: "InputIntro",
  components: {
    "z-input": Input
  },
  data() {
    return {
      inputVal: "双向数据绑定"
    };
  }
};
</script>
