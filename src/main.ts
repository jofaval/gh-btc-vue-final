// Vendors
import Vue from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import VueAxios from "vue-axios";
import axios from "axios";
import "./registerServiceWorker";
// Router
import router from "./router";
// Store
import store from "./store";
// Styles
import "./styles/main.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
// App
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueAxios, axios);

const vueApp = new Vue({
  router,
  store,
  render: (h) => h(App),
});
vueApp.$mount("#app");
