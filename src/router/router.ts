// Vendors
import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
// Utilities
import { changeTitle } from "@/utils/browser.utils";
import { capitalize } from "@/utils/string.utils";
// Constants
import routerConstants from "./constants/router.constants";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = routerConstants.ROUTES;

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.afterEach((to) => {
  Vue.nextTick(() => {
    if (to?.meta?.title) {
      changeTitle(capitalize(to.meta.title));
    }
  });
});

export default router;
