<!-- I would have loved to add the functionality
of hiding the results when clicking outside of the search bar,
but it turned out to be a little too complex for my current skill level -->
<!-- https://thewebdev.info/2021/05/17/how-to-detect-clicks-outside-an-element-with-vue-js/ -->

<script lang="ts">
// Vendors
import Vue from "vue";
// Store
import store from "@/store";
// Types
import type { PlaceholderSearchType } from "@/store/modules/placeholder.module";
// Components
import NavbarSearchbarResults from "./NavbarSearchbarResults.vue";

export default Vue.extend({
  name: "NavbarSearchbar",
  components: { NavbarSearchbarResults },
  computed: {
    results(): PlaceholderSearchType {
      return store.getters.search(this.searchText);
    },
  },
  data() {
    return {
      searchText: "",
      showResults: false,
    };
  },
  watch: {
    searchText(searchText: string) {
      this.showResults =
        Boolean(searchText) &&
        (this.results.posts.length >= 1 || this.results.users.length >= 1);
    },
    $route() {
      this.showResults = false;
    },
  },
  methods: {
    searched() {
      this.showResults = false;
    },
    focus() {
      this.showResults = this.searchText.length >= 1;
    },
  },
});
</script>

<template>
  <div class="navbar__searchbar__container d-none d-sm-block">
    <b-form-input
      class="navbar__searchbar"
      type="search"
      v-model="searchText"
      v-on:click="focus"
      v-on:input="focus"
      v-on:focus="focus"
    ></b-form-input>
    <NavbarSearchbarResults
      v-if="showResults"
      :searched="searched"
      :results="results"
    />
  </div>
</template>

<style scoped>
.navbar__searchbar__container {
  background: var(--main-bg-first-color);
}

.navbar__searchbar {
  background: hsla(0, 0%, 81%, 0.176);
  border-color: hsla(0, 0%, 67%, 0.353);
  color: var(--primary-text-color);
}
</style>
