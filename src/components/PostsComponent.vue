<script lang="ts">
// Vendors
import Vue from "vue";
// Types
import type { PostType } from "@/types/post";
// Components
import PostDetailLink from "./PostDetailLink.vue";

export default Vue.extend({
  name: "PostsComponent",
  props: {
    posts: { type: Array, required: true },
  },
  data() {
    return {
      currentPage: 1,
      currentPageElements: [] as PostType[],
      rows: 0,
      perPage: 0,
      mobile: false,
    };
  },
  components: { PostDetailLink },
  mounted() {
    const isMobile = window.outerWidth <= 600;
    this.mobile = isMobile;
    const perPage = isMobile ? 10 : 20;
    this.perPage = perPage;

    this.refresh();
  },
  watch: {
    currentPage() {
      this.refresh();
    },
    posts() {
      this.refresh();
    },
  },
  methods: {
    refresh() {
      this.rows = this.posts.length;
      const { perPage } = this;
      const start = (this.currentPage - 1) * this.perPage;
      const end = start + perPage;
      this.currentPageElements = this.posts.slice(start, end) as PostType[];
    },
  },
});
</script>

<template>
  <div class="posts py-3 w-100 h-100 d-flex bg-transparent">
    <b-card-group columns>
      <b-card
        v-for="(post, index) in currentPageElements"
        :key="index"
        class="posts__post shadow-sm border-0"
      >
        <PostDetailLink :post="post" />
      </b-card>
    </b-card-group>

    <b-pagination
      v-if="rows > perPage"
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      variant="dark"
      class="posts__pagination justify-self-bottom mt-sm-auto pb-4"
      align="center"
    ></b-pagination>
  </div>
</template>

<style>
.post-detail__body {
  max-width: 800px;
  padding: 2rem;
  margin: auto;
}

.posts {
  flex-direction: column;
}

.card,
.page-item:not(.active) .page-link {
  background: rgba(255, 255, 255, 0.01);
  color: var(--tertiary-text-color) !important;
  border: none;
}

.page-item.disabled {
  opacity: 0.25;
}

.page-link:not(.active) {
  background: rgba(255, 255, 255, 0.03);
  padding: 0.5rem;
  margin: 0 0.5rem;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 5px 10px var(--glow-shadow);
  display: flex !important;
  justify-content: center;
  align-items: center;
}

.page-item.active .page-link {
  background-color: var(--tertiary-text-color);
  border-color: var(--tertiary-text-color);
}

.posts__pagination {
  justify-self: bottom;
}

.posts__pagination .page-item:not(.active) .page-link {
  color: var(--tertiary-text-color) !important;
}
</style>
