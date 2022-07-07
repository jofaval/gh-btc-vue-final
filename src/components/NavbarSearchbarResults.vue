<script lang="ts">
// Vendors
import Vue from "vue";
// Components
import PostDetailLink from "./PostDetailLink.vue";
import UserLink from "./UserLink.vue";

export default Vue.extend({
  name: "NavbarSearchbarResults",
  props: {
    results: { type: Object, required: true },
  },
  components: { PostDetailLink, UserLink },
  computed: {
    showPosts(): boolean {
      return this.results?.posts && this.results.posts?.length >= 1;
    },
    showUsers(): boolean {
      return this.results?.users && this.results.users?.length >= 1;
    },
  },
});
</script>

<template>
  <div v-if="results" class="navbar__searchbar__results__container">
    <div class="navbar__searchbar__results p-3 rounded">
      <div
        v-if="showPosts"
        class="navbar__searchbar__results__posts__container mb-3"
      >
        <p class="navbar__searchbar__results__posts__title h6">Posts</p>
        <div class="navbar__searchbar__results__posts">
          <div
            class="navbar__searchbar__results__post"
            v-for="(post, index) in results.posts"
            :key="index"
          >
            <PostDetailLink :post="post" :short="true" />
          </div>
        </div>
      </div>
      <div
        v-if="showUsers"
        class="navbar__searchbar__results__users__container mb-3"
      >
        <p class="navbar__searchbar__results__users__title h6">Users</p>
        <div class="navbar__searchbar__results__users">
          <div
            class="navbar__searchbar__results__user"
            v-for="(user, index) in results.users"
            :key="index"
          >
            <UserLink :short="true" :user="user" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.navbar__searchbar__results__container {
  position: relative;
}

.navbar__searchbar__results__posts,
.navbar__searchbar__results__users {
  display: flex;
  flex-direction: column;
}

.navbar__searchbar__results {
  position: absolute;
  z-index: 5;
  background: var(--main-bg-first-color);
  box-shadow: 0 10px 15px var(--glow-shadow);
}
</style>
