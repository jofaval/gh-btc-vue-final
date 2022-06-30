<script lang="ts">
export default {
  props: {
    bio: { type: String, required: true },
  },
};
</script>
<template>
  <p>{{ bio }}</p>
</template>
