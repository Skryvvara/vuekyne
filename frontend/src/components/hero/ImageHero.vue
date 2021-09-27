<template>
<div :class="reverse ? 'image-hero reverse' : 'image-hero'">
  <div class="image-hero-text">
      <slot name="text"></slot>
  </div>
  <div class="image-hero-image">
      <img :class="{'hide-on-mobile': hideOnMobile}" :src="imageSrc" :alt="imageAlt">
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name:"ImageHero",
  props: {
    imageSrc: String,
    imageAlt: String,
    reverse: Boolean,
    hideOnMobile: Boolean,
  }
});
</script>

<style lang="scss">
.image-hero {
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;
}

.image-hero-text {
  padding: 2.5em 0;
  height: 100%;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1, h2, h3 {
    font-size: 2rem;
    letter-spacing: 0.05ch;
    margin-bottom: 3px;
  }

  p {
    font-size: 1.25rem;
    color: var(--colour-gray-300);
    margin-bottom: 6px;
  }
}

.hide-on-mobile {
    display: none;
  }

@media only screen and (min-width: 600px) {
  .image-hero {
    grid-template-columns: repeat(2, 1fr);
    &.reverse {
      .image-hero-image {
        grid-column: 1;
        grid-row: 1;
      }
    }
  }

  .hide-on-mobile {
    display: block;
  }

  .image-hero-image {
    grid-column: 2;
    grid-row: 1;
  }

  .image-hero-text {
    text-align: left;
    align-items: flex-start;

    h1, h2, h3 { 
      font-size: 2.25rem;
      margin-bottom: 6px;
    }
    p {
      font-size: 1.45rem;
      margin-bottom: 12px;
    }
  }
}
</style>