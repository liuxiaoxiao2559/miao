<template>
  <div class="home">
    <ul>
      <li v-for="item in list" :key="item.id">
        <img :src="item.picUrl" alt="" />
      </li>
    </ul>
  </div>
</template>

<script>
import { getBanners } from "@/utils/api/homeApi";
export default {
  name: "Home",
  data() {
    return {
      list: [],
    };
  },
  created() {
    this.$loading.show("正在加载");
    getBanners().then((res) => {
      //获取轮播图数据
      this.list = res;
      // console.log(this.list);
      this.$loading.hide()
    });
  },
};
</script>
