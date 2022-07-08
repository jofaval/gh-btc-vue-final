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
// Utilities
import { dLog } from "./utils/global.utils";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueAxios, axios);

// General global handler
window.onerror = (message, source, line, column, error): void => {
  dLog("window error", { message, source, line, column, error });
};

const vueApp = new Vue({
  router,
  store,
  render: (h) => h(App),
  errorCaptured(err, vm, info) {
    const message = "An unhandled general error happend in the application";
    dLog(message, err, vm, info);
  },
});
vueApp.$mount("#app");
