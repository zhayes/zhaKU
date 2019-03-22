<template>
    <svg :class='{"z-icon": true, "z-icon-spinning": spinning}'  @click="$emit('click', $event)" >
        <use :xlink:href="`#icon-${name}`"></use>
    </svg>
</template>
<script>
import "./svg.js"
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
  .z-icon {
      width: 1em; 
      height: 1em; 
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