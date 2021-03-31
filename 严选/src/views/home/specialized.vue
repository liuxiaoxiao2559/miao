<template>
  <div class="specialized">
    <get-back titles="严选专栏"></get-back>
    <div class="dy">
      <ul>
        <li v-for="item in filmlist" :key="item.id">
          <img :src="item.pic" alt="" @click="tzdetail(item.id)" />
          <p class="p1">{{ item.title }}</p>
          <p class="p2">{{ item.descript }}</p>
          <p class="p3">查看详情</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import getBack from "@/components/back/back.vue";
import { dianying } from "../../utils/api/homeApi/index.js";
export default {
  name: "",
  components: {
    getBack,
  },
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
        name:"dydetail",
        query:{
          id
        }
      })
    },
  },
};
</script>

<style scoped lang="scss">
.specialized {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  .dy {
    li {
      position: relative;

      img {
        width: 80%;
        height: 2.6rem;
        display: block;
        margin-top: 7px;
        margin-left: 35px;
      }
      p {
        width: 80%;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 0.26rem;
        color: white;
      }
      .p1 {
        position: absolute;
        top: 0.6rem;
        left: 12%;
      }
      .p2 {
        position: absolute;
        top: 1.3rem;
        left: 12%;
      }
      .p3 {
        position: absolute;
        top: 1.9rem;
        left: 3.1rem;
        width: 1.1rem;
        height: 0.4rem;
        border: 0.01rem solid #ffffff;
        border-radius: 0.5rem;
      }
    }
  }
}
</style>
