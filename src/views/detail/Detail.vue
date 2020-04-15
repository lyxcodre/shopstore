<template>
  <div class="detail" id="detail">
    <detail-bar @clickto="clickto" ref="nav"></detail-bar>
    <bscroll
      class="detailscroll"
      :prope-type="3"
      @scroll="scrollPre"
      :pull-up-load="true"
      ref="bscrollde"
    >
      <detail-swiper :detailList="detailList"></detail-swiper>
      <detail-title :goods="goods"></detail-title>
      <detail-shop :shop="shop" ref="shop"></detail-shop>
      <detail-img :detailInfo="detailInfo" @imgloads="imgloads" ref="img"></detail-img>
    </bscroll>
    <alert :massege="alert" :isshow="tisshow" class="addcarttitle"></alert>

    <detail-barm class="conbar" @addcarclick="addcarclick" @gotocar="gotocart"></detail-barm>
  </div>
</template>

<script>
import DetailBar from "./DetailChildren/detaiTar.vue";
import { getDetailiid, Goods, Shop } from "./detail.js";
import bscroll from "components/BScroll/scroll.vue";
import DetailSwiper from "./swiper/detailSwiper.vue";
import DetailTitle from "./DetailChildren/detailTitle.vue";
import DetailShop from "./DetailChildren/detailShop.vue";
import DetailImg from "./DetailChildren/detailimg.vue";
import DetailBarm from "./DetailChildren/detailBar.vue";
import alert from "./DetailChildren/alert.vue";
import store from "@/store/index.js";
export default {
  name: "detail",
  data() {
    return {
      iid: null,
      detailList: [],
      goods: {},
      shop: {},
      detailInfo: [],
      clicktos: [],
      toimgtop: null,
      tisshow: false,
      alert: " "
    };
  },
  components: {
    DetailBar,
    bscroll,
    DetailSwiper,
    DetailTitle,
    DetailShop,
    DetailImg,
    DetailBarm,
    alert
  },
  created() {
    this.iid = this.$route.params.iid;
    getDetailiid(this.iid).then(res => {
      // console.log(res);

      this.detailList = res.result.itemInfo.topImages;

      this.goods = new Goods(
        res.result.itemInfo,
        res.result.columns,
        res.result.shopInfo.services
      );

      this.shop = new Shop(res.result.shopInfo);

      this.detailInfo = res.result.detailInfo.detailImage[0].list;
      // console.log(this.detailInfo);

      this.toimgtop = this.debounce(() => {
        this.clicktos = [];
        this.clicktos.push(0);
        this.clicktos.push(this.$refs.shop.$el.offsetTop);
        this.clicktos.push(this.$refs.img.$el.offsetTop);
        this.clicktos.push(1100);
      }, 150);
    });
  },

  methods: {
    imgloads() {
      this.$refs.bscrollde.refresh();
      this.toimgtop();
    },
    clickto(index) {
      this.$refs.bscrollde.scrollTo(0, -this.clicktos[index], 150);
      // console.log(this.clicktos[index]);
    },
    debounce(func, delay) {
      let timer = null;
      return function(...args) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
          func.apply(this, args);
        }, delay);
      };
    },
    scrollPre(position) {
      // console.log(position);
      // console.log(position.y);
      for (let i = 0; i < this.clicktos.length; i++) {
        if (-position.y >= this.clicktos[i]) {
          this.$refs.nav.isshow = i;
        }
      }
    },
    addcarclick() {
      const goodsList = {};
      goodsList.title = this.goods.title;
      goodsList.img = this.detailInfo[0];
      goodsList.realPrice = this.goods.newPrice;
      goodsList.lowPrice = this.goods.realPrice;
      goodsList.iid = this.iid;

      this.$store.dispatch("addCar", goodsList).then(res => {
        this.alert = res;

        this.tisshow = true;
        setTimeout(() => {
          this.alert = " ";
          this.tisshow = false;
        }, 3000);
      });
    },
    gotocart() {
      this.$router.replace("/vip");
    }
  }
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.detail {
  position: relative;
  height: 100vh;
}
.detailscroll {
  overflow: hidden;
  /* height: calc(100% - 96px); */
  /* margin-bottom: 92px; */
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.conbar {
  position: fixed;
  z-index: 9;
  background-color: #fff;
  left: 0;
  right: 0;
  bottom: 0;
}
.addcarttitle {
  position: fixed;
  top: 40vh;
  left: 0px;
  right: 0px;
  height: 30px;
}
</style>