<template>
  <div v-if="Object.keys(goods).length != 0">
    <div class="title">
      <span>{{goods.title}}</span>
    </div>
    <div class="prices">
      <span class="newPrices">{{goods.newPrice}}</span>
      <span class="oldPrices">{{goods.oldPrice}}</span>
      <span class="discount">{{goods.discount}}</span>
    </div>
    <div class="columns">
      <span class="column">{{goods.columns[0]}}</span>
      <span class="column">{{goods.columns[1]}}</span>
      <span class="column">{{goods.columns[2]}}</span>
    </div>
    <div class="services">
      <span>
        <img :src="goods.services[0].icon" alt />
        {{goods.services[0].name}}
      </span>
      <span class>
        <img :src="goods.services[1].icon" alt />
        {{goods.services[1].name}}
      </span>
      <span class>
        <img :src="goods.services[2].icon" alt />
        {{goods.services[2].name}}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailTitle",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style scoped>
.title {
  font-size: 18px;
  padding: 7px;
}
.prices {
  height: 22px;
  line-height: 22px;
  padding: 10px 7px 18px 6px;
}
.prices span {
  margin: 0 4px 0;
}
.prices .newPrices {
  color: rgb(224, 54, 54);
  font-size: 22px;
}
.prices .oldPrices {
  font-size: 13px;
  text-decoration: line-through;
}
.prices .discount {
  border-radius: 10%;
  background-color: rgb(255, 130, 130);
  padding: 3px;
  color: white;
  font-size: 14px;
}
.columns {
  display: flex;
  font-size: 15px;
  color: rgb(172, 172, 172);
  margin-left: 7px;
  box-shadow: 0px 2px 1px 1px rgba(218, 216, 216, 0.5);
  padding-bottom: 6px;
}
.columns .column {
  flex: 1;
}
.columns .column:nth-child(2) {
  text-align: center;
}
.columns .column:last-child {
  text-align: right;
  padding-right: 10px;
}
.services {
  height: 30px;
  line-height: 30px;
  font-size: 15px;
  display: flex;
  padding: 17px 0px;
  box-shadow: 0px 2px 2px 2px rgba(218, 216, 216, 0.5);
}
.services span {
  flex: 1;
  margin-left: 2px;
  /* position: relative; */
  padding-left: 6px;
}
.services span:nth-child(2) {
  text-align: center;
}
.services span:last-child {
  text-align: right;
  padding-right: 7px;
}
.services span img {
  width: 16px;
  height: 16px;
  /* position: absolute;
  top: 4px;
  left: 6px; */
  margin-top: 7px;
}
</style>