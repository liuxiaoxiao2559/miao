<template>
  <div class="dydetail">
    <get-back titles="专栏详情"></get-back>
    <div class="boox">
      <h2 v-html="xq.title"></h2>
      <div class="img">
        <img :src="xq.pic" alt="" />
      </div>
      <div v-html="xq.content" class="box"></div>
    </div>
    <div>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li>立即购买</li>
        <li>加入购物车</li>
      </ul>
    </div>
  </div>
</template>

<script>
import getBack from "@/components/back/back.vue";
import { dydetail } from "../../utils/api/homeApi/index.js";
export default {
  name: "",
  components: {
    getBack,
  },
  data() {
    return {
      xq: [],
    };
  },
  created() {
    dydetail(this.$route.query.id).then((res) => {
      this.xq = res.data;
      console.log(this.xq);
    });
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.dydetail {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}
.boox {
  padding: 0.1rem;
}
h2 {
  text-align: center;
  font-size: 0.6rem;
  margin: 0.5rem 0;
}
.img {
  img {
    width: 100%;
    height: 4.5rem;
  }
}
.box {
  font-size: 0.3rem;
  /deep/p {
    height: auto !important;
    width: 100% !important;
    overflow: hidden;
    line-height: 0.7rem;
    text-indent: 2em;
  }
}
</style>
