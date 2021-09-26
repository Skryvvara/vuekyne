<template>
<a :href="href" :target="target" :class="'app-link'"><slot></slot></a>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseLink",
  props: {
    href: String,
    target: String
  }
});
</script>

<style scoped lang="scss">
.app-link {
  color: var(--colour-app-green);
  text-decoration: none;
  font-weight: bold;
  border-bottom: 1px solid transparent;
  transition: all 300ms ease-in-out;

  &:hover {
    color: var(--colour-app-green-900);
    border-color: var(--colour-app-green-900);
  }
}
</style>
