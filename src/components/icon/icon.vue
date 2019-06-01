<template>
    <i :class='{"z-icon": true, "iconfont": true, [`icon-${name}`]: true,  "z-icon-spinning": spinning}' ></i>
</template>
<script>
//import "./svg.js";

export default {
    name: "z-icon",
    props:{
        name:{
            type: String
        },
        spinning:{
            type: Boolean,
            default: false
        }
    }
}
</script>
<style lang="scss" scoped>
@import url("//at.alicdn.com/t/font_1050742_77sjfjfvorf.css");

.z-icon {
    display: inline-flex;
    width: 1em;
    height: 1em;
    align-items: center;
    font-size: 1em;
    &:before{
        display: inline-flex;
        align-items: center;
        line-height: 1em;
    }
}
  @keyframes spinnig {
      0%{
          transform: rotate(0deg)
      }
      100%{
          transform: rotate(360deg)
      }
  }
  .z-icon-spinning {
      animation: spinnig 1s linear infinite;
  }
</style>