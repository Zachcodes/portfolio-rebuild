<template>
  <div class="portfolio-mini-container" 
       v-on:mouseover="checkHover"
       v-on:mouseout="checkHover">
    <div class="portfolio-mini-container-film" ref="film">
        <router-link :to="{name: 'project', query: {projectName: projectName, projectId: projectId}}">
            <button class="view-more-button" 
            ref="viewMore"
            >View More</button>
        </router-link>
    </div>
    <img :src="image" class="portfolio-mini"/>
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
      }
  },
  data() {
      return {
          imageClass: {
              backgroundImage: `url(${this.$props.image})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center center',
              backgroundSize: 'auto 100%'
          },
          image: this.$props.image
      }
  }
}
</script>

<style>
.portfolio-mini-container {
    height: 500px;
    width: 800px;
    background-color: white;
    margin: 20px;
    position: relative;
    border: 1px solid white;
    box-shadow: 1.5px 2px 2px black;
}
.portfolio-mini-container a {
    text-decoration: none;
}
.view-more-button {
    position: relative;
    background-color: white;
    color: white;
    background-color: transparent;
    border: 1px solid white;
    border-radius: 10px;
    font-family: 'Nunito Sans', sans-serif;
    font-weight: bold;
    letter-spacing: 6px;
    font-size: 16px;
    display: none;
}
.view-more-button:hover {
    color: black;
    background-color: white;
    border: 1px solid white;
    border-radius: 10px;
    font-family: 'Nunito Sans', sans-serif;
    outline: none;
    box-shadow: 1px 2px 2px black;
    cursor: pointer;
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
.portfolio-mini {
    height: 100%;
    width: 100%;
}
@media (max-width: 1000px) {
    .portfolio-mini-container {
        height: 450px;
    }
}

@media (max-width: 800px) {
    .portfolio-mini-container {
        width: 100%;
        height: 500px;
        border-left: none;
        border-right: none;
    }
}
</style>