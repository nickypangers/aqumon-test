<template>
  <div class="w-screen h-screen">
    <Graph />
  </div>
</template>
<script>
import Graph from "./components/Graph.vue";
import { useStore } from "vuex";
export default {
  components: {
    Graph,
  },
  setup() {
    const store = useStore();

    const toggleIsDarkMode = () => {
      store.commit("setIsDarkMode", !store.state.isDarkMode);
    };
    return {
      toggleIsDarkMode,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
