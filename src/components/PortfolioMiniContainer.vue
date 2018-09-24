<template>
  <div class="portfolio-mini-container" v-on:mouseover="setHover">
    <router-link :to="{name: 'project', query: {projectName: projectName, projectId: projectId}}"><button class="view-more-button" ref="viewMore">View More</button></router-link>
    <div class="portfolio-mini-container-film" ref="film"></div>
  </div>
</template>

<script>
export default {
  name: 'portfolioMiniContainer',
  props: ['projectId', 'projectName'],
  methods: {
      setHover() {
          let {film, viewMore} = this.$refs;
          film.classList.add('show-on-hover')
          viewMore.classList.add('show-on-hover')
      }
  }
}
</script>

<style>
.portfolio-mini-container {
    height: 175px;
    width: 300px;
    background-color: white;
    margin-bottom: 20px;
    position: relative;
}
.view-more-button {
    display: none;
}
.portfolio-mini-container-film {
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: grey;
    display: none;
}
.show-on-hover {
    display: inline-block;
}
</style>