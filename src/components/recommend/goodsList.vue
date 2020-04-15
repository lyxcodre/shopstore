<template>
  <div class="goods">
    <goods-list-item v-for="(item,index) in goods" :key="index" :goodsitem="item">
      <img src alt srcset />
      <p></p>
      <span></span>
    </goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from "./goodsListitem";
export default {
  name: "goodsList",
  props: {
    goods: {
      type: Array,
      default: []
    }
  },
  components: {
    GoodsListItem
  }
};
</script>

<style scoped>
.goods {
  display: flex;
  flex-flow: wrap;
  justify-content: space-around;
}
</style>