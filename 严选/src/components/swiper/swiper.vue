<template>
  <div id="swiper">
    <ul
      @touchstart="touchstart"
      @touchmove="touchmove"
      @touchend="touchend"
      :style="{ width: pic.length * 100 + '%', left: left, transition: transition }"
    >
      <li v-for="item in pic" :key="item.id" :style="100 / pic.length + '%'">
        <img :src="item.picUrl" alt="" />
      </li>
    </ul>
  </div>
</template>

<script>
var timer1, timer2;
export default {
  name: "",
  props: {
    pic: {
      type: Array,
      //设置默认值
      default: () => {
        return [];
      },
    },
    autoplay: {
      // 设置后不自动轮播
      default: false,
      required:false
    },
  },
  data() {
    return {
      left: "-100%",
      transition: "none",
      startX: 0,
      dir: "left",
    };
  },
  created() {
    if(this.autoplay!==false){
      setInterval(()=>{
        this.touchend()
      },3000)
    }
  },
  methods: {
    touchstart(e) {
      this.startX = e.touches[0].pageX;
    },
    touchmove(e) {
      if (e.touches[0].pageX - this.startX > 0) {
        this.dir = "right";
      } else {
        this.dir = "left";2
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
          let item = this.pic.shift();
          this.pic.push(item);
        }, 500);
      } else if (this.dir === "right") {
        this.left = "0%";
        clearTimeout(timer2);
        timer2 = setTimeout(() => {
          this.transition = "none";
          this.left = "-100%";
          let item = this.pic.pop();
          this.pic.unshift(item);
        }, 500);
      }
    },
  },
};
</script>

<style scoped lang="scss">
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
</style>
