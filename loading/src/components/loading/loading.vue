<template>
  <div id="loading" v-show="show">
    <div class="msg_box">
      {{ msg }}
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    show: {
      type: Boolean,
    },
    msg: {
      type: String,
    },
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>

<style scoped lang="scss">
#loading {
  height: 100%;
  width: 100%;
  display: flex;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
  .msg_box {
    padding: 8px 20px;
    color: #fff;
    background-color: #000;
    border-radius: 5px;
  }
}
</style>
