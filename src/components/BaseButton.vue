<script lang="ts">
// Vendors
import Vue from "vue";

export default Vue.extend({
  name: "BaseButton",
  props: {
    variant: { type: String, default: "primary" },
    disabled: { type: Boolean, default: false },
    disabledText: { type: String, default: "" },
  },
  computed: {
    display(): boolean {
      // Disabled for this project's purpose, for the moment being
      return this.disabled && !!this.disabledText;
    },
  },
});
</script>

<template>
  <div class="base-button__container btn">
    <b-button
      class="base-button"
      type="submit"
      :variant="`outline-${variant}`"
      :disabled="disabled"
      ><slot
    /></b-button>
    <small v-if="display" class="base-button__desc">{{ disabledText }}</small>
  </div>
</template>

<style scoped>
.base-button__container {
  display: flex;
  flex-direction: column;
  color: var(--primary-text-color);
}
</style>
