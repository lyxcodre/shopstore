<template>
  <div>
    <topbar>
      <div slot="left" class="back" @click="goback">
        <img src="~assets/img/icon/arrow-lift.svg" />
      </div>
      <div slot="center" class="detailbar">
        <div
          class="detailitem"
          v-for="(item,index) in titles"
          :key="index"
          :class="{active:isshow === index}"
          @click="clickRed(index)"
        >{{item}}</div>
      </div>
    </topbar>
  </div>
</template>

<script>
import topbar from "components/hearth/topbar.vue";
export default {
  name: "DetailTar",
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      isshow: 0
    };
  },

  components: {
    topbar
  },
  methods: {
    clickRed(index) {
      this.isshow = index;
      this.$emit("clickto", index);
    },
    goback() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.detailbar {
  display: flex;
  text-align: center;
  font-size: 16px;
}
.detailitem {
  flex: 1;
}
.active {
  color: rgb(247, 80, 80);
}
.back img {
  width: 40px;
  height: 40px;
  margin-left: 6px;
  margin-top: 4px;
}
</style>