<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item,index) in detailList" :key="index">
        <a>
          <img :src="item" />
        </a>

        <!--<img src="../../assets/01.jpg"/>-->
      </div>
    </div>
    <div class="swiper-pagination swiper-pagination-white"></div>
  </div>
</template>

<script>
import "components/swiper/swiper.min.css";
import Swiper from "swiper";
export default {
  name: "DetailSwiper",
  props: {
    detailList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  mounted() {
    setTimeout(() => {
      const deswiper = new Swiper(".swiper-container", {
        direction: "horizontal",
        loop: false,
        autoplay: false,
        // autoplay: {
        //   disableOnInteraction: false
        // },
        pagination: {
          el: ".swiper-pagination"
        }
      });
    }, 200);
  }
};
</script>

<style scoped>
.swiper-container {
  width: 100%;
  margin: 0;
  padding: 0;
}

.swiper-wrapper {
  height: 280px;
}

.swiper-slide img {
  width: 100%;
  /* height: 300px; */
}

.swiper-slide {
  text-align: center;
  background: #fff;
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
</style>