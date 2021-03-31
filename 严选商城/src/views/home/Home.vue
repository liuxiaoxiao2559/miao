<template>
  <div class="home" @scroll="scroll">
    <header-icon v-show="hasHeader"></header-icon>
    <div class="cheng">
      <swiper :pic="list"></swiper>
      <div class="qd">
        <ul>
          <li @click="signin()">
            <p><img src="@/assets/images/1.png" alt="" /></p>
            签到
          </li>
          <li @click="lq()">
            <p><img src="@/assets/images/2.png" alt="" /></p>
            礼券
          </li>
          <li @click="bargaining()">
            <p><img src="@/assets/images/3.png" alt="" /></p>
            砍价
          </li>
          <li @click="specialized()">
            <p><img src="@/assets/images/4.png" alt="" /></p>
            专栏
          </li>
        </ul>
      </div>
      <div class="qmkj" @click="bargaining()">
        <my-headers content="全民砍价  >"></my-headers>
        <div>
          <get-bargaining></get-bargaining>
        </div>
      </div>

      <div class="jxzt" @click="specialized()">
        <my-headers content="精选专题  >"></my-headers>
      </div>
      <div>
        <my-film></my-film>
      </div>
      <div class="rqtj" @click="rqtj()">
        <my-headers content="人气推荐  >"></my-headers>
      </div>
      <div>
        <my-popularity></my-popularity>
      </div>
    </div>
  </div>
</template>

<script>
import { getBanners } from "@/utils/api/homeApi/index.js";
import myHeaders from "@/components/headers/headers.vue";
import swiper from "@/components/swiper/swiper.vue";
import headerIcon from "@/components/colHeader/colHeader.vue";
import getBargaining from "@/components/bargaining/bargaining.vue";
import myFilm from "@/components/film/film.vue";
import myPopularity from "@/components/popularity/popularity.vue";
export default {
  name: "Home",
  data() {
    return {
      list: [],
      icon: [],
      hasHeader: false,
    };
  },
  components: {
    swiper,
    headerIcon,
    myHeaders,
    getBargaining,
    myFilm,
    myPopularity,
  },
  created() {
    getBanners().then((res) => {
      this.list = res;
      // console.log(this.list);
    });
  },
  methods: {
    scroll(e) {
      // console.log(1);
      this.hasHeader = e.target.scrollTop > 400 ? true : false;
    },
    //签到
    signin() {
      this.$router.push({
        name: "signin",
      });
    },
    //礼券
    lq() {
      this.$router.push({
        name: "lq",
      });
    },
    //砍价
    bargaining() {
      this.$router.push({
        name: "bargaining",
      });
    },
    //专栏
    specialized() {
      this.$router.push({
        name: "specialized",
      });
    },
    //人气推荐
    rqtj() {
      this.$router.push({
        name: "rqtj",
      });
    },
  },
};
</script>
<style scoped lang="scss">
.home {
  width: 100%;
  height: 100%;
  overflow: auto;
  position: relative;
  background-color: #eee;
  overflow-x: hidden;
}
.cheng {
  height: 1500px;
  .qd {
    position: absolute;
    top: 290px;
    width: 100%;
    height: 2rem;
    background-color: #fff;
    border-radius: 20% 20% 0 0;
    ul {
      display: flex;
      text-align: center;
      li {
        font-size: 0.4rem;
        flex-basis: 25%;
        padding-top: 0.6rem;
        p {
          margin-bottom: 0.2rem;
          img {
            width: 40%;
          }
        }
      }
    }
  }
  .qmkj {
    margin-top: 1rem;
  }
}
</style>
