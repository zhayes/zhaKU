<template>
    <svg class="z-icon"  @click="$emit('click', $event)">
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
        }
    }
}
</script>
<style lang="scss" scoped>
  .z-icon {width: 1em; height: 1em; }
</style>