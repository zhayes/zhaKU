---
title: Checkbox
---

# Checkbox

<ClientOnly>
<checkbox-intro></checkbox-intro>
</ClientOnly>

<<< @/docs/.vuepress/components/checkbox-intro.vue

### Props
|属性|含义|类型|默认
|:-|:-|:-|:-|
|value|提交的内容|String||
|checked|是否选中|Boolean|false|
|name|表单提交时的字段名|String||
|disabled|是否禁用|Boolean|false|

### Events
|属性|含义|类型|默认
|:-|:-|:-|:-|
|change|更改时触发的事件|Function: (checked,{name,value,checked})=>{}||