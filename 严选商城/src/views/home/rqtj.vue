<template>
  <div class="rqtj">
    <get-back titles="人气推荐"></get-back>
    <div class="popularity">
      <div
        class="rq"
        v-for="item in popularity"
        :key="item.id"
        @click="spdetail(item.id)"
      >
        <img :src="item.pic" alt="" />
        <p>{{ item.name }}</p>
        <p class="p2">{{ item.characteristic }}</p>
        <p class="p3">￥{{ item.minPrice }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import getBack from "@/components/back/back.vue";
import { popularity } from "../../utils/api/homeApi/index.js";
export default {
  name: "",
  components: {
    getBack,
  },
  data() {
    return { popularity: [] };
  },
  created() {
    popularity().then((res) => {
      this.popularity = res;
      //   console.log(this.popularity);
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
.rqtj {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}
.popularity {
  width: 100%;
  font-size: 0.3px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  .rq {
    width: 45%;
    margin: 6px;
    img {
      width: 100%;
      height: 4.5rem;
    }
    .p2 {
      font-size: 0.14rem;
      color: #a8a8a8;
      margin-top: 0.25rem;
      width: 3.24rem;
      overflow: hidden;
      //属性规定当文本溢出包含元素时发生的事情 设置ellipsis显示为为。。。
      text-overflow: ellipsis;
      //设置文本不换行
      white-space: nowrap;
    }
    .p3 {
      color: red;
    }
  }
}
</style>
