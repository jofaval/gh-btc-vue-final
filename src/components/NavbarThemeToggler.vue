<script lang="ts">
// Vendors
import Vue from "vue";
// Utilities
import { capitalize } from "@/utils/string.utils";
import { getPreferredTheme } from "@/utils/theme.utils";
// Store
import store from "@/store";

export default Vue.extend({
  name: "NavbarThemeToggler",
  data() {
    return {
      checked: false,
      theme: "",
    };
  },
  computed: {
    oppositeTheme(): string {
      let themeAsString = store.getters.oppositeTheme();

      // Capitalizes the word
      themeAsString = capitalize(themeAsString);

      return themeAsString;
    },
  },
  methods: {
    toggleTheme() {
      /* DOM option, it's better to refactor it as a method,
        even better, to a state mutation so that it can be computed */
      // const app: HTMLElement = document.querySelector("#app") ?? document.body;
      // app.classList.toggle(themeConstants.THEMES.LIGHT);
      // app.classList.toggle(themeConstants.THEMES.DARK);
      store.dispatch("toggleTheme");
    },
  },
  mounted() {
    this.checked = store.getters.theme() !== getPreferredTheme();
  },
});
</script>

<template>
  <div
    class="theme-toggler__container custom-control custom-switch d-none d-md-block"
  >
    <b-form-checkbox
      id="theme-toggler"
      v-model="checked"
      name="theme-toggler"
      class="theme-toggler"
      v-on:change="toggleTheme"
      switch
      button-variant="success"
      size="sm"
    >
      Convert to {{ oppositeTheme }}
    </b-form-checkbox>
  </div>
</template>

<style>
.theme-toggler__container {
  position: fixed;
  top: 2rem;
  /* right: max(calc(calc(100vh - var(--max-width)) / 2), 1rem); */
  right: max(calc(calc(100vw - var(--max-width)) / 2 + 2rem), 1rem);
}

.theme-toggler__label {
  padding: 0.5rem;
}

/** Theme toggler switch, Boostrap override */

.theme-toggler .custom-control-label::before {
  background-color: transparent;
}

.theme-toggler .custom-control-input:checked ~ .custom-control-label::before {
  color: #fff;
  border-color: var(--tertiary-text-color) !important;
  background-color: var(--tertiary-text-color) !important;
}

.custom-control-input:focus ~ .custom-control-label::before {
  box-shadow: 0 0 0 0.2rem rgba(0, 255, 21, 0.25);
}

.custom-control-input:focus:not(:checked) ~ .custom-control-label::before {
  border-color: #80ff9c;
}
</style>
