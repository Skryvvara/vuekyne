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
  color: var(--colour-green-200);
  text-decoration: none;
  font-weight: bold;
  border-bottom: 1px solid transparent;
  transition: all 150ms ease-in-out;

  &:hover {
    color: var(--colour-green);
    border-color: var(--colour-green);
  }
}
</style>
