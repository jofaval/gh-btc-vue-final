<script lang="ts">
// Vendors
import Vue from "vue";
// Components
import UserLink from "./UserLink.vue";

export default Vue.extend({
  name: "PostDetailComponent",
  props: {
    post: { type: Object, required: true },
    user: { type: Object, required: true },
  },
  components: { UserLink },
  data() {
    return {
      show: true,
    };
  },
  mounted() {
    this.shouldShow();
  },
  watch: {
    post() {
      this.shouldShow();
    },
  },
  methods: {
    shouldShow() {
      this.show = Boolean(this.post) && Boolean(this.user);
    },
  },
});
</script>

<template>
  <div class="post-detail" v-if="show">
    <h1 class="post-detail__title h1">{{ post.title }}</h1>
    <h2 class="post-detail__subtitle post-detail__author h5" v-if="!!user">
      Created by: <UserLink :user="user" />
    </h2>

    <p class="post-detail__body">{{ post.body }}</p>
  </div>
</template>

<style scoped>
.post-detail__title {
  color: var(--tertiary-text-color);
  font-weight: bold;
}

.post-detail__body {
  max-width: 800px;
  padding: 2rem;
  margin: auto;
}
</style>
