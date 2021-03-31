<template>
  <div class="types">
    <p class="ss"><input type="text" placeholder="回车搜索数据" /></p>
    <div class="zhuti">
      <div class="left">
        <ul>
          <li
            v-for="item in list"
            :key="item.id"
            @click="fl(item.id)"
            :class="{ active: active == item.id }"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>
      <div class="right"></div>
        <div class="lb">
          <swiper :pic="img"></swiper>
        </div>
        <div class="sj">
          <ul>
            <li></li>
          </ul>
        </div>
      </div>
  </div>
</template>

<script>
import { types } from "../../utils/api/typesApi/index.js";
import swiper from "@/components/swiper/swiper.vue";
export default {
  name: "",
  components: {
    swiper,
  },
  data() {
    return {
      list: [],
      img: [
        { id: "1", picUrl: "../../assets/images/lb1.jpg" },
        { id: "2", picUrl: "../../assets/images/lb2.jpg" },
        { id: "3", picUrl: "../../assets/images/lb3.jpg" },
        { id: "4", picUrl: "../../assets/images/lb4.jpg" },
      ],
      active: "",
    };
  },
  created() {
    types().then((res) => {
      this.list = res;
      // console.log(this.list);
    });
    // console.log(this.img);
  },
  methods: {
    fl(id) {
      this.active = id;
    },
  },
};
</script>

<style scoped lang="scss">
.types {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  .ss {
    width: 100%;
    height: 1rem;
    border-bottom: 0.01rem solid #f3f3f3;
    display: flex;
    align-items: center;
    input {
      width: 4.4rem;
      height: 0.7rem;
      background: #f5f5f5;
      border: none;
      border-radius: 0.2rem;
      margin-left: 0.5rem;
      padding-left: 0.3rem;
    }
  }
  .zhuti {
    width: 100%;
    display: flex;
    .active {
      color: #d41515;
      border-left: 2px solid #fd7522;
    }
    .left {
      width: 25%;
      ul {
        height: 100%;
        border-right: 1px solid #f5f5f5;
        li {
          padding-left: 2px;
          width: 95%;
          line-height: 0.66rem;
          text-align: center;
          height: 0.66rem;
          font-size: 0.26rem;
          margin-top: 0.14rem;
          box-sizing: border-box;
        }
      }
    }
    .right {
      width: 75%;

      .lb {
        width: 80%;
        margin-left: 0.52rem;
        height: 3rem;
      }
    }
  }
}
</style>
