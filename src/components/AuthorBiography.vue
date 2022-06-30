<script lang="ts">
export default {
  props: {
    bio: { type: String, required: true },
  },
};
</script>

<template>
  <p class="author__biography">{{ bio }}</p>
</template>

<style scoped>
.author__biography {
  text-align: justify;
  text-align-last: center;
  font-style: italic;
  max-width: 250px;
}
</style>
