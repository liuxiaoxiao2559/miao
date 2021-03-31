<template>
  <div class="back">
    <div class="fh">
      <link rel="stylesheet" href="http://at.alicdn.com/t/font_2399233_hev4vl1ebpn.css" />
      <p>
        <i class="iconfont icon-fanhui-copy-copy" @click="back()"> </i>
        <span> {{ titles }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: ["titles"],
  data() {
    return {};
  },
  created() {},
  methods: {
    back() {
      this.$router.back(1);
    },
  },
};
</script>

<style scoped lang="scss">
.fh {
  width: 100%;
  height: 0.5rem;
  line-height: 0.4rem;
  margin-left: 0.3rem;
  font-size: 0.3rem;
  // position: fixed;
  left: 0.1rem;
  top: 0.1rem;
  span {
    margin-left: 2rem;
  }
}
</style>
