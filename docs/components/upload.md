---
title: Upload
---

# Upload（正在开发中...）


<ClientOnly>
<upload-intro></upload-intro>
</ClientOnly>

<<< @/docs/.vuepress/components/upload-intro.vue

### Upload Props
|属性|含义|类型|默认
|:-|:-|:-|:-|
|multiple|是否多选|Boolean|false|
|method|请求方法|String|POST|
|url|上传路径|String||
|responseType|响应报文类型|String|json|
|async|是否异步|Boolean|true|
|name|上传的文件字段|String|file|
|fileList|当前文件数量|Array|[]|


### Upload Events
|属性|含义|类型|默认
|:-|:-|:-|:-|
|success|上传成功后的回调|Function||
|delete|删除后的回调|Function||
|loadStart|上传开始时的回调|Function||
|loadEnd|上传结束后的回调|Function||
