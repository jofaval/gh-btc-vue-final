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
      this.refresh();
    },
  },
  methods: {
    loadUser() {
      this.user = store.getters.userByPostId(this.$route.params.postId);
    },
    loadPost() {
      this.post = store.getters.postById(this.$route.params.postId);
    },
    shouldShow() {
      this.show = Boolean(this.post) && Boolean(this.user);
    },
    refresh() {
      console.log("monta aquí y verás madrid", this.post, this.user);

      this.show = false;
      this.loadUser();
      this.loadPost();
      changeTitle(this.post.title);
      this.shouldShow();
      console.log(
        "monta aquí y verás madrid",
        JSON.stringify(this.post),
        JSON.stringify(this.user)
      );
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
