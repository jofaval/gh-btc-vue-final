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

<!-- Transition effect -->
<style scoped>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.nested-enter-active .inner,
.nested-leave-active .inner {
  transition: all 0.3s ease-in-out;
}

.nested-enter-from .inner,
.nested-leave-to .inner {
  transform: translateX(30px);
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
  max-height: 0vh;
  overflow: hidden;
}
</style>
