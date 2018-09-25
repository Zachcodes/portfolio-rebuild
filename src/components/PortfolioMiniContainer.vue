<template>
  <div class="portfolio-mini-container" 
       :style="imageClass" 
       v-on:mouseover="checkHover"
       v-on:mouseout="checkHover">
    <div class="portfolio-mini-container-film" ref="film">
        <router-link :to="{name: 'project', query: {projectName: projectName, projectId: projectId}}"><button class="view-more-button" ref="viewMore">View More</button></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'portfolioMiniContainer',
  props: ['projectId', 'projectName', 'image'],
  methods: {
      checkHover() {
          let {film, viewMore} = this.$refs;
          if(film.classList.contains('show-on-hover')) film.classList.remove('show-on-hover')
          else film.classList.add('show-on-hover')
          if(viewMore.classList.contains('show-on-hover')) viewMore.classList.remove('show-on-hover')
          else viewMore.classList.add('show-on-hover')
        //   if(!film.classList.contains('show-on-hover')) film.classList.add('show-on-hover')
        //   if(!viewMore.classList.contains('show-on-hover')) viewMore.classList.add('show-on-hover')
      }
  },
  data() {
      return {
          imageClass: {
              backgroundImage: `url(${this.$props.image})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'cover'
          }
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
    position: relative;
    background-color: white;
    z-index: 1000;
    display: none;
}
.portfolio-mini-container-film {
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: #80808069;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    display: none;
}
.show-on-hover {
    display: flex;
}
</style>