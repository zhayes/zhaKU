---
title: Modal
---

# Modal

支持两种调用形式，组件的形式```<Modal>...</Modal>```，以及静态方法```Modal.alert({...})```。Modal有是三种类型，分别是```alert```、```confirm```、```prompt```。所以Modal也分别支持该三种方法的主动调用，```Modal.alert({...})```、```Modal.confirm({...})```、```Modal.prompt({...})```。

```javascript
import modal from "../../../src/plugins/modal.js";
import Vue from "vue";

Vue.use(modal);
```


<ClientOnly>
<modal-intro></modal-intro>
</ClientOnly>

<<< @/docs/.vuepress/components/modal-intro.vue


### Props
|属性|含义|类型|默认
|:-|:-|:-|:-|
|type|Modal类型|String: alert，confirm，prompt（若为prompt类型，则在onOk回调方法中，会将所输入的值做参数传入）|alert|
|title|标题|String||
|content|提示内容|String||
|showFooter|是否显示底部按钮|Boolean|false|
|visible|Modal是否可见|Boolean|false|
|confirmLoading|确定按钮是否显示loading图标|Boolean|false|
|okText|定义确定按钮文字|String|确定|
|cancelText|定义取消按钮文字|String|取消|
|showModel|是否显示蒙板|Boolean|true|
|maskClosable|点击蒙板是否出发onCancel事件|Boolean|true|

### Props
|属性|含义|类型|默认
|:-|:-|:-|:-|
|onOk|点击确定后的回调方法|Function||
|onCancel|点击取消后的回调方法|Function||

### Modal静态方法
|方法名|参数|
|:-|:-|
|Modal.alert(option={})|option:{} (option内容跟props相似)|
|Modal.confirm(option={})|option:{} (option内容跟props相似)|
|Modal.prompt(option)={}|option:{} (option内容跟props相似)|
