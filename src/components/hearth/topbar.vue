<template>
  <div class="topbar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "topbar"
};
</script>

<style scoped>
.topbar {
  display: flex;
  line-height: 44px;
  height: 44px;
  /* background-color: rgb(245, 158, 158); */
  z-index: 9;
  box-shadow: 0px 1px 4px 2px rgba(175, 175, 175, 0.4);
}
.left,
.right {
  width: 60px;
}
.center {
  flex: 1;
}
</style>