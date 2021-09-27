<template>
  <div id="app">
    <main-header></main-header>
    <landing-hero></landing-hero>
    <projects-section></projects-section>
    <about-me-section v-if="true"></about-me-section>
    <contact-section></contact-section>
    <main-footer></main-footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {
    LandingHero: defineAsyncComponent(() => import("./components/LandingHero.vue")),
    MainHeader: defineAsyncComponent(() => import("./components/MainHeader.vue")),
    MainFooter: defineAsyncComponent(() => import("./components/MainFooter.vue")),
    ProjectsSection: defineAsyncComponent(() => import("./components/projects/ProjectsSection.vue")),
    AboutMeSection: defineAsyncComponent(() => import("./components/about/AboutMeSection.vue")),
    ContactSection: defineAsyncComponent(() => import("./components/contact/ContactSection.vue"))
  }
});
</script>

<style lang="scss">
@import "./scss/main.scss";

:root {
  --colour-gray-50: #FAFAFA;
  --colour-gray-100: #F4F4F5;
  --colour-gray-200: #E4E4E7;
  --colour-gray-300: #D4D4D8;
  --colour-gray-350: #b9b9c0;
  --colour-gray-400: #A1A1AA;
  --colour-gray-500: #71717A;
  --colour-gray-600: #52525B;
  --colour-gray-700: #3F3F46;
  --colour-gray-800: #27272A;
  --colour-gray-850: #202022;
  --colour-gray-900: #18181B;
  --colour-gray-1000: #0F0F10;
  //--colour-app-green: #158566;
  --colour-app-green: hsl(163, 73%, 30%);
  --colour-app-green-100: hsl(163, 53%, 70%);
  --colour-app-green-200: hsl(163, 53%, 60%);
  --colour-app-green-900: hsl(163, 73%, 25%);
}

#app {
  background-color: var(--colour-gray-900);
  color: var(--colour-gray-50);
  fill: var(--colour-gray-50);
}
</style>
