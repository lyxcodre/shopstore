<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item,index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" @load="swiperImageLoad" />
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
  name: "swiper",
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      isOff: false
    };
  },
  mounted() {
    setTimeout(() => {
      const s = new Swiper(".swiper-container", {
        direction: "horizontal",
        loop: true,
        autoplay: true,
        autoplay: {
          disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination"
        }
      });
    }, 400);
  },
  methods: {
    swiperImageLoad() {
      // console.log(111);
      if (!this.isOff) {
        this.$emit("swiperImageLoad");
        this.isOff = true;
      }
    }
  }
};
</script>

<style scoped>
.swiper-container {
  width: 100%;
  margin: 0;
  padding: 0;
}

/* .swiper-wrapper {
  height: 300px;
} */

.swiper-slide img {
  max-width: 100%;
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
.swiper-pagination-bullet {
  width: 0.833rem;
  height: 0.833rem;
  display: inline-block;
  background: #7c5e53;
}
</style>
