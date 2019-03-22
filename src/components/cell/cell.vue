<template>
  <div class="z-cell-swrap">
    <div class="z-cell-title">
      {{title}}
      <slot v-if="!title" name="title"></slot>
    </div>
    <div class="z-cell-content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "Cell",
  props: {
    title: {
      type: [String, Number]
    }
  }
};
</script>
<style lang="scss" scoped>
.z-cell-swrap {
  background-image: linear-gradient(
    180deg,
    #d9d9d9,
    #d9d9d9 50%,
    transparent 0
  );
  background-size: 200% 1px;
  background-repeat: no-repeat;
  background-position: -0.5em -0.5em;
  background-origin: content-box;
}

.z-cell-swrap {
  padding: 0.5em 0.5em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
}

.z-cell-title,
.z-cell-content {
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.z-cell-swrap:first-of-type{
  background: none;
}
</style>
