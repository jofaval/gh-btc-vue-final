<script lang="ts">
// Vendors
import Vue from "vue";
// Store
import store from "@/store";
// Utilities
import { changeTitle } from "@/utils/browser.utils";
// Components
import UserComponent from "@/components/UserComponent.vue";
// Types
import type { PostType } from "@/types/post";
import type { UserType } from "@/types/user";

export default Vue.extend({
  name: "UserView",
  components: { UserComponent },
  mounted() {
    this.refresh();
  },
  data() {
    return { posts: [] as PostType[], user: {} as UserType, show: true };
  },
  watch: {
    user() {
      this.loadPosts();
    },
    $route() {
      this.refresh();
    },
  },
  methods: {
    loadUser() {
      this.user = store.getters.userById(this.$route.params.userId);
      changeTitle(this.user.name);
    },
    loadPosts() {
      this.posts = store.getters.postsByUser(this.$route.params.userId);
    },
    shouldShow() {
      this.show = Boolean(this.user) && Boolean(this.posts?.length);
    },
    refresh() {
      this.show = false;
      this.loadUser();
      this.loadPosts();
      this.shouldShow();
    },
  },
});
</script>

<template>
  <div class="page__user m-3" v-if="show">
    <!-- <div class="__user">{{ user }}</div> -->
    <!-- <div class="__posts">{{ posts }}</div> -->
    <UserComponent :user="user" :posts="posts" />
  </div>
</template>

<style scoped>
.user m-3__body {
  max-width: 800px;
  margin: auto;
}
</style>
