<script lang="ts">
// Vendors
import Vue from "vue";

export default Vue.extend({
  name: "HomeView",
  components: {},
});
</script>

<template>
  <div class="page__home w-100 h-100 py-3">
    <b-row class="home__logos text-center">
      <div class="home__logo__container col-md m-auto">
        <img
          class="home__logo geekshubs-logo"
          alt="Geekshubs Academy logo"
          src="@/assets/geekshubs.svg"
        />
      </div>
    </b-row>
    <b-container class="home__body__container text-center">
      <div class="home__body">
        <p class="home__text">
          This was a project developed as part of a Bootcamp "Frontend in Vue".
        </p>
        <h3 class="home__body__subtitle h3">Objective</h3>
        <p class="home__text">
          The main objective is to develop a webapp using vue. And also to
          develop a frontend project from start to finish.
        </p>
        <h3 class="home__body__subtitle h3">Technical Goals</h3>
        <ul class="text-left offset-sm-2">
          <li>Use Vue as the main frontend framework, Vue 2 to be specific.</li>
          <li>Route the pages, for that, we'll use Vue Router.</li>
          <li>Use axios to fetch information, VueAxios if possible.</li>
          <li>
            As to store information in memory, we'll use vuex, a
            state-management library for vue.
          </li>
          <li>Create custom components as we need them along the way.</li>
          <li>
            Use bootstrap or a similar library, tailwind may be an option, but
            bootstrap is far more popular
          </li>
          <li>Use BEM (Block__Element--Modifier).</li>
        </ul>
        <h3 class="home__body__subtitle h3">Disclaimer</h3>
        <p class="home__body__text">
          I do not own any of the data presented, therefore all the credit goes
          to it's rightful author
          <b-link href="https://github.com/typicode">typicode</b-link>.
        </p>
      </div>
    </b-container>
  </div>
</template>

<style scoped>
.home__logo {
  max-height: 150px;
}

#app.dark .home__logo {
  filter: brightness(10);
}

#app.light .home__logo {
  filter: brightness(0);
}
</style>
