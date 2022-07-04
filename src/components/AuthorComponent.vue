<script lang="ts">
// Vendors
import Vue from "vue";
// Components
import AuthorBiography from "./AuthorBiography.vue";
import AuthorProfile from "./AuthorProfile.vue";

export default Vue.extend({
  name: "AuthorView",
  data() {
    return {
      authorImgSource: "@/assets/jofaval.jpg",
    };
  },
  components: { AuthorBiography, AuthorProfile },
});
</script>

<template>
  <div class="author">
    <AuthorProfile />
    <AuthorBiography
      bio="Software Engineer with Full Stack experience, currently working as a Frontend Developer."
    />
  </div>
</template>

<style scoped>
.author {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
