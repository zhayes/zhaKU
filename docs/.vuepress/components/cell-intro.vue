<template>
    <div>
        <h4>Cell组件</h4>
      <p>
        <z-cell>
          <div slot="title" style="display:flex;align-items:center">
            <z-icon name="comment"/> 内容内容内容
          </div>
          内容内容内容
        </z-cell>
        <z-cell title="标题">展示内容
          <z-icon name="settings_light"/>
        </z-cell>
        <z-cell title="标题">展示内容</z-cell>
        <z-cell title="标题">展示内容</z-cell>
      </p>
    </div>
</template>
<script>
import Cell from "../../../src/components/cell/cell.vue";
import Icon from "../../../src/components/icon/icon.vue";
export default {
   components:{
       "z-cell": Cell,
        "z-icon": Icon
   }
}
</script>
