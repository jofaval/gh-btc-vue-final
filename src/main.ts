import Vue from "vue";
import VueAxios from "vue-axios";
import axios from "axios";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
// App
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.use(VueAxios, axios);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
