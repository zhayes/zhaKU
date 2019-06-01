<template>
  <div class="z-cascader">
    <z-input
      readonly
      :placeholder="placeholder"
      :size="size"
      class="cascader-input"
      ref="input"
      @click.stop="trigger"
      :value="selectedLabels"
      :iconName="(allowClear && selectedLabels&&!visible ? 'round_close_light' : visible ? 'fold' : 'unfold')"
      iconPosition="after"
      @iconTrigger="clearn"
      style="width:100%"
    />
    <div class="cascaderBox" v-show="visible">
      <div
        style="position:absolute; z-index: 10; top: 2px; left: 0; box-shadow: 0 2px 2px 2px #ccc"
      >
        <z-cascader-list :data="data"/>
      </div>
    </div>
  </div>
</template>
<script>
import CascaderList from "./cascader-list.vue";
import Input from "../input/input.vue";
import Vue from "vue";
export default {
  name: "z-cascader",
  data() {
    return {
      visible: false,
      eventBus: new Vue(),
      iconName: null,
      outerSelectedItems: [],
      currentItems: [],
      selectedLabels: "",
      memorySelectedLabels: "",
      memoryCurrentItems: []
    };
  },
  props: {
    data: {
      type: Array,
      default: () => []
    },
    divisionSymbol: {
      type: String,
      default: "/"
    },
    valueKey: {
      type: String,
      default: "id"
    },
    labelKey: {
      type: String,
      default: "name"
    },
    childrenKey: {
      type: String,
      default: "children"
    },
    value: {
      type: Array,
      default: () => []
    },
    allowClear: {
      type: Boolean,
      default: true
    },
    placeholder: {
      type: String
    },
    size: {
      type: String,
      default: "middle",
      validator(value) {
        const sizes = ["small", "middle", "large"];
        const result = sizes.includes(value);
        if (!result) {
          console.error(
            `input属性size不支持${value}类型。它应属于[${sizes}]中之一`
          );
        }
        return result;
      }
    }
  },
  components: {
    "z-cascader-list": CascaderList,
    "z-input": Input
  },
  provide() {
    return {
      eventBus: this.eventBus,
      selectedItems: this.currentItems,
      divisionSymbol: this.divisionSymbol,
      valueKey: this.valueKey,
      labelKey: this.labelKey,
      childrenKey: this.childrenKey,
      selectedData: this.selectedData
    };
  },
  methods: {
    trigger() {
      this.visible = true;
      this.eventBus.$emit("update:change", this.currentItems);
    },
    clearn() {
      if (!this.allowClear || this.visible || !this.selectedLabels) return;
      this.memorySelectedLabels = "";
      this.memoryCurrentItems = [];
      this.currentItems = [];
      this.selectedLabels = "";

      this.eventBus.$emit("update:change", this.currentItems);

      this.$emit("change", [], [], []);
    },
    getLabels(currentItems) {
      const labels = [];
      currentItems.map(item => {
        labels.push(item[this.labelKey]);
      });

      return labels.join(` ${this.divisionSymbol} `);
    },
    initCurrentItems(value) {
      //根据组件传入的value值，初始化当前选中项，该方法在created生命周期里调用
      const currentItems = [];

      const loop = data => {
        data.map(item => {
          if (this.value.includes(item[this.valueKey])) {
            currentItems.push(item);
          }

          if (item[this.childrenKey] && item[this.childrenKey].length) {
            loop(item[this.childrenKey]);
          }
        });
      };

      loop(this.data);

      this.currentItems = currentItems;
      this.selectedLabels = this.getLabels(this.currentItems);

      this.memorySelectedLabels = this.selectedLabels;
      this.memoryCurrentItems = JSON.parse(JSON.stringify(this.currentItems));
    },
    getValues() {
      return this.currentItems.map(item => {
        return item[this.valueKey];
      });
    }
  },
  created() {
    this.initCurrentItems(this.value);

    this.eventBus.$on("update:select", (index, item) => {
      this.currentItems[index] = item;
      this.currentItems.splice(index + 1);

      const values = this.getValues();
      const labels = this.getLabels(this.currentItems);

      this.selectedLabels = labels;

      if (!item[this.childrenKey] || !!!item[this.childrenKey].length) {
        this.visible = false;
        this.memorySelectedLabels = this.selectedLabels;
        this.memoryCurrentItems = [...this.currentItems];

        this.$emit(
          "change",
          values,
          this.selectedLabels
            .split(this.divisionSymbol)
            .map(label => label.trim()),
          this.memoryCurrentItems
        );
      }
      this.eventBus.$emit("update:change", this.currentItems);
    });

    this.eventBus.$on("update:mounted", () => {
      this.eventBus.$emit("update:change", this.currentItems);
    });
  },
  watch: {
    value(data) {
      this.initCurrentItems(data);
      this.eventBus.$emit("update:change", this.currentItems);
    }
  },
  mounted() {
    this.eventBus.$emit("update:change", this.currentItems);

    document.addEventListener("click", () => {
      if (this.visible) {
        this.visible = false;

        this.currentItems = [...this.memoryCurrentItems];
        this.selectedLabels = this.memorySelectedLabels;

        this.eventBus.$emit("update:change", this.currentItems);
      }
    });
  }
};
</script>
<style lang="scss" scoped>
.z-cascader {
  width: 250px;
  .cascaderBox {
    position: relative;
  }
}
</style>

