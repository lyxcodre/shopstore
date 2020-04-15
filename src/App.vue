<template>
  <div id="app">
    <keep-alive exclude="detail">
      <router-view></router-view>
    </keep-alive>
    <tabbar>
      <TabbarItem path="/serch">
        <img src="~assets/img/chaxun.svg" slot="tabbaricon" alt />
        <img src="~assets/img/chaxun_red.svg" slot="tabbaricona" alt />
        <div slot="tabbartext">搜索</div>
      </TabbarItem>
      <TabbarItem path="/fenlei">
        <img src="./assets/img/quanbudingdan.svg" slot="tabbaricon" alt />
        <img src="./assets/img/quanbudingdan_red.svg" slot="tabbaricona" alt />
        <div slot="tabbartext">分类</div>
      </TabbarItem>
      <TabbarItem path="/vip">
        <img src="./assets/img/vip.svg" slot="tabbaricon" alt />
        <img src="./assets/img/vip_red.svg" slot="tabbaricona" alt />
        <div slot="tabbartext">购物车</div>
      </TabbarItem>
      <TabbarItem path="/kefu">
        <img src="./assets/img/kefu.svg" slot="tabbaricon" alt />
        <img src="./assets/img/kefu_red.svg" slot="tabbaricona" alt />
        <div slot="tabbartext">客服</div>
      </TabbarItem>
      <TabbarItem path="/prefile">
        <img src="./assets/img/one.svg" slot="tabbaricon" alt />
        <img src="./assets/img/one_red.svg" slot="tabbaricona" alt />
        <div slot="tabbartext">我的</div>
      </TabbarItem>
    </tabbar>
  </div>
</template>
<script>
import "normalize.css";
import Tabbar from "components/tabbar/tabbar-h.vue";
import TabbarItem from "components/tabbar/tabbar-item.vue";

export default {
  name: "App",
  components: {
    Tabbar,
    TabbarItem
  },
  mounted() {
    function mytest() {
      this.p.pid++;
    }
    mytest.prototype.p = { pid: 0 };
    mytest.prototype.getnum = function(num) {
      return this.p.pid + num;
    };
    var obj1 = new mytest();
    var obj2 = new mytest();
    console.log(obj1.getnum(1) + obj2.getnum(2)); //1+2+1+3
  }
};
</script>
<style>
@import "assets/css/base.css";
</style>
