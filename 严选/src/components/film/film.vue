<template>
  <div class="film">
    <ul>
      <li v-for="item in filmlist" :key="item.id">
        <img :src="item.pic" alt="" @click="tzdetail(item.id)" />
        <p class="p1">{{ item.title }}</p>
        <p class="p2">{{ item.descript }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { dianying } from "../../utils/api/homeApi/index.js";
export default {
  name: "",
  data() {
    return {
      filmlist: [],
    };
  },
  created() {
    dianying().then((res) => {
      this.filmlist = res;
      // console.log(this.filmlist);
    });
  },
  methods: {
    tzdetail(id) {
      this.$router.push({
        name: "dydetail",
        query: {
          id,
        },
      });
    },
  },
};
</script>

<style scoped lang="scss">
.film {
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  margin: 0;
  padding: 0;
  ul {
    width: 32rem;
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
    li {
      width: 6.2rem;
      height: 6rem;
      margin: 0.2rem;
      img {
        width: 100%;
      }
      p {
        font-size: 0.2rem;
      }
      .p1 {
        margin: 5px;
      }
      .p2 {
        font-size: 0.14rem;
        color: #a8a8a8;
        margin-top: 0.35rem;
        width: 3.24rem;
        overflow: hidden;
        //属性规定当文本溢出包含元素时发生的事情 设置ellipsis显示为为。。。
        text-overflow: ellipsis;
        //设置文本不换行
        white-space: nowrap;
      }
    }
  }
}
</style>
