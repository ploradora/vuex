<template>
  <h3>{{ addedNum }}</h3>
</template>

<script>
export default {
  computed: {
    addedNum() {
        return this.$store.getters.multiplyByTwo;
    }
  },
};
</script>
