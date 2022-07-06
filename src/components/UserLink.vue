<script lang="ts">
// Vendors
import Vue from "vue";

// Constants
export default Vue.extend({
  name: "UserLink",
  props: {
    user: { type: Object, required: true },
    short: { type: Boolean, default: false },
  },
});
</script>

<template>
  <router-link
    :to="{ name: 'User', params: { userId: user.id } }"
    :class="`user__link ${short ? 'short' : ''}`"
    >{{ user.name }}</router-link
  >
</template>

<style scoped>
.user__link.short {
  display: inline-block;
  max-width: 10rem;
  overflow-x: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.user__link {
  color: var(--tertiary-text-color);
}
</style>
