<template>
  <div class="home">
    <HelloWorld v-if="lof">
      <TheCounter />
      <FavouriteCounter />
      <button @click="addOne">Add 10</button>
      <ChangeCounter />
    </HelloWorld>
    <HelloWorld>
      <UserAuth />
    </HelloWorld>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import TheCounter from "@/components/TheCounter.vue";
import ChangeCounter from "@/components/ChangeCounter.vue";
import FavouriteCounter from "@/components/FavouriteCounter.vue";
import UserAuth from "@/components/UserAuth.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
    TheCounter,
    ChangeCounter,
    FavouriteCounter,
    UserAuth,
  },

  methods: {
    addOne() {
      // return (this.$store.state.counter = this.$store.state.counter + 10);
      // this.$store.commit('increment')
      this.$store.commit({
        type: "increase10",
        value: 10,
      });
    },
  },
  computed: {
    lof() {
      return this.$store.getters.logStateResult;
    },
  },
};
</script>

<style scoped>
.home {
}
</style>
