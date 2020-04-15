<template>
  <div id="fen">
    <topbar class="fenlei">
      <div slot="center">分类</div>
    </topbar>
    <feature
      :features="['精选','新款','流行']"
      @clickList="clickList"
      ref="feature1"
      class="feature"
      v-show="isShow"
    ></feature>
    <bscroll
      class="content"
      ref="bscroll"
      :prope-type="3"
      @scroll="scrollprope"
      @pullingUp="pullupload"
      :pull-up-load="true"
    >
      <swiper :banners="banners" class="banner" @swiperImageLoad="swiperImageLoad"></swiper>
      <recommend :recommends="recommends"></recommend>
      <div id="yys">
        <img src="~assets/img/阴阳师3.jpg" />
      </div>
      <feature :features="['精选','新款','流行']" @clickList="clickList" ref="feature" class="feature"></feature>
      <goods-list :goods="goods[currentType].list"></goods-list>
    </bscroll>
    <icon @click.native="totopclick" v-show="showicon"></icon>
  </div>
</template>

<script>
import topbar from "components/hearth/topbar.vue";
// import Swiper from "swiper";
// import "components/swiper/swiper.min.css";
import {
  getFenleiMultidata,
  getFenleiGoodsdata
} from "components/network/fenlei.js";
import swiper from "components/swiper/swiper.vue";
import recommend from "components/recommend/recommend.vue";
import feature from "components/recommend/feature.vue";
import GoodsList from "components/recommend/goodsList.vue";
import bscroll from "components/BScroll/scroll.vue";
import icon from "components/BScroll/toTop.vue";
export default {
  name: "Fenlei",
  components: {
    topbar,
    swiper,
    recommend,
    feature,
    bscroll,
    icon,
    GoodsList
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      showicon: false,
      currentType: "pop",
      offsetTop: 0,
      isShow: false,
      saveY: 0
    };
  },
  activated() {
    this.$refs.bscroll.scrollTo(0, this.saveY, 5);
    this.$refs.bscroll.refresh();
  },
  deactivated() {
    this.saveY = this.$refs.bscroll.getScrolly();
    // console.log(this.saveY);
  },
  created() {
    this.getFenleiMultidata();

    this.getFenleiGoodsdata("pop");
    this.getFenleiGoodsdata("new");
    this.getFenleiGoodsdata("sell");
  },
  mounted() {
    const refresh = this.debounce(this.$refs.bscroll.refresh, 200);
    this.$bus.$on("itemimageload", () => {
      // console.log("-------");
      // this.$refs.bscroll.refresh();
      refresh();
    });
  },
  methods: {
    clickList(index) {
      // console.log(index);
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;

        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
      }
      this.$refs.feature1.count = index;
      this.$refs.feature.count = index;
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
    getFenleiMultidata() {
      getFenleiMultidata().then(res => {
        // console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getFenleiGoodsdata(type) {
      const page = this.goods[type].page + 1;
      getFenleiGoodsdata(type, page).then(res => {
        // console.log(res);

        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += page;

        this.$refs.bscroll.Scroll.finishPullUp();
      });
    },
    totopclick() {
      this.$refs.bscroll.scrollTo(0, 0, 600);
    },
    scrollprope(position) {
      // console.log(position);
      if (position.y > -200) {
        this.showicon = false;
      } else {
        this.showicon = true;
      }

      // if (-position.y >= this.offsetTop) {
      //   this.isShow = true;
      // } else {
      //   this.isShow = false;
      // }
      this.isShow = -position.y >= this.offsetTop;
    },
    pullupload() {
      this.getFenleiGoodsdata(this.currentType);
    },
    swiperImageLoad() {
      this.offsetTop = this.$refs.feature.$el.offsetTop;
    }
  }
};
</script>
<style scoped>
#fen {
  /* overflow: hidden; */
  position: relative;
  height: 100vh;
  /* padding-top: 44px;
  padding-bottom: 49px; */
}
.fenlei {
  text-align: center;
  font-size: 24px;
  color: white;
  background-color: rgb(248, 171, 171);
  /* position: fixed;
  top: 0px;
  left: 0;
  right: 0; */
}

#yys {
  width: 100%;
}
#yys img {
  width: 100%;
}

.content {
  overflow: hidden;
  /* height: calc(100% - 96px); */
  /* margin-bottom: 92px; */
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.feature {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
</style>