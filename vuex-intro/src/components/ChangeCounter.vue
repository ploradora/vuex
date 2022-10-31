<template>
  <button @click="addNum">Add 1</button>
</template>

<script>
export default {
  methods: {
    addNum() {
      //   this.$store.state.counter++;
      this.$store.commit("increment");
    },
  },
};
</script>
