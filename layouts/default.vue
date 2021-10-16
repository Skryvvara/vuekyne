<template>
<div id="app">
  <main-header />
  <Nuxt />
  <main-footer />
</div>
</template>

<script lang="ts">
import Vue from "vue";
import MainFooter from "~/components/main-footer/main-footer.vue";
import MainHeader from "~/components/main-header/main-header.vue";

export default Vue.extend({
  components: { MainHeader, MainFooter },
  
});
</script>

<style scoped lang="scss">

</style>
