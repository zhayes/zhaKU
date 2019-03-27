---
title: Tabs
---

# Tabs

整个`Tabs`组件由五个小组件组成，布局类似表格。具体看示例。

该组件只提供最基本的切换功能，提供选中样式属性activeClass。

每一个`z-tabs-item`组件都应该有个`name`属性，用于标记唯一性，并跟`TabsPane`的name对应。

<ClientOnly>
<tabs-intro></tabs-intro>
</ClientOnly>

<<< @/docs/.vuepress/components/tabs-intro.vue


### Tabs Props
|属性|含义|类型|默认
|:-|:-|:-|:-|
|selected|当前选中的项，取值为TabsItem的name的值|String,Number|false|

### TabsPane Events
|事件|含义|类型|默认
|:-|:-|:-|:-|
|update:selected|选中项改变时触发的事件|Function: ()=>{}||

### TabsItem TabsPane Props
|属性|含义|类型|默认
|:-|:-|:-|:-|
|name|用于标记唯一性，TabsItem的name应该跟TabsPane的name对应|String,Number|false|