<template>
<base-section :sectionTitle="'About me'" :id="'about'">
  <div class="wrapper">
    <image-hero :imageSrc="require('../../assets/server.svg')" :imageAlt="'Girl sitting in a server room'" :reverse="true">
      <template v-slot:text>
        <h3>I'm a <span class="app-text">Junior DevOps Specialist</span> at <span class="app-text">fintus GmbH.</span></h3>
        <p>With my job as a DevOps Specialist and my <strong>hobby web development</strong> I gain a lot of experience with both <strong>hardware technologies</strong> as well as <strong>software technologies</strong>.</p>
      </template>
    </image-hero>

    <image-hero :imageSrc="require('../../assets/website.svg')" :imageAlt="'Boy looking at different UI designs'" :reverse="false">
      <template v-slot:text>
        <h3><span class="app-text">Improving</span> my <span class="app-text">Skills</span> every day!</h3>
        <p>Working on apps, websites, apis, etc. I learn how to <strong>create better designs</strong> and how to use <strong>modern technology</strong> every day. This site is made with <strong>TypeScript</strong>, <strong>Vue.js</strong> and <strong>SCSS</strong> for example</p>
      </template>
    </image-hero>

    <image-hero :imageSrc="require('../../assets/project_completion.svg')" :imageAlt="'Girl showing completed Projects'" :reverse="true">
      <template v-slot:text>
        <h3><span class="app-text">Routine</span> and <span class="app-text">Organization</span>.</h3>
        <p>Having worked on a fair share of projects brought up <strong>routines</strong> in writing code. Paired with <strong>good organization</strong> projects are finished in no time!</p>
      </template>
    </image-hero>

    <image-hero :imageSrc="require('../../assets/risk_free.svg')" :imageAlt="'Girl showing completed Projects'" :reverse="false">
      <template v-slot:text>
        <h3><span class="app-text">Privacy</span> is a priority!</h3>
        <p>I'm very concerned with <strong>privacy</strong> and <strong>cybersecurity</strong> thus I'm not only collecting <strong>no data</strong> from you, I'm also keeping you and my website <strong>safe</strong>!</p>
      </template>
    </image-hero>
  </div>
  <svg class="divider" viewBox="0 0 2000 242" xmlns="http://www.w3.org/2000/svg"><path d="M2000 75.463c-230.631 73.429-431.99 108.499-604.064 105.196-293.434-5.632-485.998-145.823-954.537-150.568C272.956 28.385 125.825 50.689 0 96.996V242h2000V75.463z"></path></svg>
</base-section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseSection from "../base/BaseSection.vue";
import ImageHero from "../hero/ImageHero.vue";

export default defineComponent({
  name: "AboutMeSection",
  components: {
    BaseSection,
    ImageHero
  }
});
</script>

<style scoped lang="scss">
</style>
