<script lang="ts">
// Vendors
import Vue from "vue";

export default Vue.extend({
  name: "AppWrapper",
});
</script>

<template>
  <Transition name="slide-fade">
    <router-view />
  </Transition>
</template>

<style lang="scss" scoped>
.app__content {
  /* height: 82.5vh; */
  /* max-height: 82.5vh; */
  overflow-y: auto;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
}
</style>
