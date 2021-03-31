<template>
  <div id="app">
    <div class="content">
      <router-view></router-view>
    </div>
    <my-tab :tab="tab"></my-tab>
  </div>
</template>
<script>
import myTab from "@/components/myTab/myTab";
export default {
  data() {
    return {
      tab: ["首页", "分类", "购物车", "我的"],
    };
  },
  components: {
    myTab,
  },
};
</script>
<style lang="scss">
#app {
  height: 100%;
  overflow: hidden;
  .content {
    height: calc(100% - 1rem);
  }
}
</style>
