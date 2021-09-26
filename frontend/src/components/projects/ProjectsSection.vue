<template>
<base-section :sectionTitle="'My Projects'" :id="'projects'">
  <div class="wrapper">
    <div class="project-grid">
      <project-card v-for="repository in repositories" :key="repository.id" :repository="repository"></project-card>
    </div>
  </div>
  <svg xmlns="http://www.w3.org/2000/svg" class="divider divider-light" viewBox="0 0 1920 240">
    <path d="M0 0c62.028 23.301 207.726 31.062 355.345 10.956 194.93-26.548 329.274 58.551 412.36 95.275 113.991 50.379 161.026 36.177 242.491 47.604 81.464 11.428 80.28 30.32 167.409 35.339 99.802 5.746 258.527-51.115 385.457-10.565 156.954 50.136 300.814-6.06 356.938 1.225V240H0V0z"/>
  </svg>
</base-section>
</template>

<script lang="ts">
import { AxiosError, AxiosResponse } from "axios";
import { defineComponent } from "vue";
import { GithubRepository } from "../../interfaces/githubRepository.interface";
import BaseSection from "../base/BaseSection.vue";
import ProjectCard from "./ProjectsSectionCard.vue";

export default defineComponent({
  name: "ProjectGrid",
  components: {
    BaseSection,
    ProjectCard
  },
  data() {
    return {
      repositories: [] as GithubRepository[],
    }
  },
  mounted() {
    this.axios.get('/api/repos')
      .then((res: AxiosResponse) => res.data)
      .then((res: GithubRepository[]) => {
        this.repositories = res;
      })
      .catch((err: AxiosError) => {
        console.log(err);
      });
  }
});
</script>

<style scoped lang="scss">
.project-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  margin-bottom: 15px;
}

@media only screen and (min-width: 600px) {
  .project-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media only screen and (min-width: 1200px) {
  .project-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
