<template>
  <div class="bargaining">
    <get-back titles="全民砍价"></get-back>

    <div class="list" v-for="item in list" :key="item.id" @click="spdetail(item.id)">
      <div class="left">
        <img :src="item.pic" alt="" />
      </div>
      <div class="right">
        <div class="shang">
          <p>{{ item.name }}</p>
          <p class="p1">{{ item.characteristic }}</p>
        </div>
        <div class="box">
          <div class="xia">
            <p class="pred">￥{{ item.minPrice }}</p>
            <p class="p1">￥{{ item.originalPrice }}</p>
            <p class="p1">{{ item.stores }}件</p>
          </div>
          <div class="xia">
            <p>低价</p>
            <p class="p1">原价</p>
            <p class="p1">限量</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Bargaining } from "../../utils/api/homeApi/index.js";
import getBack from "@/components/back/back.vue";
export default {
  name: "",
  components: {
    getBack,
  },
  data() {
    return {
      list: [],
    };
  },
  created() {
    Bargaining().then((res) => {
      this.list = Object.values(res.goodsMap);
      //   console.log(this.list);
    });
  },
  methods: {
    spdetail(id) {
      this.$router.push({
        name: "spDetail",
        query: { id },
      });
    },
  },
};
</script>

<style scoped lang="scss">
.bargaining {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}
.list {
  width: 100%;
  height: 2.6rem;
  display: flex;
  background-color: #fff;
  margin-top: 30px;
  p {
    font-size: 0.28rem;
    padding: 0.2rem 0 0 0.4rem;
  }
}
.left {
  width: 33%;
  img {
    width: 100%;
    height: 2.6rem;
  }
}
.right {
  width: 50%;
  .p1 {
    color: rgb(180, 176, 176);
  }
  .pred {
    color: red;
  }
  .shang {
    width: 100%;
  }
  .box {
    margin-top: 20px;
    .xia {
      margin: 0;
      padding: 0;
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
