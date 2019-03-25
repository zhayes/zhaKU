---
title: Input
---

# Input

<ClientOnly>
<input-intro></input-intro>
</ClientOnly>

<<< @/docs/.vuepress/components/input-intro.vue


### Props
|属性|含义|类型|默认
|:-|:-|:-|:-|
|placeholder|输入框提示文字|String||
|type|输入框类型|String: 同原生input的type属性|text|
|size|输入框尺寸|String: small, middle, large|middle|
|disabled|是否禁止输入|Boolean|false|
|readonly|是否只读|Boolean|false|
|value|输入框的取值|String|Number||
|iconName|带图标时候的图标名|String||
|iconPosition|图标显示的位置，只在iconName有的情况下生效|String: after, before|before|

### Events
|事件|含义|类型|默认
|:-|:-|:-|:-|
|change|值改变的时候触发|Function||
|input|输入的时候触发|Function||
|blur|失去焦点的时候触发|Function||
|focus|聚焦的时候触发|Function||
|click|点击的时候触发，不建议使用|Function||