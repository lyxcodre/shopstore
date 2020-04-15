<template>
  <div v-if="Object.keys(shop).length !== 0">
    <div class="shopname">
      <div>
        <img :src="shop.logo" alt />
      </div>
      <div>
        <span>{{shop.name}}</span>
      </div>
    </div>
    <div class="sell">
      <div class="sells">
        <p>{{shop.sells}}</p>
        <span>总销量</span>
      </div>
      <div class="goods">
        <p>{{shop.goodsCount}}</p>
        <span>商品数</span>
      </div>
      <div class="speak">
        <ul>
          <li class="scorename">
            <span>{{shop.score[0].name+":"}}</span>
            <span class="green" :class="{activer:shop.score[0].isBetter}">{{shop.score[1].score}}</span>
            <span class="greenbgc" :class="{active:shop.score[0].isBetter}">{{isgood.a}}</span>
          </li>
          <li class="scorename">
            <span>{{shop.score[1].name+":"}}</span>
            <span class="green" :class="{activer:shop.score[1].isBetter}">{{shop.score[1].score}}</span>
            <span class="greenbgc" :class="{active:shop.score[1].isBetter}">{{isgood.b}}</span>
          </li>
          <li class="scorename">
            <span>{{shop.score[2].name+":"}}</span>
            <span class="green" :class="{activer:shop.score[2].isBetter}">{{shop.score[2].score}}</span>
            <span class="greenbgc" :class="{active:shop.score[2].isBetter}">{{isgood.c}}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="goinshop">
      <span>进店逛逛</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailShop",
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      isgood: {
        a: "低",
        b: "低",
        c: "低"
      }
    };
  },
  updated() {
    if (this.shop && this.shop.score[0].isBetter) {
      this.isgood.b = "高";
    }
    if (this.shop && this.shop.score[1].isBetter) {
      this.isgood.b = "高";
    }
    if (this.shop && this.shop.score[2].isBetter) {
      this.isgood.c = "高";
    }
  }
};
</script>

<style scoped>
.shopname {
  height: 100px;
  margin-top: 5px;
  text-align: center;
}
.shopname div {
  float: left;
  text-align: center;
  height: 100px;
  line-height: 100px;
  padding-left: 8px;
}
/* .shopimg {
  box-shadow: 50% 50%;
  overflow: hidden;
} */
.shopname img {
  width: 60px;
  height: 60px;
  margin-top: 18px;
  border-radius: 50%;
}
.shopname span {
  padding-left: 10px;
  font-size: 20px;
}
.sell {
  height: 110px;
  display: flex;
  text-align: center;
}
.sells {
  flex: 1;
  font-size: 20px;
}
.sells p {
  margin: 20px auto;
}
.sells span {
  font-size: 16px;
}
.goods {
  flex: 1;
  font-size: 20px;
}
.goods p {
  margin: 20px auto;
}
.goods span {
  font-size: 16px;
}
.speak {
  flex: 2;
  display: flex;
  font-size: 16px;
  padding-left: 40px;
}
.speak ul {
  display: flex;
  flex: 1;
  flex-direction: column;
}
.speak span {
  float: left;
  padding: 2px;
  border-radius: 10%;
  text-align: center;
  line-height: 18px;
  height: 18px;
}
.scorename {
  flex: 1;
}
.scorename span:nth-child(2) {
  text-align: left;
  padding-left: 3px;
  width: 50px;
}
.scorename .active {
  background-color: rgb(255, 36, 36);
  color: white;
}
.scorename .activer {
  color: rgb(255, 36, 36);
}
.green {
  color: green;
}
.greenbgc {
  background-color: green;
  color: white;
}
.goinshop {
  height: 90px;
  text-align: center;
  line-height: 90px;

  box-shadow: 0px 2px 3px 2px rgba(211, 211, 211, 0.5);
}
.goinshop span {
  font-size: 16px;
  padding: 8px 55px;
  background-color: rgb(230, 230, 230);
  color: rgb(70, 70, 70);
  border-radius: 5px;
}
</style>