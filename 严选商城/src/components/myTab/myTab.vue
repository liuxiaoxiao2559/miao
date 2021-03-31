<template>
  <div id="tab">
    <ul>
      <li
        :class="current === i ? 'active' : ''"
        v-for="(item, i) in tab"
        :key="i"
        @click="tabClick(i)"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    tab: Array,
  },
  data() {
    return {
      current: 0,
    };
  },
  created() {},
  methods: {
    tabClick(i) {
      this.current = i;
      if (i === 0) {
        this.$router.push("/");
      } else if (i === 1) {
        this.$router.push("/type");
      }
    },
  },
};
</script>

<style scoped lang="scss">
#tab {
  font-size: 0.3rem;
  width: 100%;
  height: 1rem;
  ul {
    display: flex;
    height: 100%;
    justify-content: space-around;
    align-items: center;
    li {
      flex-basis: 25%;
      text-align: center;
    }
    .active {
      color: red;
    }
  }
}
</style>
