<template>
<footer id="main-footer">
  <div class="wrapper">
    <div class="main-footer-text">
      <p>Made with ❤️ by <base-link :href="'https://darkyne.com'">Darkyne</base-link></p>
      <p>&copy; {{ new Date().getFullYear()}}</p>
    </div>
  </div>
</footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseLink from "./base/BaseLink.vue";

export default defineComponent({
  name: "MainFooter",
  components: {
    BaseLink,
  }
});
</script>

<style scoped lang="scss">
#main-footer {
  height: 4rem;
  background: var(--colour-gray-800);
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0 -0.15rem 0.35rem rgba(0, 0, 0, 0.25);

  .main-footer-text {
    height: 100%;
    font-size: 0.85rem;
    color: var(--colour-gray-300);
    display: block;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
