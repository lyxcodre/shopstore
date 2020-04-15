<template>
  <div class="car">
    <topbar class="vip">
      <div slot="center">购物车({{countGoods}})</div>
    </topbar>
    <bscroll class="vipscroll" :prope-type="3" :pull-up-load="true">
      <div>
        <ul>
          <li class="cart" v-for="(item,inde) in $store.state.cartList" :key="inde">
            <div class="carImage">
              <img :src="item.img" alt />
            </div>
            <div class="carp">
              <p class="carTitle">{{item.title}}</p>
              <p class="carPrice">
                <span>价格:￥{{item.lowPrice}}</span>
              </p>
              <p class="carCount">
                <span>数量:{{item.count}}</span>
                <span class="dagou" @click="dagouclick(inde)" :class="{active:item.isgou}"></span>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </bscroll>
    <div class="allsum">
      总计：￥{{allmany}}
      <input type="submit" value="提交" class="submit" />
    </div>
  </div>
</template>
<script>
import topbar from "components/hearth/topbar.vue";
import bscroll from "components/BScroll/scroll.vue";
import store from "@/store/index.js";
export default {
  name: "Vip",
  components: {
    topbar,
    bscroll
  },

  computed: {
    countGoods() {
      return this.$store.state.cartList.length;
    },
    allmany() {
      return this.$store.state.cartList
        .filter(item => {
          return item.isgou;
        })
        .reduce((preValue, item) => {
          return preValue + item.lowPrice * item.count;
        }, 0)
        .toFixed(2);
    }
  },
  methods: {
    dagouclick(inde) {
      this.$store.state.cartList[inde].isgou = !this.$store.state.cartList[inde]
        .isgou;
    }
  }
};
</script>
<style scoped>
.vip {
  text-align: center;
  font-size: 24px;
  color: white;
  background-color: rgb(248, 171, 171);
}
.cart {
  height: 120px;
  margin: 10px auto;
  box-shadow: 0px 1px 2px 4px rgba(231, 231, 231, 0.7);
  display: flex;
  padding-top: 5px;
}
.carImage {
  flex: 1;
  padding: 0 5px;
  border: 1px solid rgb(218, 218, 218);
  margin: 3px;
  border-radius: 8px;
}
.carImage img {
  width: 90px;
  height: 100px;
}
.carp {
  flex: 3;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.carp p {
  flex: 1;
  padding-left: 4px;
  line-height: 100%;
  padding-top: 5px;
}
.carPrice {
  color: red;
  font-size: 16px;
}
.car {
  height: 100vh;
  position: relative;
}
.carTitle {
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.vipscroll {
  overflow: hidden;
  /* height: calc(100% - 96px); */
  /* margin-bottom: 92px; */
  position: absolute;
  top: 44px;
  bottom: 89px;
  left: 0;
  right: 0;
}
.allsum {
  height: 40px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 49px;
  line-height: 40px;
  padding-right: 20px;
  font-size: 16px;
}
.submit {
  background-color: red;
  color: white;
  float: right;
  width: 60px;
  height: 30px;
  outline: none;
  border: 1px solid rgb(248, 171, 171);
  font-size: 16px;
  border-radius: 20px;
}

.dagou {
  display: block;
  width: 12px;
  height: 12px;
  border: 1px solid rgba(245, 245, 245, 0.7);
  margin-top: 4px;
  margin-right: 16px;
  float: right;
}
.active {
  background-color: rgb(253, 28, 28);
}
</style>