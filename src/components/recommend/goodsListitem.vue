<template>
  <div class="gooditem" @click="clickList">
    <img v-lazy="goodsitem.show.img" @load="imageload" />
    <div class="goodinfo">
      <p>{{goodsitem.title}}</p>
      <span class="price">{{goodsitem.price}}</span>
      <span>{{goodsitem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "goodsListitem",
  props: {
    goodsitem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    imageload() {
      this.$bus.$emit("itemimageload");
    },
    clickList() {
      this.$router.push("/detail/" + this.goodsitem.iid);
    }
  }
};
</script>

<style scoped>
.gooditem {
  position: relative;
  padding-bottom: 40px;
  padding-top: 5px;
  width: 48%;
}
.gooditem img {
  width: 100%;
  border-radius: 5%;
}
.goodinfo {
  font-size: 14px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}
.goodinfo p {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin-bottom: 3px;
}
.goodinfo .price {
  color: brown;
}
</style>