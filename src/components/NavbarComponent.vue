<script lang="ts">
// Vendors
import Vue from "vue";
// Constants
import routeConstants from "@/router/constants/router.constants";
import pathsConstants from "@/router/constants/paths.constants";
// Components
import NavbarThemeToggler from "./NavbarThemeToggler.vue";
import NavbarSearchbar from "./NavbarSearchbar.vue";

const { ROUTES, DISPLAYABLE } = routeConstants;
const visibleRoutes = ROUTES.filter(({ name }) =>
  DISPLAYABLE.includes(name ?? "")
);

export default Vue.extend({
  name: "NavbarComponent",
  data() {
    return { routes: visibleRoutes };
  },
  components: { NavbarThemeToggler, NavbarSearchbar },
  computed: {
    homePath(): string {
      return pathsConstants.HOME;
    },
  },
});
</script>

<template>
  <div class="router__navbar-container mt-0 rounded w-100">
    <div class="router__navbar__logo__container d-none d-sm-block">
      <router-link to="/home" class="router__navbar__logo__link">
        <img
          class="router__navbar__logo"
          alt="Vue logo"
          src="@/assets/logo.png"
        />
      </router-link>
    </div>

    <nav class="router__navbar">
      <router-link
        v-for="(route, index) in routes"
        :key="index"
        :to="route.path"
        class="router__navbar__link mr-auto"
        >{{ route.name }}</router-link
      >
    </nav>

    <NavbarSearchbar />
    <NavbarThemeToggler />
  </div>
</template>

<style scoped>
.router__navbar-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  align-items: center;
  padding: 0 1.5rem;
  box-shadow: 0 10px 15px var(--glow-shadow);
  max-width: var(--max-width);
  margin: auto;
}

.router__navbar {
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.router__navbar .router__navbar__link {
  font-weight: bold;
  color: var(--secondary-text-color);
}

.router__navbar .router__navbar__link.router-link-exact-active {
  color: var(--tertiary-text-color);
}

.router__navbar__logo {
  max-height: 50px;
}
</style>
