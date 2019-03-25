---
title: Picker
---

# Picker

<ClientOnly>
<picker-intro></picker-intro>
</ClientOnly>

<<< @/docs/.vuepress/components/picker-intro.vue

### Props
|属性|含义|类型|默认
|:-|:-|:-|:-|
|visible|控制组件显示隐藏|Boolean|false|
|data|组件展示数据|Array|[ ]|
|valueKey|数据中对应的值字段|String|id|
|labelKey|数据展示对应的字段|String|name|
|childrenKey|数据中嵌套的数据字段|String|children|
|title|组件头部标题|String||
|value|组件选中的值|Array|[ ]|
|showModel|是否显示蒙板|Boolean|true|
|maskClosable|点击蒙板是否关闭|Boolean|true|

### Events
|事件|含义|类型|默认
|:-|:-|:-|:-|
|cancel|点击取消触发|Function: ()=>{}||
|confirm|点击确定触发|Function: (values, data)=>{}||
