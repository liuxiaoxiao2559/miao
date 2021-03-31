<template>
  <div>
    <get-back></get-back>
    <div class="duihuan">
      <img src="../../assets/images/exchange.jpg" alt="" />
      <input type="text" placeholder="请输入礼券码" /><button>兑换</button>
    </div>
    <div>
      <div class="liquan">
        <div class="top">
          <p class="p1">1元</p>
          <div class="center">
            <p>满减1</p>
            <p>满0元使用</p>
          </div>
          <p class="p2">立即领取</p>
        </div>
        <p class="lq">领取七天有效</p>
      </div>

      <div class="liquan">
        <div class="top">
          <p class="p1">1元</p>
          <div class="center">
            <p>满减1</p>
            <p>满0元使用</p>
          </div>
          <p class="p2">立即领取</p>
        </div>
        <p class="lq">领取七天有效</p>
      </div>
    </div>
  </div>
</template>

<script>
import getBack from "@/components/back/back.vue";
export default {
  name: "",
  components: {
    getBack,
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>

<style scoped lang="scss">
.duihuan {
  position: relative;
  img {
    width: 100%;
    height: 4.1rem;
    display: block;
  }
  input {
    width: 4.5rem;
    height: 0.7rem;
    border: 1px solid #fa893d;
    border-radius: 5px;
    position: absolute;
    left: 0.65rem;
    bottom: 0.5rem;
    font-size: 0.2rem;
    padding-left: 0.4rem;
  }
  button {
    width: 1.2rem;
    height: 0.7rem;
    border-radius: 5px;
    color: white;
    background: #ee7c7b;
    text-align: center;
    line-height: 0.5rem;
    position: absolute;
    left: 19.4em;
    bottom: 0.54rem;
  }
}
.liquan {
  width: 6.6rem;
  height: 2rem;
  border-radius: 0.1rem;
  margin: 0 auto;
  background: #ec7877;
  margin-top: 0.2rem;
  color: white;
  .top {
    height: 1.5rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 0.28rem;
    .p1 {
      width: 1rem;
      font-size: 0.4rem;
    }
    .center {
      width: 3rem;
      p {
        margin-top: 10px;
      }
    }
    .p2 {
      width: 1.5rem;
      height: 0.45rem;
      border-radius: 0.06rem;
      text-align: center;
      line-height: 0.45rem;
      background: #fce8e7;
      color: #d45656;
      font-size: 0.3rem;
    }
  }
  .lq {
    height: 0.5rem;
    background: #cc7773;
    border-bottom-left-radius: 0.1rem;
    border-bottom-right-radius: 0.1rem;
    padding-left: 0.12rem;
    line-height: 0.5rem;
    font-size: 0.18rem;
  }
}
</style>
