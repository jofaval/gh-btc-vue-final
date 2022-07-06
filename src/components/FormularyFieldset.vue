<script lang="ts">
// Vendors
import Vue from "vue";

export default Vue.extend({
  name: "FormularyFieldset",
  props: {
    legend: { type: String, required: true },
  },
});
</script>

<template>
  <fieldset class="formulary__fieldset p-3 my-3 rounded">
    <span class="formulary__fieldset__legend legend">{{ legend }}</span>
    <slot />
  </fieldset>
</template>

<style scoped>
.formulary__fieldset {
  /* border: thin solid rgba(175, 175, 175, 0.2); */
  box-shadow: 0 0.5rem 1rem var(--glow-shadow);
  position: relative;
}

.formulary__fieldset__legend {
  position: absolute;
  top: -0.5rem;
  font-size: 1.15em;
  color: var(--tertiary-text-color);
}
</style>
