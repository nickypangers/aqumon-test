import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import "./index.css";
import "echarts";
import axios from "axios";

const apiKey = "e56f67ccc4013f655992231b1330763d";

axios.defaults.baseURL = "";

const app = createApp(App);
app.use(store);
app.mount("#app");
