<script lang="ts">
// Vendors
import Vue from "vue";

export default Vue.extend({
  name: "AuthorBiography",
  props: {
    bio: { type: String, required: true },
  },
});
</script>

<template>
  <p class="author__biography mt-3">{{ bio }}</p>
</template>

<style scoped>
.author__biography {
  text-align: justify;
  text-align-last: center;
  font-style: italic;
  max-width: 250px;
}
</style>
