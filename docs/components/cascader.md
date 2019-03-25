---
title: Cascader
---

# Cascader

<ClientOnly>
<cascader-intro></cascader-intro>
</ClientOnly>

<<< @/docs/.vuepress/components/cascader-intro.vue

### Props
|属性|含义|类型|默认
|:-|:-|:-|:-|
|data|下拉数据|Array|[ ]|
|type|同Input组件的type|String|default|
|size|同Input组件的size|String|middle|
|divisionSymbol|选中后的分隔符|String|/|
|valueKey|数据中对应的值字段|String|id|
|labelKey|数据展示对应的字段|String|name|
|childrenKey|数据中嵌套的数据字段|String|children|
|value|组件选中的值，可用于回显|Array|[ ]|
|allowClear|是否允许删除|Boolean|true|
|placeholder|提示文字，同Input组件placeholder|String||

### Events
|事件|含义|类型|默认
|:-|:-|:-|:-|
|change|选中数据时触发|Function: (values, labels, data)=>{}||
