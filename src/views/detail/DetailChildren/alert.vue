<template>
  <div v-show="isshow">
    <span>{{massege}}</span>
  </div>
</template>

<script>
export default {
  name: "alert",
  props: {
    massege: {
      type: String,
      default: ""
    },
    isshow: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
.addcarttitle span {
  display: block;
  margin: 0px auto;
  width: 150px;
  height: 26px;
  padding: 1px 10px;
  text-align: center;
  line-height: 26px;
  border-radius: 15px;

  background-color: rgba(87, 87, 87, 0.8);
  font-size: 16px;
}
</style>