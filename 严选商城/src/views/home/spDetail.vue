<template>
  <div class="spdetail">
    <get-back></get-back>
    <div id="swiper">
      <ul
        @touchstart="touchstart"
        @touchmove="touchmove"
        @touchend="touchend"
        :style="{ width: swlist.length * 100 + '%', left: left, transition: transition }"
      >
        <li v-for="item in swlist" :key="item.id" :style="100 / swlist.length + '%'">
          <img :src="item.pic" alt="" />
        </li>
      </ul>
    </div>
    <div class="style">
      <h2 v-html="xq2.name"></h2>
      <p class="re">{{ xq2.characteristic }}</p>
      <ul>
        <li>低价￥{{ xq2.originalPrice }}</li>
        <li>原价￥{{ xq2.originalPrice }}</li>
        <li>库存{{ xq2.stores }}</li>
      </ul>
    </div>
    <div v-html="this.xq.content" class="font"></div>
  </div>
</template>

<script>
var timer1, timer2;
import { spdetail } from "../../utils/api/homeApi/index.js";
import getBack from "@/components/back/back.vue";
export default {
  name: "",
  components: {
    getBack,
  },
  data() {
    return {
      xq: [],
      xq2: [],
      swlist: [],
      left: "-100%",
      transition: "none",
      startX: 0,
      dir: "left",
    };
  },
  created() {
    //获取详情页数据及轮播数据
    spdetail(this.$route.query.id).then((res) => {
      this.xq = res.data;
      this.xq2 = res.data.basicInfo;
      this.swlist = res.data.pics;
      // console.log(this.xq);
    });
    //轮播时间
    if (this.autoplay !== false) {
      setInterval(() => {
        this.touchend();
      }, 3000);
    }
  },
  methods: {
    //轮播事件
    touchstart(e) {
      this.startX = e.touches[0].pageX;
    },
    touchmove(e) {
      if (e.touches[0].pageX - this.startX > 0) {
        this.dir = "right";
      } else {
        this.dir = "left";
        2;
      }
    },
    touchend() {
      this.transition = "left 0.5s linear";
      if (this.dir === "left") {
        clearTimeout(timer1);
        this.left = "-200%";
        timer1 = setTimeout(() => {
          this.transition = "none";
          this.left = "-100%";
          let item = this.swlist.shift();
          this.swlist.push(item);
        }, 500);
      } else if (this.dir === "right") {
        this.left = "0%";
        clearTimeout(timer2);
        timer2 = setTimeout(() => {
          this.transition = "none";
          this.left = "-100%";
          let item = this.swlist.pop();
          this.swlist.unshift(item);
        }, 500);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.spdetail {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  #swiper {
    width: 100%;
    overflow: hidden;
    position: relative;
    height: 7rem;
    ul {
      display: flex;
      position: absolute;
      top: 0;
      li {
        img {
          width: 100%;
        }
      }
    }
  }
  .style {
    padding-left: 0.2rem;
    box-sizing: border-box;
    height: 2rem;
    width: 100%;
    margin-top: 0.5rem;
    border-bottom: 0.2rem solid #f5f5f5;
    h2 {
      font-size: 0.3rem;
    }
    .re {
      height: 0.4rem;
      margin-top: 0.2rem;
      font-size: 0.2rem;
      color: #b8b8b8;
    }
    ul {
      margin-top: 0.2rem;
      font-size: 0.3rem;
      display: flex;
      li {
        &:nth-child(1) {
          color: #cc0c0c;
        }
        &:nth-child(2) {
          font-size: 0.2rem;
          padding-top: 0.06rem;
          margin-left: 0.2rem;
          color: #b8b8b8;
        }
        &:nth-child(3) {
          font-size: 0.2rem;
          padding-top: 0.06rem;
          margin-left: 3.5rem;
          color: #b8b8b8;
        }
      }
    }
  }
  .font {
    font-size: 0.3rem;
    width: 100% !important;
    /deep/.m-attrList {
      /deep/li {
        padding: 0 0.2rem;
        // height: 0.4rem;
        margin-bottom: 0.4rem;
        width: 100% !important;
      }
    }
    /deep/p {
      height: auto !important;
      width: 100% !important;
      overflow: hidden;
    }
    /deep/img {
      width: 100% !important;
      height: 100% !important;

      height: auto;
    }
  }
}
</style>
