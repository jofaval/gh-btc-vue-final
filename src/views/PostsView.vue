<script lang="ts">
// Vendors
import Vue from "vue";
// Store
import store from "@/store";
// Components
import PostsComponent from "@/components/PostsComponent.vue";
// Types
import type { PostType } from "@/types/post";

export default Vue.extend({
  name: "PostsView",
  components: { PostsComponent },
  computed: {
    posts(): PostType[] {
      return store.getters.posts();
    },
  },
});
</script>

<template>
  <div class="page__posts w-100 h-100">
    <PostsComponent :posts="posts" />
  </div>
</template>

<style scoped>
.page__posts {
  display: flex;
  flex-direction: column;
}
</style>
