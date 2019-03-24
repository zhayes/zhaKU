<template>
  <div class="cascader-list">
    <div class="left" @click.stop>
      <div
        v-for="item in data"
        :key="item[valueKey]"
        :class="{'items': true , 'item-disabled': item.disabled, 'item-active': (currentItem && currentItem[valueKey]===item[valueKey]) }"
        @click.stop="selectedHandle(item)"
      >
        <span class="cascader-content">{{item[labelKey]}}</span>
        <z-icon v-show="item[childrenKey] && item[childrenKey].length" name="right" class="arrow"/>
      </div>
    </div>
    <div class="right" v-if="selectedChildrenData && selectedChildrenData.length">
      <cascader-list :index="num" :data="selectedChildrenData"/>
    </div>
  </div>
</template>
<script>
import Icon from "../icon/icon.vue";

export default {
  name: "cascaderList",
  data() {
    return {
      num: this.index,
      currentItem: null,
      selectedChildrenData: []
    };
  },
  components: {
    "z-icon": Icon
  },
  inject: ["eventBus", "divisionSymbol", "valueKey", "childrenKey", "labelKey"],
  props: {
    index: {
      type: Number,
      default: 0
    },
    data: {
      type: Array,
      default: () => []
    }
  },
  created() {
    this.num += 1;
    this.eventBus.$on("update:change", items => {
      this.currentItem = items[this.index];

      this.selectedChildrenData = this.currentItem
        ? this.currentItem[this.childrenKey]
        : [];
    });
  },
  watch: {
    data(data) {
      this.selectedChildrenData = [];
    }
  },
  methods: {
    selectedHandle(item) {
      if (item.disabled) return;

      this.selectedChildrenData = item[this.childrenKey];

      this.eventBus.$emit("update:select", this.index, item);
    }
  },
  mounted() {
    this.eventBus.$emit("update:mounted");
  }
};
</script>
<style lang="scss" scoped>
.items {
  display: flex;
  flex-flow: nowrap;
  width: 100px;
  align-items: center;
  .cascader-content {
    flex: 1;
  }

  .cascader-content {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  line-height: 1.5em;
  padding: 0 0.4em;
  cursor: pointer;
  &:hover {
    background-color: #eaeaea;
  }
}

.item-active {
  background-color: #999 !important;
}

.cascader-list {
  display: flex;
  height: 200px;
  background-color: #fff;

  .left {
    flex: 1;
    overflow-y: auto;
    .items {
      @extend .items;
    }

    .item-disabled {
      color: #999;
      fill: #999;
      cursor: not-allowed;
    }
  }
  .right {
    flex: 1;
    border-left: 1px solid #eaeaea;

    .items {
      @extend .items;
    }
  }
}
</style>
