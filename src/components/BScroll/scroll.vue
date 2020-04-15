<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "scroll",
  data() {
    return {
      Scroll: null
    };
  },
  props: {
    propeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.Scroll = new BScroll(this.$refs.wrapper, {
      scrolly: true,
      click: true,
      propeType: this.propeType,
      pullUpLoad: this.pullUpLoad
    });

    this.Scroll.on("scroll", position => {
      this.$emit("scroll", position);
    });

    this.Scroll.on("pullingUp", () => {
      this.$emit("pullingUp");
    });
  },
  methods: {
    scrollTo(x, y, time = 0) {
      this.Scroll && this.Scroll.scrollTo(x, y, time);
    },
    // finishPullUp() {
    //   this.Scroll && this.Scroll.finishPullUp();
    // },
    refresh() {
      this.Scroll && this.Scroll.refresh();
    },
    getScrolly() {
      return this.Scroll ? this.Scroll.y : 0;
    }
  }
};
</script>

<style scoped>
</style>