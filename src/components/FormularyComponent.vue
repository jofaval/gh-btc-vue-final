<script lang="ts">
// Vendors
import Vue from "vue";
// Store
import store from "@/store";
// Utilities
import { dLog } from "@/utils/global.utils";
// Components
import FormularyInput from "./FormularyInput.vue";
import BaseButton from "./BaseButton.vue";
import FormularyFieldset from "./FormularyFieldset.vue";

export default Vue.extend({
  name: "FormularyComponent",
  components: { FormularyInput, BaseButton, FormularyFieldset },
  data() {
    return {
      show: true,
    };
  },
  methods: {
    onSubmit(event: Event) {
      event.preventDefault();
      dLog("Contact form submitted!", JSON.stringify(store.getters.form));
    },
    onReset(event: Event) {
      event.preventDefault();
      // Reset our form values
      store.commit("clearFormValues", "");

      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
  computed: {
    fullName(): string {
      return store.getters.fullName;
    },
    email(): string {
      return store.getters.email;
    },
    subject(): string {
      return store.getters.subject;
    },
    message(): string {
      return store.getters.message;
    },
    disabled(): boolean {
      return !(store.getters.isFormFilled() && store.getters.isFormValid());
    },
    checkFullName(): boolean {
      return this.fullName?.length < 1 || store.getters.checkFullName();
    },
    checkEmail(): boolean {
      return this.email?.length < 1 || store.getters.checkEmail();
    },
    checkSubject(): boolean {
      return this.subject?.length < 1 || store.getters.checkSubject();
    },
    checkMessage(): boolean {
      return this.message?.length < 1 || store.getters.checkMessage();
    },
  },
});
</script>

<template>
  <div class="formulary__container" v-if="show">
    <b-form
      class="formulary p-sm-5 rounded"
      @submit="onSubmit"
      @reset="onReset"
    >
      <FormularyFieldset legend="Contact information">
        <FormularyInput
          name="fullName"
          :value="fullName"
          label="Full name"
          :required="true"
          description="Identify your self with your name"
          :valid="checkFullName"
          invalidMessage="Name must not start with numbers nor contain any quotations."
        />
        <FormularyInput
          name="email"
          :value="email"
          type="email"
          label="E-Mail"
          :required="true"
          description="This email will be where we'll contact you."
          :valid="checkEmail"
          invalidMessage="Email must be in a valid format, ex: contact@example.com.es."
        />
      </FormularyFieldset>

      <FormularyFieldset legend="Details">
        <FormularyInput
          name="subject"
          :value="subject"
          label="Subject"
          :required="true"
          description="What it is that you want to contact us about? Make sure it's as descriptive as possible"
          :valid="checkSubject"
          invalidMessage="This field must not be empty."
        />
        <FormularyInput
          name="message"
          :value="message"
          type="textarea"
          label="Message"
          :required="true"
          description="Please explain into further detail upon what you mentioned. Make sure it's as descriptive as possible"
          :valid="checkMessage"
          invalidMessage="This field must not be empty."
        />
      </FormularyFieldset>

      <div class="formulary__submits mt-3 btn-group w-100">
        <!-- <BaseButton
          class="formulary__submits__submit"
          :disabled="disabled"
          disabledText="All fields must be filled before submitting, check that the email is properly formatted"
          >Submit</BaseButton
        > -->
        <BaseButton class="formulary__submits__submit" :disabled="disabled"
          >Submit</BaseButton
        >
        <div class="formulary__submits__submit__container btn">
          <b-button
            type="reset"
            class="formulary__submits__submit w-100"
            variant="outline-success"
            >Clear</b-button
          >
        </div>
      </div>
    </b-form>
  </div>
</template>

<style scoped>
.formulary {
  /* box-shadow: 0 0.5rem 1rem var(--glow-shadow); */
  border: thin solid rgba(175, 175, 175, 0.2);
}
</style>
