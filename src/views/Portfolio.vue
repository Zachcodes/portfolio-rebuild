<template>
  <div class="portfolio-main-container">
    <PortfolioMiniContainer v-for="project in projects"
    :key="project.id"
    :projectId="project.id"
    :projectName="project.name"
    ></PortfolioMiniContainer>
    <SocialMediaContainer/>
  </div>
</template>

<script>
import SocialMediaContainer from '../components/SocialMediaContainer.vue'
import PortfolioMiniContainer from '../components/PortfolioMiniContainer.vue'

export default {
  name: 'portfolio',
  components: {
    SocialMediaContainer,
    PortfolioMiniContainer
  },
  data() {
    return {
      projects: [
        {
          id: 1,
          name: 'test1'
        },
        {
          id: 2,
          name: 'test2'
        },
        {
          id: 3,
          name: 'test3'
        },
        {
          id: 4,
          name: 'test4'
        }
      ]
    }
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
</style>