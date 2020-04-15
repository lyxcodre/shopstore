<template>
  <div>
    <topbar class="kefu">
      <div slot="center">
        客服
        <img src="~assets/img/kefu.svg" width="24px" height="24px" />
      </div>
    </topbar>
  </div>
</template>
<script>
import topbar from "@/components/hearth/topbar.vue";
export default {
  name: "Kefu",
  components: {
    topbar
  }
};
</script>
<style scoped>
.kefu {
  position: relative;
  text-align: center;
  font-size: 24px;
  color: white;
  background-color: rgb(248, 171, 171);
}
.kefu img {
  position: absolute;
  top: 13px;
}
</style>