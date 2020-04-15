<template>
  <div class="totop">
    <img src="~assets/img/icon/rising_red.svg" alt />
  </div>
</template>

<script>
export default {
  name: "toTop"
};
</script>

<style scoped>
.totop {
  position: fixed;
  right: 8px;
  bottom: 56px;
  border-radius: 50% 50%;
  background-color: #fff;
  border: 2px solid rgb(216, 216, 216);
  width: 40px;
  height: 40px;
}
.totop img {
  width: 40px;
  height: 40px;
}
</style>