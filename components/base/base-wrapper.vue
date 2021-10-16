<template>
<div class="wrapper">
  <slot></slot>
</div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "base-wrapper"
});
</script>

<style scoped lang="scss">
.wrapper {
  height: 100%;
  width: 100%;
  max-width: 1440px;
  padding: 0 10px;
  margin: 0 auto;
}
</style>
