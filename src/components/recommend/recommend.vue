<template>
  <div class="recommend">
    <div v-for="(item,index) in recommends" :key="index" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt />
      </a>
      <div class="re-title">{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "recommend",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style>
.recommend {
  display: flex;
  width: 100%;
  text-align: center;
  margin-bottom: 10px;
  margin-top: 10px;
  background-color: rgb(241, 241, 241);
  padding-bottom: 15px;
}
.recommend-item {
  flex: 1;
  font-size: 14px;
  background-color: #fff;
}
.recommend-item img {
  width: 66px;
  height: 66px;
}
.recommend-item .re-title {
  margin: 8px 0 5px;
}
</style>