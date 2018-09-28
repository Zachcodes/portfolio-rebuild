<template>
  <div class="portfolio-main-container">
    <PortfolioMiniContainer v-for="project in projects"
    :key="project.id"
    :projectId="project.id"
    :projectName="project.name"
    :image="project.link"
    ></PortfolioMiniContainer>
    <SocialMediaContainer/>
  </div>
</template>

<script>
import SocialMediaContainer from '../components/SocialMediaContainer.vue'
import PortfolioMiniContainer from '../components/PortfolioMiniContainer.vue'
import axios from 'axios';

export default {
  name: 'portfolio',
  components: {
    SocialMediaContainer,
    PortfolioMiniContainer
  },
  data() {
    return {
      projects: []
    }
  },
  mounted() {
    axios.get(`/api/projects`).then(response => {
      this.projects = response.data
    })
  }
}
</script>

<style>
.portfolio-main-container {
  width: 100%;
  min-height: 80vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-top: 50px;
  padding-left: 25px;
  padding-right: 25px;
}
@media (max-width: 800px) {
  .portfolio-main-container {
    padding-left: 0px;
    padding-right: 0px;
  }
}
</style>