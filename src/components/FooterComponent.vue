<script lang="ts">
// Vendors
import Vue from "vue";
// Types
import type { SocialMediaType } from "@/types/footer";

// const socialMediaLinks: SocialMediaType[] = [
const socialMediaLinks: SocialMediaType[] = [
  {
    name: "Github",
    link: "https://github.com/jofaval",
  },
  {
    name: "LinkedIn",
    link: "https://linkedin.com/in/jofaval",
  },
];

export default Vue.extend({
  name: "FooterComponent",
  props: {
    year: { type: String, default: new Date().getFullYear().toString() },
    author: { type: String, default: "jofaval" },
    socialMediaLinks: {
      type: Array,
      default() {
        return socialMediaLinks;
      },
    },
  },
});
</script>

<template>
  <div class="footer__container">
    <footer id="footer" class="footer rounded">
      <div class="footer__links">
        <div class="footer__links__social-media-links">
          <a
            v-for="(socialMediaLink, index) in socialMediaLinks"
            :href="socialMediaLink.link"
            :key="index"
            class="footer__links__social-media-links__link"
            target="_blank"
            >{{ socialMediaLink.name }}</a
          >
        </div>
      </div>
      <div class="footer__credits">{{ author }} &copy; {{ year }}</div>
    </footer>
  </div>
</template>

<style scoped>
.footer {
  display: flex;
  max-width: var(--max-width);
  margin: auto;
  justify-content: center;
  padding: 2rem;
  box-shadow: 0 -10px 15px var(--glow-shadow);
}

.footer__links__social-media-links {
  display: flex;
  gap: 0.5rem;
  margin: 0 0.5rem;
}

.footer__links__social-media-links__link {
  color: var(--secondary-text-color);
}

.footer__credits {
  margin-left: auto;
}
</style>
