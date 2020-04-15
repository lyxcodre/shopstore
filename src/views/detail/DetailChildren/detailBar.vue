<template>
  <div class="con">
    <div class="icon">
      <div class="box">
        <img src="~assets/img/kefu.svg" alt />
        <p>
          <span>联系客服</span>
        </p>
      </div>
      <div class="box">
        <img src="~assets/img/icon/store.svg" alt />
        <p>
          <span>店铺</span>
        </p>
      </div>
      <div class="box">
        <img src="~assets/img/icon/cart-full.svg" @click="gotocar" alt />
        <p>
          <span>购物车</span>
        </p>
      </div>
    </div>
    <div class="shopcar">
      <div id="shopcar" @click="addcarclick">加入购物车</div>
    </div>
    <div class="buy">
      <div id="buy">立即购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBar",
  data() {
    return {};
  },
  methods: {
    addcarclick() {
      this.$emit("addcarclick");
    },
    gotocar() {
      this.$emit("gotocar");
    }
  }
};
</script>

<style scoped>
.con {
  height: 49px;
  display: flex;
}
.icon {
  display: flex;
  flex: 1.5;
}
.icon .box {
  flex: 1;
  text-align: center;
}
.icon img {
  width: 25px;
  height: 25px;
}
.shopcar {
  flex: 1;
}
#shopcar {
  width: 105px;
  height: 43px;
  margin: 3px;
  background-color: rgb(230, 25, 25);
  border-radius: 20px;
  color: white;
  font-size: 16px;
  text-align: center;
  line-height: 43px;
}
.buy {
  flex: 1;
}
#buy {
  width: 105px;
  height: 43px;
  margin: 3px;
  background-color: rgb(238, 162, 48);
  border-radius: 20px;
  color: white;
  font-size: 16px;
  text-align: center;
  line-height: 43px;
}
</style>