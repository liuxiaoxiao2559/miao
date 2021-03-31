<template>
  <ul v-show="show" @mouseleave="leaveList">
    <li
      v-for="(item, i) in list"
      @mouseover="overLi(i)"
      :key="item.id"
      :class="current === i ? 'active' : ''"
    >
      <span @click="choseItem(item.name)">{{ item.name }}</span>
      <span
        class="del"
        :style="{
          display: current === i ? 'block' : 'none',
        }"
        @click="del(i)"
        >删除</span
      >
    </li>
  </ul>
</template>

<script>
export default {
  name: "",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    num: {
      type: Number,
      default: -1, 
    },

    list: {
      type: Array,
    },
  },
  data() {
    return {
      current: -1,
    };
  },
  created() {},
  methods: {
    del(i) {
      this.list.splice(i, 1);
      localStorage.setItem("list", JSON.stringify(this.list));
    },

    overLi(i) {
      this.current = i;
    },

    choseItem(name) {
      this.$emit("send:content", name);
    },

    leaveList() {
      this.current = -1;
    },
  },

  watch: {
    num() {
      this.current = this.num;
    },
  },
};
</script>

<style scoped lang="scss">
ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  li {
    line-height: 30px;
    display: flex;
    justify-content: space-between;
    padding: 0 15px;
  }
}
.active {
  background-color: #ccc;
}
</style>
