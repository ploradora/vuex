<template>
  <button @click="actionIncrement({ value: 'the payload 10' })">Add 1</button>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    // addNum() {
    //   //   this.$store.state.counter++;
    // //   this.$store.dispatch("actionIncrement", 10);
    // },
    ...mapActions(["actionIncrement"]),
  },
};
</script>
