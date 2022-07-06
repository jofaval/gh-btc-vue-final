// Vendors
import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
// Utilities
import { changeTitle } from "@/utils/browser.utils";
import { capitalize } from "@/utils/string.utils";
// Constants
import routerConstants from "./constants/router.constants";
// Types
import type { RouterType } from "@/types/router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = routerConstants.ROUTES;

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// Exported exclusively for testing purposes
export const routeChangeTitle = (to?: RouterType) => {
  if (to?.meta?.title) {
    changeTitle(capitalize(to.meta.title));
  }
};

router.afterEach((to) => {
  Vue.nextTick(() => {
    routeChangeTitle(to as RouterType);
  });
});

export default router;
