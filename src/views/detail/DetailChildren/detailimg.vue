<template>
  <div class="detailimg">
    <div class="imgitem" v-for="(item,index) in detailInfo" :key="index">
      <img :src="item" @load="deimgload" />
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailImg",
  data() {
    return {
      count: 0
    };
  },
  props: {
    detailInfo: {
      type: Array,
      default() {
        return [];
      }
    }
  },

  methods: {
    deimgload() {
      if (++this.count === this.detailInfo.length) {
        this.$emit("imgloads");
      }
    }
  }
};
</script>

<style scoped>
.imgitem {
  padding: 0px auto;
}
.detailimg img {
  width: 96%;
  margin: 8px;
}
</style>