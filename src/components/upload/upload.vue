<template>
  <div>
    <input type="file" style="display:none" ref="file" @change="change" :multiple="multiple">
    <z-button type="primary" @click="click">点击上传</z-button>
    <div class="z-upload-fileList">
      <div class="upload-file-item" :id="item.key" v-for="(item, index) in files" :key="index">
        <div>
          <z-icon name="text"/>
          {{item.name}}
        </div>
        <z-icon name="delete" class="upload-file-del-btn" @click="deleteHandle(item, index)"/>
      </div>
    </div>
  </div>
</template>
<script>
import Button from "../button/button.vue";
import Icon from "../icon/icon.vue";
import uid from "uid";
import Nprogress from "multi-nprogress";
import "multi-nprogress/nprogress.css";

const nprogressConfig = {
  showSpinner: false,
  easing: "ease",
  trickleRate: 0.001,
  trickleSpeed: 1000
};

export default {
  name:'z-upload',
  data() {
    return {
      files: this.fileList
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
      default: "http://127.0.0.1:8000/upload/img"
    },
    responseType: {
      type: String,
      default: "json"
    },
    async: {
      type: Boolean,
      default: true
    },
    name: {
      type: String,
      default: "file"
    },
    fileList: {
      type: Array,
      default: () => []
    }
  },
  watch: {
    fileList(files = []) {
      this.files = files;
    }
  },
  components: {
    "z-button": Button,
    "z-icon": Icon
  },
  mounted() {},
  methods: {
    click() {
      const file = this.$refs.file;
      file.click();
    },
    change(e) {
      const files = e.target.files;
      const fileList = Array.prototype.slice.call(files);

      const filesList = fileList.map(file => {
        const item = {
          file,
          name: file.name,
          size: file.size,
          type: file.type,
          lastModified: file.lastModified
        };
        item.key = uid();
        return item;
      })

      this.createRequest(filesList);
      this.files = this.files.concat(filesList);
    },
    deleteHandle(item, index) {
      this.$emit("delete", item, index, this.files);
    },
    createRequest(fileList = []) {
      fileList.map(item => {
        const formData = new FormData();
        formData.append(this.name, item.file);
        const xhr = this.createXMLHttpRequest(formData, item);

        xhr.then(({ target, item }) => {
          this.$emit("success", target.response, this.files, target);
        });
      });
    },
    createXMLHttpRequest(formData, item) {
      const xhr = new XMLHttpRequest();
      const nprogress = Nprogress();

      return new Promise((resolve, reject) => {
        const { url, method, async, responseType } = this || {};
        xhr.responseType = responseType;

        const key = item.key;
        const config = { ...nprogressConfig };
        config.parent = `#${key}`;
        nprogress.configure(config);

        xhr.onloadstart = progressEvent => {
          this.$nextTick(() => {
            try {
              nprogress.start();
            } catch (err) {}
          });

          this.$emit("loadStart", progressEvent, formData);
        };

        xhr.onprogress = progressEvent => {};

        xhr.onloadend = progressEvent => {
          nprogress.done();
          this.$emit("loadEnd", progressEvent);
        };

        xhr.onerror = progressEvent => {
          this.$emit("error", progressEvent);
        };

        xhr.onabort = progressEvent => {
          this.$emit("abort", progressEvent);
        };

        xhr.open(method, url, async);

        xhr.send(formData);

        xhr.onreadystatechange = e => {
          const target = e.target;
          const status = target.status;
          const readyState = target.readyState;

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
          if (readyState === 4 && status === 200) {
            //HTTP 响应已经完全接收。
            resolve({ target, item });
          }
        };
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.z-upload-fileList {
  margin-top: 10px;
  font-size: 14px;
}
.upload-file-item {
  display: flex;
  align-items: center;
  padding: 0 0.5em;
  justify-content: space-between;

  &:hover {
    background-color: #eaeaea;
  }
  .upload-file-del-btn {
    float: right;
    cursor: pointer;
    transition: 100ms;
    &:hover {
      transform: scale(1.2);
    }
  }
  div {
    display: flex;
    flex: 1;
    align-items: center;
    svg {
      margin-right: 0.2em;
    }
  }
}
</style>
