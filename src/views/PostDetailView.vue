<script lang="ts">
// Vendors
import Vue from "vue";
// Store
import store from "@/store";
// Utilities
import { changeTitle } from "@/utils/browser.utils";
// Components
import PostDetailComponent from "@/components/PostDetailComponent.vue";
// Types
import type { PostType } from "@/types/post";
import type { UserType } from "@/types/user";

export default Vue.extend({
  name: "PostDetailView",
  components: { PostDetailComponent },
  data() {
    return { post: {} as PostType, user: {} as UserType, show: false };
  },
  mounted() {
    this.refresh();
  },
  watch: {
    post() {
      this.loadUser();
    },
    $route() {
      this.refresh();
    },
  },
  methods: {
    loadUser() {
      this.user = store.getters.userByPostId(this.$route.params.postId);
    },
    loadPost() {
      this.post = store.getters.postById(this.$route.params.postId);
      changeTitle(this.post.title);
    },
    shouldShow() {
      this.show = Boolean(this.post?.id) && Boolean(this.user?.id);
    },
    refresh() {
      this.show = false;
      this.loadPost();
      this.loadUser();
      this.shouldShow();
    },
  },
});
</script>

<template>
  <div class="page__post-detail px-3">
    <PostDetailComponent v-if="show" :post="post" :user="user" />
  </div>
</template>

<style scoped>
.post-detail__body {
  max-width: 800px;
  margin: auto;
}
</style>
