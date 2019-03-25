---
title: Toast
---

# Toast

为了方便用户使用，Toast组件被封装成插件的形式，建议用户应该在全局注册

```javascript
import { toast } from "../../../src/plugins/toast.js";
import Vue from "vue";

Vue.use(toast);
```

后面只需通过调用`this.$ztoast(title, options)`方法，
```javascript
title:String //提示文字内容
```

```javascript
options={
    closeButtonText: String,//自定义按钮文字, 默认关闭
    layout:String,//自定义内容布局：column|row, 默认row
    position:String,//显示位置：bottom|top, 默认top
    showCloseButton:Boolean,//是否显示关闭按钮, 默认为true
    autoClose:Boolean//是否自动关闭, 默认为true
    duraiton:Boolean//显示延时多少毫秒后关闭, 默认2000ms
}
```

<ClientOnly>
<toast-intro></toast-intro>
</ClientOnly>

<<< @/docs/.vuepress/components/toast-intro.vue
