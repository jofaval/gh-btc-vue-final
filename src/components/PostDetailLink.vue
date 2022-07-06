<script lang="ts">
// Vendors
import Vue from "vue";

export default Vue.extend({
  name: "PostDetailLink",
  props: {
    post: { type: Object, required: true },
    short: { type: Boolean, default: false },
  },
});
</script>

<template>
  <router-link
    :to="{ name: 'Detail', params: { postId: post.id } }"
    :class="`post-detail__link ${short ? 'short' : ''}`"
    >{{ post.title }}</router-link
  >
</template>

<style scoped>
.post-detail__link.short {
  display: inline-block;
  max-width: 10rem;
  overflow-x: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.post-detail__link {
  color: var(--tertiary-text-color);
}
</style>
