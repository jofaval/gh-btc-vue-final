<script lang="ts">
// Vendors
import Vue from "vue";
// Store
import store from "./store";
// Services
import { getPosts } from "./serivces/posts.services";
import { getUsers } from "./serivces/users.services";
// Types
import type { PostType } from "./types/post";
import type { UserType } from "./types/user";

console.log("App booting up");

export default Vue.extend({
  data() {
    return {
      posts: [] as PostType[],
      users: [] as UserType[],
      loaded: false,
    };
  },
  async mounted() {
    this.posts = await getPosts();
    store.commit("loadPosts", this.posts);

    this.users = await getUsers();
    store.commit("loadUsers", this.users);

    console.log("App booted!", {
      posts: this.posts.length,
      users: this.users.length,
    });

    this.loaded = true;
  },
});
</script>

<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
