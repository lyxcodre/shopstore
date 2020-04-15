<template>
  <div class="tabbar-h-item" @click="itemClick">
    <!-- <img src="../../assets/img/chaxun.svg" alt />
    <div>搜索</div>-->
    <div v-if="!isActive">
      <slot name="tabbaricon"></slot>
    </div>
    <div v-else>
      <slot name="tabbaricona"></slot>
    </div>
    <div :style="activeColors">
      <slot name="tabbartext"></slot>
    </div>

    <!-- <slot name="tabbar-text"></slot> -->
  </div>
  <!-- <div class="tabbar-h-item">
      <img src="../../assets/img/quanbudingdan.svg" alt />
      <div>分类</div>
    </div>
    <div class="tabbar-h-item">
      <img src="../../assets/img/vip.svg" alt />
      <div>VIP</div>
    </div>
    <div class="tabbar-h-item">
      <img src="../../assets/img/kefu.svg" alt />
      <div>客服</div>
    </div>
    <div class="tabbar-h-item">
      <img src="../../assets/img/one.svg" alt />
      <div>我的</div>
  </div>-->
</template>
<script>
export default {
  name: "TabbarItem",
  data() {
    return {};
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeColors() {
      return this.isActive ? { color: this.activeColor } : {};
    }
  },
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red"
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path);
    }
  }
};
</script>
<style>
.tabbar-h-item {
  flex: 1;
}
.tabbar-h-item img {
  width: 22px;
  height: 22px;
  margin-top: 3px;
  margin-bottom: 2px;
  vertical-align: middle;
}
</style>