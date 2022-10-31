<template>
  <div class="home">
    <HelloWorld>
      <TheCounter />
      <button @click="addOne">Add 10</button>
      <ChangeCounter />
    </HelloWorld>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import TheCounter from "@/components/TheCounter.vue";
import ChangeCounter from "@/components/ChangeCounter.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
    TheCounter,
    ChangeCounter,
  },

  methods: {
    addOne() {
      // return (this.$store.state.counter = this.$store.state.counter + 10);
      this.$store.commit('increment')
    },
  },
};
</script>

<style scoped>
.home {
}
</style>
