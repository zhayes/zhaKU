<template>
  <div>
    <h4>三种不同颜色类型的按钮</h4>
    <p>
      <z-button type="default">default按钮</z-button>
      <z-button type="primary">primary按钮</z-button>
      <z-button type="danger">danger按钮</z-button>
    </p>

    <h4>ghost按钮</h4>
    <p>
      <z-button type="default" ghost>dashed按钮</z-button>
      <z-button type="primary" ghost>primary dashed按钮</z-button>
      <z-button type="danger" ghost>danger dashed按钮</z-button>
    </p>

    <h4>禁止点击</h4>
    <p>
      <z-button disabled>禁止点击</z-button>
      <z-button ghost disabled>禁止点击</z-button>
    </p>

    <h4>支持loading图标</h4>
    <p>
      <z-button loading>loading按钮</z-button>
      <z-button type="primary" loading>loading按钮</z-button>
      <z-button type="danger" loading>loading按钮</z-button>
      <z-button size="middle" type="primary" @click="triggerLoading" :loading="loading">触发点击</z-button>
    </p>

    <h4>三种不同尺寸</h4>
    <p>
      <z-button size="small" type="primary">small按钮</z-button>
      <z-button size="middle" type="primary">middle按钮</z-button>
      <z-button size="large" type="primary">large按钮</z-button>
    </p>

    <h4>支持按钮组</h4>
    <p>
      <z-button-group>
        <z-button type="default"><z-icon name="settings_light" style="margin-right:.4em"/> 按钮1</z-button>
        <z-button type="primary">按钮2</z-button>
        <z-button type="primary">按钮3</z-button>
        <z-button type="danger">按钮4<z-icon name="round_location_fill" style="margin-left:.4em"/></z-button>
      </z-button-group>
    </p>
  </div>
</template>
<script>
import Button from "../../../src/components/button/button.vue";
import ButtonGroup from "../../../src/components/button/group.vue";
import Icon from "../../../src/components/icon/icon.vue";

export default {
  name: "button_intro",
  components: {
    "z-button": Button,
    "z-button-group": ButtonGroup,
    "z-icon": Icon
  },
  data() {
    return {
      loading: false
    };
  },
  methods: {
    triggerLoading() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 2000);
    }
  }
};
</script>