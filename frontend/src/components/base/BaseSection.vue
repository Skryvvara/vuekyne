<template>
<section class="base-section">
  <div class="wrapper" v-if="title">
    <h2 class="base-section-title">{{ title }}</h2>
  </div>
  <slot>

  </slot>
</section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseSection",
  props: {
    sectionTitle: String,
  },
  data() {
    return {
      title: "",
    }
  },
  mounted() {
    this.title = this.sectionTitle || "";
  }
});
</script>

<style scoped lang="scss">
.base-section {
  background: var(--colour-gray-900);

  &:nth-child(even) {
    background: var(--colour-gray-800);
  }

  &:last-of-type {
    padding-bottom: 15px;
  }
}

.base-section-title {
  font-size: 1.8rem;
  margin-top: 10px;
  margin-bottom: 16px;
}
.base-section-title::before {
  content: "#";
  color: var(--colour-gray-600);
  margin-right: 8px;
}
</style>
