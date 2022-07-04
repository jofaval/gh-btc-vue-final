<script lang="ts">
// Vendors
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      alt: "no-image",
      title: "Author profile image",
    };
  },
});
</script>

<template>
  <div class="author__profile">
    <img
      class="author__profile__img"
      src="@/assets/jofaval.jpg"
      :alt="title"
      :title="title"
    />
  </div>
</template>

<style scoped>
:root {
  --img-size: 200px;
}

.author__profile__img {
  border-radius: 2.5rem;
  max-width: var(--img-size);
  max-height: var(--img-size);
  min-width: var(--img-size);
  min-height: var(--img-size);
}
</style>
