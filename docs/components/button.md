---
title: Button
---

# Button

<ClientOnly>
<button-intro></button-intro>
</ClientOnly>

<<< @/docs/.vuepress/components/button-intro.vue

### Props
|属性|含义|类型|默认
|:-|:-|:-|:-|
|type|按钮类型|String: default, primary, danger|default|
|ghost|是否是ghost类型|Boolean|false|
|size|按钮尺寸|String: small, middle, large|middle|
|disabled|是否禁止点击|Boolean|false|
|loading|是否显示loading图标，loading情况下不能点击|Boolean|false|

### Events
|事件|含义|类型|默认
|:-|:-|:-|:-|
|click|点击时触发|Function||