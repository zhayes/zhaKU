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
        <z-input type="text" size="large"/>
      </p>
      <p>
        <z-input disabled placeholder="disabled输入框"></z-input>
        <z-input readonly></z-input>
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
        <z-cascader :data="dataList" :value="districts" @change="selectChange"/>
      </p>
      <z-button @click="districts=[1,10]">动态改变选中项</z-button>
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
  Cascader
} from "./index";

import { toast } from "./plugins/toast";

Vue.use(toast);

export default {
  name: "app",
  data() {
    return {
      inputVal: "双向数据绑定",
      loading: false,
      selected: "tab1",
      dataList: [
        {
          name: "浙江",
          id: 1,
          children: [
            { name: "杭州市", id: 10, children: [{ name: "杭州", id: 12 }] },
            { name: "义乌", id: 11 }
          ]
        },
        { name: "安徽", id: 2, children: [{ name: "合肥", id: 20 }] },
        {
          name: "江苏",
          id: 3,
          disabled: true,
          children: [{ name: "南京", id: 30 }]
        },
        { name: "上海", id: 4, children: [{ name: "上海", id: 40 }] }
      ],
      districts:[2,20]
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
    "z-cascader": Cascader
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
    selectChange(vlues, labels, data){
      console.log(vlues, labels, data)
    }
  }
};
</script>
<style lang="scss">
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

