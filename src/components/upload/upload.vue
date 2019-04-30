<template>
  <div>
    <input type="file" style="display:none" ref="file" @change="change" :multiple="multiple">
    <z-button type="primary" @click="click">点击上传</z-button>
    <div>
      <div v-for="(file, index) in files" :key="index">{{file.name}} / {{file.type}} / {{file.size}}</div>
    </div>
  </div>
</template>
<script>
import Button from "../button/button.vue";

export default {
  data() {
    return {
      files: []
    };
  },
  props: {
    multiple: {
      type: Boolean,
      default: true
    },
    method: {
      type: String,
      default: "POST"
    },
    url: {
      type: String,
      default: ''
    },
    async: {
      type: Boolean,
      default: true
    }
  },
  components: {
    "z-button": Button
  },
  mounted() {
    const req = this.createXMLHttpRequest();
    console.log(req);
  },
  methods: {
    click() {
      const file = this.$refs.file;
      file.click();
    },
    change(e) {
      const files = e.target.files;
      this.files = Array.prototype.slice.call(files);

      const formData = this.createFormData(this.files);
      const xhr = this.createXMLHttpRequest(formData);

      xhr.then(target => {
        this.uploadAfter && this.uploadAfter(target); //上传后
      });
    },
    createFormData(files = []) {
      const formData = new FormData();

      files.map(file => {
        formData.append("file", file);
      });

      return formData;
    },
    createXMLHttpRequest(fileData) {
      const xhr = new XMLHttpRequest();

      return new Promise((resolve, reject) => {
        const { url, method, async } = this || {};

        if (this.uploadBefore) {
          fileData = this.uploadBefore(fileDatas, xhr); //上传前
        }

        xhr.open(method, url, async);

        xhr.send(fileData);

        xhr.onreadystatechange = e => {
          const target = e.target;
          const readyState = e.readyState;

          if (readyState === 0) {
            //初始化状态
          }
          if (readyState === 1) {
            //open() 方法已调用
          }
          if (readyState === 2) {
            //Send() 方法已调用
          }
          if (readyState === 3) {
            //所有响应头部都已经接收到。响应体开始接收但未完成
          }
          if (readyState === 4) {
            //HTTP 响应已经完全接收。
            resoleve(target);
          }
        };
      });
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
