<script lang="ts">
// Vendors
import { dLog } from "@/utils/global.utils";
import Vue from "vue";

// With some help from: https://medium.com/js-dojo/error-exception-handling-in-vue-js-application-6c26eeb6b3e4
// And mostly the react's abstraction of this idea
export default Vue.extend({
  name: "ErrorBoundary",
  props: {
    /** The error message to display */
    errorMessage: { type: String, default: "Ooops! Something failed." },
    /** If the error will continue upwards */
    shouldPropagate: { type: Boolean, default: false },
    /** The extra CSS classes that may be added to the container */
    cssClass: { type: String, default: "" },
  },
  data() {
    return {
      /** Was there an error inside the nested components? */
      hasError: false,
    };
  },
  errorCaptured(err, vm, info) {
    dLog("An unhandled error happened", err, vm, info);
    // eslint-disable-next-line
    vm.$data.hasError = true;

    return vm.$data.shouldPropagate;
  },
});
</script>

<template>
  <div :class="`error-boundary__container ${cssClass}`">
    <div :class="`error-boundary ${cssClass}`">
      <div class="error-boundary--failure" v-if="error">
        <div class="error-boundary--failure__message">
          {{ errorMessage }}
        </div>
      </div>
      <div class="error-boundary--success" v-else>
        <slot />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.error-boundary {
  &,
  &__container,
  &--failure,
  &--success {
    width: 100%;
    height: 100%;
  }

  &--failure {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
}
</style>
