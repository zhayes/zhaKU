---
title: Switch
---

# Switch
支持`v-model`双向绑定
<ClientOnly>
<switch-intro></switch-intro>
</ClientOnly>

<<< @/docs/.vuepress/components/switch-intro.vue


### Props
|属性|含义|类型|默认
|:-|:-|:-|:-|
|value|是否被选中|Boolean|false|
|size|组件大小|String: small,middle,large|mmiddle|
|disabled|是否禁用|Boolean|false|

### Events
|属性|含义|类型|默认
|:-|:-|:-|:-|
|change|value改变时触发|Function: (value)=>{}||
