<template>
  <div class="bargaining">
    <div class="list" v-for="(item, i) in list" :key="item.id" v-show="i>2">
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
export default {
  name: "",
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

  },
};
</script>

<style scoped lang="scss">
.list {
  width: 100%;
  height: 2.6rem;
  display: flex;
  background-color: #fff;
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
