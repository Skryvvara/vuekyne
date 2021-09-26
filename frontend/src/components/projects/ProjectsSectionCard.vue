<template>
<div class="project-card">
  <div class="project-card-timestamps">
    <p class="timestamp" :title="'Created at ' + createdAtString"><plus-circle-icon></plus-circle-icon>{{ createdAtString }}</p>
    <p class="timestamp" :title="'Updated at ' + updatedAtString"><refresh-icon></refresh-icon>{{ updatedAtString }}</p>
  </div>

  <div class="project-card-title">
    {{ repository.name }}
  </div>

  <div class="project-card-description">
    {{ repository.description }}
  </div>

  <div class="project-card-footer">
    <ul class="project-card-languages">
      <li v-for="language in repository.languages" :key="language" :class="'project-card-lang project-card-lang-'+language">{{ language }}</li>
    </ul>

    <div class="project-card-buttons">
      <base-button :href="repository.html_url" :target="'_BLANK'"><code-icon class="btn-icon"></code-icon>Source</base-button>
      <base-button v-if="repository.homepage" :href="repository.homepage" :target="'_BLANK'" :secondary="true"><globe-icon class="btn-icon"></globe-icon>Live</base-button>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { GithubRepository } from "../../interfaces/githubRepository.interface"
import BaseButton from "../base/BaseButton.vue";
import { CodeIcon, PlusCircleIcon, RefreshIcon, GlobeAltIcon as GlobeIcon } from "@heroicons/vue/solid";

export default defineComponent({
  name: "ProjectCard",
  props: {
    repository: Object as () => GithubRepository,
  },
  data() {
    return {
      createdAtString: "",
      updatedAtString: "",
    }
  },
  mounted() {
    if (this.repository != null) {
      this.createdAtString = new Date(this.repository.created_at).toLocaleString('de');
      this.updatedAtString = new Date(this.repository.updated_at).toLocaleString('de');
    }
  },
  components: {
    BaseButton,
    CodeIcon,
    PlusCircleIcon,
    RefreshIcon,
    GlobeIcon
  },
});
</script>

<style scoped lang="scss">
.project-card {
  background: var(--colour-gray-800);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  box-shadow: 0.25rem 0.25rem 0.25rem rgba(0, 0, 0, 0.5);

  .project-card-timestamps {
    padding: 10px 10px 0 10px;
    color: var(--colour-gray-400);
    display: flex;
    margin-bottom: 4px;

    .timestamp {
      padding: 1px 2px;
      margin-right: 4px;
      font-size: 0.75rem;
      display: flex;
      align-items: center;
      background: var(--colour-gray-700);
      border-radius: 2px;

      svg {
        font-size: inherit;
        height: 12px;
        margin-right: 2px;
      }
    }
  }

  .project-card-title {
    font-size: 1.25rem;
    font-weight: bold;
    padding: 0 10px 6px 10px;
    margin-bottom: 4px;
  }

  .project-card-languages {
    padding: 0 10px;
    display: flex;
    list-style: none;
    margin-bottom: 6px;

    .project-card-lang {
      font-size: 0.75rem;
      padding: 4px;
      color: var(--colour-gray-300);
      background: var(--colour-gray-700);
      border-radius: 2px;
      
      &:not(:last-child) {
        margin-right: 4px;
      }
    }
  }

  .project-card-description {
    padding: 0 10px;
    font-size: 0.9rem;
    color: var(--colour-gray-350);
    margin-bottom: 12px;
  }

  .project-card-footer {
    margin-top: auto;

    .project-card-buttons {
      display: flex;

      a {
        width: 100%;
        padding: 10px;
        border-radius: 0;
        
        &:first-of-type {
          border-bottom-left-radius: 4px;
        }

        &:last-of-type {
          border-bottom-right-radius: 4px;
        }
      }
    }
  }
}

.btn-icon {
  width: 20px;
  margin-right: 4px;
}
</style>
