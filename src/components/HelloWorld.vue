<template>
  <h1>{{ count }}</h1>
  <button @click="increment">Increase count</button>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "HelloWorld",
  setup() {
    const store = useStore();
    const count = computed(() => store.state.count);
    const increment = () => store.commit("increment");

    return {
      count,
      increment,
    };
  },
};
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
