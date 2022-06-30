<template>
  <div class="author">
    <AuthorProfile />
    <AuthorBiography
      bio="Software Engineer with Full Stack experience, currently working as a Frontend Developer."
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import AuthorBiography from "@/components/AuthorBiography.vue";
import AuthorProfile from "@/components/AuthorProfile.vue";

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

<style scoped>
.author {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
