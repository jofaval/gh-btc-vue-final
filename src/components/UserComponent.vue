<script lang="ts">
// Vendors
import Vue from "vue";
// Components
import PostsComponent from "./PostsComponent.vue";

// const START_PICTURE_ID = 0;
// const START_PICTURE_ID = 420;
const START_PICTURE_ID = 42;

export default Vue.extend({
  name: "UserComponent",
  props: {
    user: { type: Object, required: true },
    posts: { type: Array, required: true },
  },
  components: { PostsComponent },
  data() {
    return {
      show: true,
    };
  },
  computed: {
    profilePicture(): string {
      const pictureId: number = START_PICTURE_ID + Number(this.user.id);
      return `https://picsum.photos/id/${pictureId}/512/512`;
    },
    profilePictureLabel(): string {
      return `Profile picture of ${this.user.name}`;
    },
  },
});
</script>

<template>
  <div class="user__container" v-if="show">
    <div class="user">
      <div class="user__profile-picture__container">
        <figure class="user__profile-picture__figure mr-sm-4">
          <img
            :src="profilePicture"
            :alt="profilePictureLabel"
            :title="profilePictureLabel"
            class="user__profile-picture"
          />
          <figcaption class="user__profile-picture__figcaption">
            {{ profilePictureLabel }}
          </figcaption>
        </figure>
      </div>

      <h1 class="user__title h1">{{ user.name }} - "{{ user.username }}"</h1>
      <p class="user__subtitle user__author p">
        Currently working at
        <span class="user__subtitle__company__name">{{
          user.company.name
        }}</span
        >,
        <span class="user__subtitle__company__catch-phrase">{{
          user.company.catchPhrase
        }}</span
        >.
      </p>

      <div class="user__contact-details my-3">
        <p class="user__contact-details__title h4">Contact details</p>
        <b-button
          size="sm"
          variant="success"
          class="user__email m-auto d-inline"
          :href="`mailto:${user.email}`"
          >Mail me!</b-button
        >
        &nbsp;Give me a call at
        <b-link :href="`tel:${user.phone}`">{{ user.phone }}</b-link
        >, or simply checkout my website,
        <b-link :href="`http://${user.website}`">{{ user.website }}</b-link
        >.
      </div>

      <div class="user__address__container mb-3">
        <p class="user__address__title h4">Address</p>
        <div class="user__address">
          {{ user.address.street }} - {{ user.address.suite }},
          {{ user.address.zipcode }}, {{ user.address.city }} (latitude:
          {{ user.address.geo.lat }}, longitude: {{ user.address.geo.lng }}).
        </div>
      </div>

      <div class="user__posts__container">
        <h4 class="user__posts__title h4">
          Posts by
          <span class="user__posts__title__name font-weight-bold">{{
            user.name
          }}</span>
        </h4>
        <div class="user__posts">
          <PostsComponent :posts="posts" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.user {
  text-align: left;
}

.user__profile-picture__figure,
.user__profile-picture {
  width: 250px;
  height: 250px;
  border-radius: 1.5rem;
  float: left;
}

.user__title {
  color: var(--tertiary-text-color);
  font-weight: bold;
}

.user__posts__title__name,
.user__subtitle__company__name {
  font-weight: bold;
  color: var(--tertiary-text-color);
}

@media screen and (max-width: 800px) {
  .user__profile-picture__figure {
    float: none;
    margin: auto;
    margin-bottom: 1.5rem;
  }

  .user {
    text-align: center;
  }
}
</style>
