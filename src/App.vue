<script lang="ts">
// Vendors
import Vue from "vue";
// Store
import store from "./store";
// Components
import NavbarComponent from "./components/NavbarComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import AppLoaderComponent from "./components/AppLoaderComponent.vue";
// Services
import { getPosts } from "./serivces/posts.services";
import { getUsers } from "./serivces/users.services";
// Types
import type { PostType } from "./types/post";
import type { UserType } from "./types/user";

console.log("App booting up");

export default Vue.extend({
  components: { NavbarComponent, FooterComponent, AppLoaderComponent },
  // props: {
  //   theme: { type: String, default: themeConstants.DEFAULT_THEME },
  // },
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
  computed: {
    theme(): string {
      return store.getters.theme();
    },
  },
});
</script>

<template>
  <div id="app" :class="`app ${theme}`">
    <Transition name="fade">
      <div class="app__content" v-if="loaded">
        <NavbarComponent />
        <b-container class="app__container p-3">
          <Transition name="slide-fade">
            <router-view />
          </Transition>
        </b-container>
        <FooterComponent />
      </div>
      <AppLoaderComponent v-else />
    </Transition>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  justify-content: start;
  align-items: stretch;
  flex-direction: column;
}

.app__content {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 80px 1fr 80px;
  min-height: 100vh;
  overflow: hidden;
}

.app__container {
  /* height: 82.5vh; */
  /* max-height: 82.5vh; */
  overflow-y: auto;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
}
</style>

<!-- Transition effect -->
<style scoped>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.nested-enter-active .inner,
.nested-leave-active .inner {
  transition: all 0.3s ease-in-out;
}

.nested-enter-from .inner,
.nested-leave-to .inner {
  transform: translateX(30px);
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
