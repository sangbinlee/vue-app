import axios from "axios";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; //설정 라우터 호출

const app = createApp(App).use(router).mount("#app");
// app.config.globalProperties.$axios = axios; //Global config (for Options API)  ex. this.$axios
//createApp(App).use(router).mount("#app");
