<template>
  <div id="app">

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>

<style lang="scss">
:root {
  --colour-gray-50: #FAFAFA;
  --colour-gray-100: #F4F4F5;
  --colour-gray-200: #E4E4E7;
  --colour-gray-300: #D4D4D8;
  --colour-gray-400: #A1A1AA;
  --colour-gray-500: #71717A;
  --colour-gray-600: #52525B;
  --colour-gray-700: #3F3F46;
  --colour-gray-800: #27272A;
  --colour-gray-900: #18181B;

  --colour-app: #0071e3;
  --colour-success: #A3BE8C;
  --colour-error: #BF616A;
  --colour-warning: #EBCB8B;
}

#app {
  background-color: var(--colour-gray-900);
  color: var(--colour-gray-100);
}
</style>
