<template>
<a :href="href" :target="target" :class="secondary ? 'btn btn-secondary' : 'btn'"><slot></slot></a>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseButton",
  props: {
    href: String,
    target: String,
    secondary: Boolean,
  }
});
</script>

<style scoped lang="scss">
.btn {
    width: max-content;
    text-decoration: none;
    padding: 8px 10px;
    font-weight: bold;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    color: var(--colour-gray-900);
    background: var(--colour-app-green);
    border: 1px solid var(--colour-app-green);
    border-radius: 4px;

    transition: all 150ms ease-in-out;
}
.btn:hover {
    background: var(--colour-app-green-900);
    border: 1px solid var(--colour-app-green-900);
}

.btn-secondary {
    color: var(--colour-gray-900);
    background: var(--colour-app-green-900);
    border: 1px solid var(--colour-app-green-900);
}
.btn-secondary:hover {
    color: var(--colour-gray-300);
    background: var(--colour-app-green);
    border: 1px solid var(--colour-app-green);
}

@media only screen and (min-width: 600px) {
    .btn {
        padding: 6px 10px;
    }
}
</style>
