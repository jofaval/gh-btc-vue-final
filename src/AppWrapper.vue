<script lang="ts">
// Vendors
import Vue from "vue";
// Components
import NavbarComponent from "./components/NavbarComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import ErrorBoundary from "./components/ErrorBoundary.vue";
import AppContent from "./AppContent.vue";

export default Vue.extend({
  name: "AppWrapper",
  components: { NavbarComponent, FooterComponent, ErrorBoundary, AppContent },
  methods: {
    e() {
      throw new Error("error");
    },
  },
});
</script>

<template>
  <div class="app__wrapper">
    <NavbarComponent />
    <b-container class="app__content p-3">
      <ErrorBoundary
        errorMessage="The app content could not be loaded properly"
        cssClass="app__wrapper__error-boundary"
      >
        <AppContent />
      </ErrorBoundary>
    </b-container>
    <FooterComponent />
  </div>
</template>

<style lang="scss" scoped>
.app__wrapper {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 80px 1fr 80px;
  min-height: 100vh;
  overflow: hidden;
}
</style>
