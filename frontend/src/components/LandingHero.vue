<template>
<base-section class="landing-hero-section" :id="'home'">
  <div class="wrapper">
    <image-hero :imageSrc="require('../assets/design_collaboration.svg')" :imageAlt="'People designing a software'" :reverse="false">
      <template v-slot:text>
        <h1>Hi there! My name is Dimitri and I'm a <span class="app-text">Web Developer</span>.</h1>
        <p>I create lightning fast backend, frontend and database solutions! </p>
        <base-button :href="'#about'">Learn More</base-button>
      </template>
    </image-hero>
  </div>
  <svg xmlns="http://www.w3.org/2000/svg" class="divider" viewBox="0 0 1440 120">
    <path d="M1440 21.21V120H0V21.21C120 35.07 240 42 360 42s240-6.93 360-20.79c88.328-8.794 154.574-14.333 198.738-16.618A3120.562 3120.562 0 0 1 1080 .42c120 0 240 6.93 360 20.79z"/>
  </svg>
</base-section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseSection from "./base/BaseSection.vue";
import BaseButton from "./base/BaseButton.vue";
import ImageHero from "./hero/ImageHero.vue"

export default defineComponent({
    name: "LandingHero",
    components: {
      BaseSection,
      BaseButton,
      ImageHero
    }
})
</script>

<style scoped lang="scss">

</style>
