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
  computed: {
    post(): PostType {
      const post = store.getters.postById(this.$route.params.postId);
      return post;
    },
    show(): boolean {
      return Boolean(this.post) && Boolean(this.user);
    },
  },
  data() {
    return { user: {} as UserType };
  },
  mounted() {
    this.user = store.getters.userByPostId(this.$route.params.postId);
    changeTitle(this.post.title);
  },
  watch: {
    post(post) {
      this.user = store.getters.userByPostId(post.id);
      changeTitle(post.title);
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
