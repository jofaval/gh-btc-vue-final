<script lang="ts">
// Vendors
import Vue from "vue";
// Components
import AuthorComponent from "@/components/AuthorComponent.vue";

export default Vue.extend({
  name: "AuthorView",
  components: { AuthorComponent },
});
</script>

<template>
  <div class="page__author w-100 h-100">
    <AuthorComponent />
  </div>
</template>

<style>
.page__author {
  display: flex;
  justify-content: center;
}
</style>
