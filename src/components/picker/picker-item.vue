<template>
  <div class="z-item-wrapper" ref="wrapper" :style="`color: ${disabled ? '#aaa':'#333'}`">
    <div class="z-item-content">
      <div class="z-item" :key="item[valueKey]" v-for="item in items">{{item[labelKey]}}</div>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";

export default {
  name: "Picker",
  data() {
    return {
      items: this.data,
      show: this.visible,
      selectedIndex: 0
    };
  },
  props: {
    index: {
      type: Number
    },
    data: {
      type: Array,
      default: () => []
    },
    value: {
      type: [String, Number]
    },
    valueKey: {
      type: String,
      default: "id"
    },
    labelKey: {
      type: String,
      default: "name"
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    data(data) {
      this.items = data;
      this.$nextTick(() => {
        if (this.scroll) {
          this.scroll.refresh();
          this.scroll.wheelTo(0);
        } else {
          this.scroll = this.createScroll();
        }
      });
    },
    value(value) {
      this.$nextTick(() => {
        this.scroll.refresh();
        this.setSelectedIndex(value);
      });
    },
    disabled(value){
      if(value){
        this.scroll.disable();
      }else{
        this.scroll.enable()
      }
    }
  },
  methods: {
    setSelectedIndex(value=this.value) {
      for (let i = 0; i < this.data.length; i++) {
        if (this.data[i][this.valueKey] === value) {
          this.selectedIndex = i;
          return;
        }
      }

      this.selectedIndex = undefined;
    },
    createScroll() {
      const scroll = new BScroll(this.$refs.wrapper, {
        wheel: {
          selectedIndex: this.selectedIndex
        },
        probeType: 3,
        deceleration:0.002,
        scrollY: true,
        rotare: 6,
        zoom: true,
        bindToWrapper: true
      });

      scroll.on("beforeScrollStart", ()=>{
        this.$emit("beforeScrollStart", scroll, this);
      })

      scroll.on("scrollEnd", () => {
        const index = this.scroll.getSelectedIndex();
        this.selectedIndex = index;
       
        this.$emit("change", this.data[this.selectedIndex]);
      });

      return scroll;
    }
  },
  mounted() {
    this.setSelectedIndex();

    this.$nextTick(() => {
      if (this.scroll) {
        this.scroll.refresh();
      } else {
        this.scroll = this.createScroll();
      }
    });
  }
};
</script>
<style lang="scss" scoped>
.z-item-wrapper {
  height: 40px;
  width: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  margin: auto;
  background-color: #fff;
  text-align: center;

  .z-item-content {
    .z-item {
      line-height: 40px;
      background: transparent;
      font-size: 14px;
      font-weight: 600;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  &:before {
    content: "";
    position: absolute;
    top: -120px;
    bottom: 40px;
    left: 0;
    right: 0;
    background: rgba($color: #fff, $alpha: 0.6);
    z-index: 1;
  }

  &:after {
    content: "";
    position: absolute;
    top: 40px;
    bottom: -120px;
    left: 0;
    right: 0;
    background: rgba($color: #fff, $alpha: 0.6);
    z-index: 1;
  }
}
</style>

