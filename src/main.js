import { createApp } from "vue";
import antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

import App from "./App.vue";
import router from "./router";

import libs from "@/libs";
const app = createApp(App);
app.use(antd);
app.use(libs);
app.use(router).mount("#app");
