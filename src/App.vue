<template>
  <div class="w-screen h-screen">
    <div class="flex justify-end">
      <download-button />
    </div>
    <graph />
  </div>
</template>
<script>
import Graph from "./components/Graph.vue";
import DownloadButton from "./components/DownloadButton.vue";
import { useStore } from "vuex";
export default {
  components: {
    Graph,
    DownloadButton,
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
