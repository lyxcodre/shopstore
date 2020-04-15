<template>
  <div>
    <topbar class="search">
      <img slot="left" src="~assets/img/chaxun.svg" alt="search" id="l_search" />
      <input slot="center" type="search" name="search" id="search" />
      <button slot="right" id="r_button">搜索</button>
    </topbar>
  </div>
</template>
<script>
import topbar from "components/hearth/topbar.vue";
export default {
  name: "Serch",
  components: {
    topbar
  }
};
</script>

<style scoped>
.search {
  background-color: rgb(248, 171, 171);
}
#search {
  height: 26px;
  width: 100%;
  font-size: 18px;
}
#r_button {
  height: 26px;
  width: 38px;
  margin-left: 10px;
  font-size: 14px;
}
#l_search {
  width: 28px;
  height: 28px;
  margin: 10px 0px 0px 14px;
}
</style>