<template>
  <input
    type="text"
    class="ipt"
    @keyup.up="showPrev"
    @keyup.down="showNext"
    @click="isfocus"
    @input="iptChange"
    :value="value"
  />
</template>

<script>
export default {
  name: "",
  props: ["value"],
  data() {
    return {
      num: -1,
    };
  },
  methods: {
    iptChange(e) {
      this.$emit("input", e.target.value);
    },

    isfocus() {
      this.$emit("send:showlist", true);
    },

    showPrev() {
      if (this.num > 0) {
        this.num--;
      } else {
        this.num = 3;
      }
      this.$emit("send:num", this.num);
    },

    showNext() {
      if (this.num < 3) {
        this.num++;
      } else {
        this.num = 0;
      }
      this.$emit("send:num", this.num);
    },
  },
};
</script>

<style scoped lang="scss">
.ipt {
  border: none;
}
</style>
