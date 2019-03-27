<template>
  <div>
    <h4>基于<a target="_blank" href="https://www.iconfont.cn/collections/detail?spm=a313x.7781069.1998910419.d9df05512&cid=33">手机淘宝图标库</a></h4>
    <p style="font-size: 40px">
      <z-icon name="my"/>
      <z-icon name="settings_light"/>
      <z-icon name="round_location_fill"/>
      <z-icon name="comment"/>
    </p>
  </div>
</template>
<script>
import Icon from "../../../src/components/icon/icon.vue";
export default {
    components: {
        'z-icon': Icon
    }
};
</script>