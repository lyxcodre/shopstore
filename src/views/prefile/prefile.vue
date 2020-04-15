<template>
  <div>
    <topbar class="prefile">
      <div slot="center">我的</div>
    </topbar>
  </div>
</template>
<script>
import topbar from "@/components/hearth/topbar.vue";
export default {
  name: "Prefile",
  components: {
    topbar
  }
};
</script>

<style scoped>
.prefile {
  text-align: center;
  font-size: 24px;
  color: white;
  background-color: rgb(248, 171, 171);
}
</style>