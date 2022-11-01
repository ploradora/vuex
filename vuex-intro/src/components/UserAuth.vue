<template>
  <div class="buttons">
    <button @click="actionLogin">Login</button>
    <button @click="actionLogout">Logout</button>
  </div>
</template>

<script>
export default {
  methods: {
    actionLogin() {
      this.$store.dispatch("loginState");
    },
    actionLogout() {
      this.$store.dispatch("logoutState");
    },
  },
};
</script>

<style scoped>
.buttons {
  padding: 30px;
}
</style>
