<template>
  <div class="headers">
    {{ content }}
  </div>
</template>

<script>
export default {
  name: "",
  props: ["content"],
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>

<style scoped lang="scss">
.headers {
  font-size: 0.4rem;
  width: 100%;
  height: 1.2rem;
  background-color: #ffffff;
  line-height: 1.2rem;
  text-align: center;
  border-bottom: 1px solid #ccc;
}
</style>
