<template>
  <div v-if="show" :class="{'z-picker-model': showModel}" @click.stop="clickModel">
    <div class="z-picker-wrapper" ref="picker" @click.stop>
      <div class="title">
        <div @click="cnacel" style="fontWeight:600">取消</div>
        <div style="color:#333">{{title}}</div>
        <div @click="confirm" style="fontWeight:600">确定</div>
      </div>
      <div class="scroll">
        <div class="pciker-item" :key="i" v-for="(value, i) in values">
          <picker-item
            :data="pickerItemDatas[i]"
            :value="value"
            :valueKey="valueKey"
            :labelKey="labelKey"
            :disabled="disabled[i]"
            @beforeScrollStart="beforeScrollStart"
            @change="pickerChange(i, $event)"
          ></picker-item>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import pickerItem from "./picker-item.vue";

export default {
  name: "Picker",
  data() {
    return {
      values: [...this.value],
      show: this.visible,
      pickerItemDatas: [],
      disabled: [false, false, false]
    };
  },
  components: {
    "picker-item": pickerItem
  },
  props: {
    data: {
      type: Array,
      default: () => []
    },
    visible: {
      type: Boolean,
      default: false
    },
    value: {
      type: Array,
      default: () => []
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
    title: {
      type: String
    },
    showModel: {
      type: Boolean,
      default: true
    },
    maskClosable: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    cnacel() {
      this.$emit("cancel");
    },
    confirm() {
      const items = [];

      this.pickerItemDatas.map(item => {
        item.map(obj => {
          this.values.map(value => {
            if (obj[this.valueKey] === value) {
              items.push(obj);
            }
          });
        });
      });

      this.$emit("confirm", this.values, items);
    },
    clickModel(){
      this.maskClosable && this.cnacel();
    },
    pickerChange(i, item) {
      //当滑动的picker改变的时候，将所选中的当前项的子集数据设置为下一个picker组件的data数据，以此类推
      //并且默认选中下一项数据的第一项。

      this.values.map((value, index) => {
        if (index != i) {
          this.disabled[index] = false;
        }
      });
      this.disabled = [...this.disabled];

      if (!item) return;
      this.$set(this.values, i, item[this.valueKey]);

      if (i != this.values.length - 1) {
        this.$set(this.pickerItemDatas, i + 1, item[this.childrenKey]);

        this.$set(
          this.values,
          i + 1,
          this.pickerItemDatas[i + 1][0][this.valueKey]
        );

        for (let index = i + 2; index < this.pickerItemDatas.length; index++) {
          this.$set(
            this.pickerItemDatas,
            index,
            this.pickerItemDatas[index - 1][0][this.childrenKey]
          );
          this.$set(
            this.values,
            index,
            this.pickerItemDatas[index][0][this.valueKey]
          );
        }
      }
    },
    beforeScrollStart(scroll, vue) {
      const index = this.values.indexOf(vue.value);

      this.values.map((value, i) => {
        i != index && (this.disabled[i] = true);
      });

      this.disabled = [...this.disabled];
    },
    getSelectedItemsByData(data = this.data, i = -1, initItems = []) {
      const values = this.values;

      let index = ++i;

      const value = values[index];

      for (let i = 0; i < data.length; i++) {
        if (!value) {
          initItems.push(data[0]);

          data[i][this.childrenKey] &&
            data[i][this.childrenKey].length &&
            this.getSelectedItemsByData(
              data[i][this.childrenKey],
              index,
              initItems
            );

          return initItems;
        } else {
          if (data[i][this.valueKey] === value) {
            initItems.push(data[i]);
            data[i][this.childrenKey] &&
              data[i][this.childrenKey].length &&
              this.getSelectedItemsByData(
                data[i][this.childrenKey],
                index,
                initItems
              );
            return initItems;
          }
        }
      }
      return initItems;
    },
    setPickerData() {
      const initItems = this.getSelectedItemsByData();

      initItems.map((item, i) => {
        this.pickerItemDatas[i] =
          i === 0 ? this.data : initItems[i - 1][this.childrenKey];

        this.values[i] = item[this.valueKey];
      });
    }
  },
  watch: {
    value(newValues) {
      this.values = [...newValues];
      this.setPickerData();
    },
    visible(visible) {
      this.values = [...this.value];
      this.setPickerData();
      if (!this.values.length) {
        this.pickerItemDatas.map((item, i) => {
          const value = item[this.valueKey];
          this.values[i] = value;
        });
      }
      this.show = visible;
    }
  }
};
</script>
<style lang="scss" scoped>
.z-picker-model {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba($color: #000, $alpha: 0.4);
  z-index: 90;
  overflow: hidden;
}

.z-picker-wrapper {
  position: fixed;
  width: 100%;
  left: 0px;
  bottom: 0;
  z-index: 10;
  background-color: #fff;
  box-shadow: 0px 5px 30px 1px #999;
  overflow: hidden;
}
.scroll {
  display: flex;
  background-color: #eaeaea;
  position: relative;
  background-color: #eaeaea;
  height: 280px;
  overflow: hidden;

  .pciker-item {
    flex: 1;
    position: relative;
  }
}

.title {
  padding: 0.5em 0.5em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 1px 20px -10px #2196f3;
  border-bottom: 1px solid #ccc;
  color: #1a73e8;
}
</style>