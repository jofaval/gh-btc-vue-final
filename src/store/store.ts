// Vendors
import Vue from "vue";
import Vuex from "vuex";
// Modules
import placeholder from "./modules/placeholder.module";
import contact from "./modules/contact.module";
import theme from "./modules/theme.module";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    placeholder,
    contact,
    theme,
  },
});
