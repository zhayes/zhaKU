<template>
  <div>
    <p>
      <z-tabs :selected="selected" @update:selected="selectedHandle">
        <z-tabs-header style="display: flex; text-align:center">
          <z-tabs-item name="tab1" activeClass="active" style="flex:1">tab 1</z-tabs-item>
          <z-tabs-item name="tab2" style="flex:1">tab 2</z-tabs-item>
          <z-tabs-item name="tab3" style="flex:1">tab 3</z-tabs-item>
        </z-tabs-header>
        <z-tabs-body>
          <z-tabs-pane name="tab1">tab1 content</z-tabs-pane>
          <z-tabs-pane name="tab2">tab2 content</z-tabs-pane>
          <z-tabs-pane name="tab3">tab3 content</z-tabs-pane>
        </z-tabs-body>
      </z-tabs>
    </p>
    动态控制切换
    <p>
      <z-button-group>
        <z-button
          @click="changeSelect('tab3')"
          :type="selected=='tab3'? 'primary' : 'default'"
        >切换到tab3</z-button>
        <z-button
          @click="changeSelect('tab2')"
          :type="selected=='tab2'? 'primary' : 'default'"
        >切换到tab2</z-button>
        <z-button
          @click="changeSelect('tab1')"
          :type="selected=='tab1'? 'primary' : 'default'"
        >切换到tab1</z-button>
      </z-button-group>
    </p>
  </div>
</template>
<script>
import Button from "../../../src/components/button/button.vue";
import ButtonGroup from "../../../src/components/button/group.vue";
import Tabs, {
  TabsBody,
  TabsHeader,
  TabsItem,
  TabsPane
} from "../../../src/components/tabs/index.js";

export default {
  components: {
    "z-button": Button,
    "z-button-group": ButtonGroup,
    "z-tabs": Tabs,
    "z-tabs-body": TabsBody,
    "z-tabs-header": TabsHeader,
    "z-tabs-item": TabsItem,
    "z-tabs-pane": TabsPane,
  },
  data() {
    return {
      selected: "tab1"
    };
  },
  methods: {
    selectedHandle(name) {
      this.selected = name;
    },
    changeSelect(type) {
      this.selected = type;
    }
  }
};
</script>
<style lang="scss" scoped>
.active {
  background-color: red !important;
}
</style>

