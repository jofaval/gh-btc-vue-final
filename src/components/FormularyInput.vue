<script lang="ts">
// Vendors
import Vue from "vue";
// Store
import store from "@/store";

export default Vue.extend({
  name: "FormularyInput",
  props: {
    type: { type: String, default: "text" },
    label: { type: String, default: "Label" },
    name: { type: String, required: true },
    cssClass: { type: String, default: "" },
    description: { type: String, default: "" },
    required: { type: Boolean, default: false },
    value: { type: String, required: true },
    valid: { type: Boolean, default: true },
    invalidMessage: { type: String, default: "" },
  },
  methods: {
    onValueChange(value: string) {
      store.commit("updateFormField", { field: this.name, value });
    },
  },
});
</script>

<template>
  <b-form-group
    :id="`${name}-form-group`"
    :label="label"
    :label-for="name"
    class="formulary__input__container"
    :description="description"
  >
    <b-form-textarea
      v-if="type === 'textarea'"
      :name="name"
      :id="name"
      :required="required"
      :value="value"
      @input="onValueChange"
      :class="`formulary__textarea ${cssClass} textarea ${
        !valid ? 'border-danger' : 'border-success'
      }`"
    ></b-form-textarea>

    <b-form-input
      v-else
      :type="type"
      :name="name"
      :id="name"
      :class="`formulary__input ${cssClass} ${type} w-100 ${
        !valid ? 'border-danger' : 'border-success'
      }`"
      :value="value"
      :required="required"
      @input="onValueChange"
      ref="formulary__input"
    />

    <small
      v-if="invalidMessage && !valid"
      class="formulary__input__invalid-msg form-text text-danger"
      >{{ invalidMessage }}</small
    >
  </b-form-group>
</template>

<style scoped>
.formulary__textarea,
.formulary__input {
  background: hsla(0, 0%, 81%, 0.176);
  border-color: hsla(0, 0%, 67%, 0.353);
  color: var(--primary-text-color);
}
</style>
