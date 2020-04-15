<template>
  <div id="tabbar-h">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "Tabbar-h",
  components: {}
};
</script>
<style>
#tabbar-h {
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  height: 49px;
  background-color: rgb(235, 235, 235);
  text-align: center;
  font-size: 16px;
}
</style>
