<template>
  <div class="page__author">
    <AuthorComponent />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import AuthorComponent from "@/components/AuthorComponent.vue";

export default Vue.extend({
  name: "AuthorView",
  components: { AuthorComponent },
});
</script>
