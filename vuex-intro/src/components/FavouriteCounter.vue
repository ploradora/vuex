<template>
  <h3>{{ normalisedCounter }}</h3>
  <p>Favouriter Counter</p>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    // addedNum() {
    //   // return this.$store.state.counter;
    //   return this.$store.getters.normalisedCounter;
    // },
    ...mapGetters(["normalisedCounter"]),
  },
};
</script>
