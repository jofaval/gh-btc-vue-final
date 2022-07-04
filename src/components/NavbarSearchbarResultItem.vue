<!-- This is a draft idea of what I wanted to sort of achieve,
but I do not know how to realize it at the moment bein -->
<!-- https://stackoverflow.com/questions/42992579/is-it-possible-to-pass-a-component-as-props-and-use-it-in-a-child-component-in-v -->

<script lang="ts">
// Vendors
import Vue from "vue";
// Utilities
import { capitalize } from "@/utils/string.utils";

export default Vue.extend({
  name: "NavbarSearchbarResultItem",
  props: {
    type: { type: String, required: true },
    // Component: { type: Object, required: true },
    items: { type: Array, required: true },
  },
  computed: {
    capitalizedType() {
      return capitalize(this.type);
    },
  },
});
</script>

<template>
  <div
    v-if="items?.length"
    :class="`navbar__searchbar__results__${type}__container`"
  >
    <p :class="`navbar__searchbar__results__${type}__title h6`">
      {{ capitalizedType }}
    </p>
    <div :class="`navbar__searchbar__results__${type}`">
      <!-- <Component v-for="(item, index) in items" :key="index" :item="item" /> -->
    </div>
  </div>
</template>
