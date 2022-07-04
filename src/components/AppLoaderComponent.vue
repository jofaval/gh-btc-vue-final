<script lang="ts">
// Vendors
import Vue from "vue";

export default Vue.extend({
  name: "AppLoaderComponent",
  props: {
    title: { type: String, default: "Loading..." },
  },
});
</script>

<template>
  <div class="loader__container">
    <div class="loader m-3 mx-5">
      <b-spinner variant="success" type="grow" label="Spinning"></b-spinner>
      <div class="loader__title h1">{{ title }}</div>
      <small class="loader__disclaimer h5"
        >This may take some time, usually just a couple of seconds.</small
      >
      <div class="loader__content">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.loader__container {
  background: linear-gradient(
    to top right,
    var(--main-bg-first-color),
    var(--main-bg-second-color)
  );
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
</style>
