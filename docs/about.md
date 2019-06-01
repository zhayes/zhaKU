---
title: 关于
---

# zhaKU
基于vue 2.x开发的UI组件库，轻量，简洁。

图标库基于[手机淘宝图标库](https://www.iconfont.cn/collections/detail?spm=a313x.7781069.1998910419.d9df05512&cid=33)

### 安装： 
```javascript
    npm install --save zhaku
```

### 引入：
```javascript
    import zhaku from 'zhaku';
    const {Button, Input} from 'zhaku';
```

### 全局引入：
```javascript
    import Vue from 'vue';
    import zhaku from 'zhaku';
    
    Vue.use(zhaku);
```

全局引入后，在模版里使用，只需用小写字母`z`加组件名，并用`-`连接。

例如：```<z-button>这个是按钮</z-button>```。