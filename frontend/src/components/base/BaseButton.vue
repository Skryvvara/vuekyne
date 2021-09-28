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
    padding: 10px 10px;
    font-weight: bold;
    letter-spacing: 0.025ch;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    color: var(--colour-green-100);
    background: var(--colour-green);
    border: 1px solid var(--colour-green);
    border-radius: 4px;

    transition: all 150ms ease-in-out;
}
.btn:hover {
    background: var(--colour-green-900);
    border: 1px solid var(--colour-green-900);
}

.btn-secondary {
    color: var(--colour-green-900);
    background: var(--colour-green-200);
    border: 1px solid var(--colour-green-200);
}
.btn-secondary:hover {
    color: var(--colour-green-100);
    background: var(--colour-green-900);
    border: 1px solid var(--colour-green-900);
}

@media only screen and (min-width: 600px) {
    .btn {
        padding: 6px 10px;
    }
}
</style>
