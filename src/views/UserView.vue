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
  components: { UserComponent },
  computed: {
    user(): UserType {
      return store.getters.userById(this.$route.params.userId);
    },
  },
  mounted() {
    this.posts = store.getters.postsByUser(this.$route.params.userId);
    changeTitle(this.user.name);
  },
  data() {
    return { posts: [] as PostType[], show: true };
  },
  watch: {
    user() {
      this.refresh();
    },
    post() {
      this.refresh();
    },
    $route() {
      this.refresh();
    },
  },
  methods: {
    refresh() {
      this.show = false;

      this.posts = store.getters.postsByUser(this.user.id);
      changeTitle(this.user.name);
      this.show = Boolean(this.user) && Boolean(this.posts?.length);
    },
  },
});
</script>

<template>
  <div class="page__user m-3">
    <UserComponent v-if="show" :user="user" :posts="posts" />
  </div>
</template>

<style scoped>
.user m-3__body {
  max-width: 800px;
  margin: auto;
}
</style>
