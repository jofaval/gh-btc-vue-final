<script lang="ts">
// Vendors
import Vue from "vue";
// Components
import FormularyComponent from "@/components/FormularyComponent.vue";

export default Vue.extend({
  name: "ContactView",
  components: { FormularyComponent },
});
</script>

<template>
  <div class="page__contact w-100 pt-sm-4 rounded">
    <FormularyComponent />
  </div>
</template>

<style scoped></style>
