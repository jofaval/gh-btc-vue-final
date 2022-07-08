import pathsConstants from "./paths.constants";

export default {
  APP_TITLE: "Vue JSON Placeholder",
  DISPLAYABLE: ["Home", "Author", "Posts", "Contact"],
  ROUTES: [
    {
      path: pathsConstants.HOME,
      name: "Home",
      component: () => import("@/views/HomeView.vue"),
      // component: () => import("@/views/PostsView.vue"),
      meta: { title: "Home" },
    },
    {
      path: pathsConstants.AUTHOR,
      name: "Author",
      component: () => import("@/views/AuthorView.vue"),
      meta: { title: "Author" },
    },
    {
      path: pathsConstants.POSTS,
      name: "Posts",
      component: () => import("@/views/PostsView.vue"),
      meta: { title: "Every post" },
    },
    {
      path: pathsConstants.POST_DETAILS,
      name: "Detail",
      component: () => import("@/views/PostDetailView.vue"),
      // meta: { title: "Post detail" },
    },
    {
      path: pathsConstants.CONTACT,
      name: "Contact",
      component: () => import("@/views/ContactView.vue"),
      meta: { title: "Contact form" },
    },
    {
      path: pathsConstants.USER,
      name: "User",
      component: () => import("@/views/UserView.vue"),
      // meta: { title: "User detail" },
    },
    {
      path: pathsConstants.GITHUB_PAGES,
      redirect: pathsConstants.HOME,
    },
    {
      path: `${pathsConstants.GITHUB_PAGES}/:queryParams(.*)`,
      redirect: pathsConstants.HOME,
    },
    {
      path: "*",
      redirect: pathsConstants.HOME,
    },
  ],
};
