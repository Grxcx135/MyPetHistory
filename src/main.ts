import "./styles/main.scss";
import "./styles/component.scss";
import "./styles/typo.scss";

import { createApp } from "vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import App from "./App.vue";
import axios from "axios";
import VueAxios from "vue-axios";

const app = createApp(App);

app.use(VueAxios, axios);
app.use(router);
app.use(vuetify);

app.mount("#app");
