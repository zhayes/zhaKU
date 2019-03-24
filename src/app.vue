<template>
  <div style="margin: 30px">
    <h3>zhaUI组件库（渣库）（基于Vue2.x.x）</h3>
    <div>
      <h4>按钮</h4>

      <p>
        <z-button type="default">default按钮</z-button>
        <z-button type="primary">primary按钮</z-button>
        <z-button type="danger">danger按钮</z-button>
        <z-button type="default" ghost>dashed按钮</z-button>
        <z-button type="primary" ghost>primary dashed按钮</z-button>
        <z-button type="danger" ghost>danger dashed按钮</z-button>
        <z-button type="primary" disabled>禁止点击</z-button>
      </p>

      <p>
        <z-button loading>loading按钮</z-button>
        <z-button type="primary" loading>loading按钮</z-button>
        <z-button type="danger" loading>loading按钮</z-button>
        <z-button size="middle" type="primary" @click="click" :loading="loading">触发点击</z-button>
      </p>

      <p>
        <z-button size="small" type="primary">small按钮</z-button>
        <z-button size="middle" type="primary">middle按钮</z-button>
        <z-button size="large" type="primary">large按钮</z-button>
      </p>

      <p>
        <z-button-group>
          <z-button type="default">按钮1</z-button>
          <z-button type="primary">按钮2</z-button>
          <z-button type="primary">按钮3</z-button>
          <z-button type="danger">按钮4</z-button>
        </z-button-group>
      </p>

      <p>
        <z-button-group>
          <z-button type="default">按钮1</z-button>
          <z-button type="primary">按钮2</z-button>
        </z-button-group>
      </p>
    </div>

    <div>
      <h4>图标（基于手机淘宝图标库）</h4>
      <p style="font-size: 40px">
        <z-icon name="my"/>
        <z-icon name="settings_light"/>
        <z-icon name="round_location_fill"/>
        <z-icon name="comment"/>
      </p>
    </div>

    <div>
      <h4>Input组件</h4>
      <p>
        <z-input type="text" size="small"/>
        <z-input type="text" size="middle"/>
        <z-input type="text" size="large" iconName="search"/>
      </p>
      <p>
        <z-input disabled placeholder="disabled输入框"></z-input>
        <z-input readonly placeholder="只读输入框"></z-input>
      </p>
      <p>
        <z-input type="text" v-model="inputVal"/>
        <z-button type="primary" @click="inputVal=inputVal+1">+1</z-button>
        {{inputVal}}
      </p>
      <p>
        <z-input type="text" iconName="search"/>
        <z-input type="text" iconName="search" iconPosition="after"/>
      </p>
    </div>

    <div>
      <h4>Toast组件</h4>
      <p>
        <z-button @click="toastTop">触发 top toast</z-button>
        <z-button @click="toastBottom">触发 bottom toast</z-button>
        <z-button @click="toastLayoutColumn">触发上下布局toast</z-button>
      </p>
    </div>

    <div>
      <h4>Tabs组件(该组件只提供最基本的切换功能，提供选中样式属性activeClass)</h4>
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

        <z-tabs :selected="selected" @update:selected="selectedHandle">
          <z-tabs-header>
            <z-tabs-item name="tab1" activeClass="active">tab 1</z-tabs-item>
            <z-tabs-item name="tab2">tab 2</z-tabs-item>
            <z-tabs-item name="tab3">tab 3</z-tabs-item>
          </z-tabs-header>
          <z-tabs-body>
            <z-tabs-pane name="tab1">tab1 content</z-tabs-pane>
            <z-tabs-pane name="tab2">tab2 content</z-tabs-pane>
            <z-tabs-pane name="tab3">tab3 content</z-tabs-pane>
          </z-tabs-body>
        </z-tabs>
      </p>
    </div>

    <div>
      <h4>Cascarder组件</h4>
      <p>
        <z-cascader :data="dataList" :value="districts" @change="selectChange" valueKey="code"/>
      </p>
      <p>
        <z-button @click="districts=['12', '1201', '120101']" type="primary">动态改变选中项</z-button>
      </p>
    </div>

    <div>
      <h4>Cell组件</h4>
      <p>
        <z-cell>
          <div slot="title" style="display:flex;align-items:center">
            <z-icon name="comment"/>发生地方是否收到
          </div>发多少是多福多寿
        </z-cell>
        <z-cell title="标题">展示内容
          <z-icon name="settings_light"/>
        </z-cell>
        <z-cell title="标题">展示内容</z-cell>
        <z-cell title="标题">展示内容</z-cell>
      </p>
    </div>

    <div>
      <h4>Picker组件</h4>
      <p>
        {{pcaItems[0] ? pcaItems[0].name : '- 省 -'}} / {{pcaItems[1] ? pcaItems[1].name : '- 市 -'}} / {{pcaItems[2] ? pcaItems[2].name : '- 区 -'}}
      </p>
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
        >
        </z-picker>
      </p>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import {
  Button,
  ButtonGroup,
  Icon,
  Input,
  Tabs,
  TabsBody,
  TabsHeader,
  TabsItem,
  TabsPane,
  Cascader,
  Cell,
  Picker
} from "./index";

import pca from './components/picker/pca.js';

import { toast } from "./plugins/toast";

Vue.use(toast);

export default {
  name: "app",
  data() {
    return {
      inputVal: "双向数据绑定",
      loading: false,
      selected: "tab1",
      dataList: pca,
      districts: ["11", "1101", "110101"],
      pickerVisible: false,
      pickerValue: [],
      pcaItems: []
    };
  },
  components: {
    "z-button": Button,
    "z-button-group": ButtonGroup,
    "z-icon": Icon,
    "z-input": Input,
    "z-tabs": Tabs,
    "z-tabs-body": TabsBody,
    "z-tabs-header": TabsHeader,
    "z-tabs-item": TabsItem,
    "z-tabs-pane": TabsPane,
    "z-cascader": Cascader,
    "z-cell": Cell,
    "z-picker": Picker
  },
  methods: {
    click() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 2000);
    },
    toastTop() {
      this.$ztoast(
        "hi, zhaUI! 我在上面展示 我在上面展示 我在上面展示 我在上面展示 我在上面展示 我在上面展示 我在上面展示 我在上面展示",
        {
          closeButtonText: "知道了",
          position: "top"
        }
      );
    },
    toastBottom() {
      this.$ztoast("hi, zhaUI! 我在下面展示", {
        closeButtonText: "知道了",
        position: "bottom"
      });
    },
    toastLayoutColumn() {
      this.$ztoast("hi, zhaUI! 我是上下布局", {
        closeButtonText: "知道了",
        layout: "column"
      });
    },
    selectedHandle(name) {
      this.selected = name;
    },
    changeSelect(type) {
      this.selected = type;
    },
    selectChange(vlues, labels, data) {
      console.log(vlues, labels, data);
    },
    togglePicker(){
      this.pickerVisible = !this.pickerVisible;
    },
    pickerChange(value, data){
      this.pickerValue = value;
      this.pcaItems = data;
      console.log(this.pickerValue)
      this.pickerVisible = false;
    },
    cancelPicker(){
      this.pickerVisible = false;
    }
  }
};
</script>
<style lang="scss">
html,
body {
  background: #fff;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin-bottom: 1em;
}
.active {
  background-color: red !important;
}
</style>

