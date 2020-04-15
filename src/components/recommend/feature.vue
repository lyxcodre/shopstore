<template>
  <div id="feature">
    <div
      v-for="(item,index) in features"
      :key="index"
      class="feature-item"
      @click="activeClick(index)"
      :class="{active: index === count}"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "feature",
  data() {
    return {
      count: 0
    };
  },
  props: {
    features: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    activeClick(index) {
      this.count = index;
      this.$emit("clickList", index);
    }
  }
};
</script>

<style scoped>
#feature {
  height: 40px;
  display: flex;
  line-height: 40px;
  text-align: center;
  font-size: 18px;
}
.feature-item {
  flex: 1;
  margin: 0 40px 0;
}

.active {
  color: rgb(219, 64, 64);
  border-bottom: 3px solid rgb(219, 64, 64);
  /* background-color: blueviolet; */
}
</style>