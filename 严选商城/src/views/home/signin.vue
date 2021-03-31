<template>
  <div class="signin">
    <div class="top">
      <get-back></get-back>
      <div class="xia">
        <p class="p1">您的可用积分为</p>
        <p class="p2">0</p>
      </div>
    </div>
    <div class="kong"></div>
    <div class="qd">
      <p class="p1">签到</p>
      <div class="gw">
        <img
          src="data:image/jpeg;base64,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"
          alt=""
        />
        <div class="zt">
          <p>消费购物</p>
          <p>购物完成，确定收货后立刻返积分</p>
        </div>
        <p class="p2">去购物</p>
      </div>
      <div class="gw">
        <img
          src="data:image/jpeg;base64,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"
          alt=""
        />
        <div class="zt">
          <p>积分兑换</p>
          <p>积分兑好礼，20积分即可兑换礼券</p>
        </div>
        <p class="p2">去兑换</p>
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
.signin {
  width: 100%;
  font-size: 0.26rem;
}
.top {
  width: 100%;
  height: 4rem;
  background: #f4ebe2;
  .xia {
    text-align: center;
    line-height: 1.4rem;
    .p1 {
      color: rgb(190, 184, 184);
    }
    .p2 {
      color: #b3a078;
      font-size: 0.7rem;
    }
  }
}
.kong {
  width: 100%;
  height: 1.2rem;
  background: #e8e1cf;
}
.qd {
  .p1 {
    font-size: 0.2rem;
    color: white;
    width: 2.8rem;
    height: 0.57rem;
    background: #b3a078;
    text-align: center;
    line-height: 0.57rem;
    border-radius: 0.4rem;
    margin: 0.3rem auto;
  }
  img {
    width: 1.2rem;
    height: 1.3rem;
    margin-top: 0.3rem;
  }
  .gw {
    width: 6.9rem;
    height: 1.8rem;
    display: flex;
    background: #f4ebe2;
    margin: 0 auto;
    margin-bottom: 0.25rem;
    align-items: center;
    .zt {
      width: 4rem;
      height: 1.7rem;
      p {
        margin-top: 0.5rem;
        color: #ebcaaa;
      }
    }
    .p2 {
      width: 1rem;
      height: 0.5rem;
      border-radius: 0.1rem;
      text-align: center;
      line-height: 0.5rem;
      background: #e1b68c;
      color: white;
    }
  }
}
</style>
