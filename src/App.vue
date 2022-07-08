<script lang="ts">
// Vendors
import Vue from "vue";
// Store
import store from "./store";
// Components
import ErrorBoundary from "./components/ErrorBoundary.vue";
import AppWrapper from "./AppWrapper.vue";
import AppLoaderComponent from "./components/AppLoaderComponent.vue";
// Services
import { getPosts } from "./services/posts.services";
import { getUsers } from "./services/users.services";
// Types
import type { PostType } from "./types/post";
import type { UserType } from "./types/user";
// Utilities
import { dLog } from "./utils/global.utils";

// dLog("App booting up");

export default Vue.extend({
  name: "AppComponent",
  components: {
    AppLoaderComponent,
    ErrorBoundary,
    AppWrapper,
  },
  data() {
    return {
      posts: [] as PostType[],
      users: [] as UserType[],
      loaded: false,
      error: false,
    };
  },
  async mounted() {
    dLog("App booting up");

    this.posts = await getPosts();
    store.commit("loadPosts", this.posts);

    this.users = await getUsers();
    store.commit("loadUsers", this.users);

    dLog("App booted!", {
      posts: this.posts.length,
      users: this.users.length,
    });

    this.loaded = true;
  },
  errorCaptured() {
    // err, vm, info
    this.error = true;
  },
  computed: {
    theme(): string {
      return store.getters.theme();
    },
  },
});
</script>

<template>
  <ErrorBoundary
    errorMessage="This got out of control, try refreshing the page and if still doesn't work, open us a ticket :)."
    cssClass="app__error-boundary"
  >
    <div id="app" :class="`app ${theme}`">
      <Transition name="fade">
        <AppWrapper v-if="loaded" />
        <AppLoaderComponent v-else />
      </Transition>
    </div>
  </ErrorBoundary>
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
