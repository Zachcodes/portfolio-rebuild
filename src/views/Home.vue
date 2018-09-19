<template>
  <div class="home-main-container">
    <div class="home-position-container">
      <div class="home-title">Zachary Springer</div>
      <div class="home-sub-title">Web Design</div>
      <div class="home-carousel-container"> 
        <div class="home-carousel-text hidden fadein">{{currentCarouselValue}}</div>
        <div class="home-carousel-text fadeout">{{nextCarouselValue}}</div>
        <!-- <div class="home-carousel-text hidden">Creativity</div> -->
      </div>
    </div>
    <SocialMediaContainer/>
  </div>
</template>

<script>
import SocialMediaContainer from '../components/SocialMediaContainer.vue'

export default {
  name: 'home',
  components: {
    SocialMediaContainer
  },
  data() {
    return {
      carouselText: ['Simplified', 'Intuitive', 'Creative'],
      startingPosition: 0,
      nextPosition: 1
    }
  },
  computed: {
    currentCarouselValue() {
      return this.carouselText[this.startingPosition]
    },
    nextCarouselValue() {
      return this.carouselText[this.nextPosition]
    }
  },
  mounted() {
    setInterval(() => {
      this.startingPosition = this.startingPosition === 2 ? 0 : this.startingPosition + 1;
      this.nextPosition = this.nextPosition === 2 ? 0 : this.nextPosition + 1;
    }, 2000)
  }
}
</script>

<style>
.home-main-container {
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.home-position-container {
  width: 50%;
  height: 30%;
  display: flex;
  flex-direction: column;
  color: white;
  position: relative;
}
.home-title {
  height: 45%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
  text-shadow: 2px 2px 5px black;
  letter-spacing: 6px;
}
.home-sub-title {
  height: 30%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  text-shadow: 1px 1px 3px black;
  letter-spacing: 4px;
}
.home-carousel-container {
  height: 25%;
  width: 100%;
  display: flex;
  align-items: center;
}
.home-carousel-text {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  font-size: 20px;
  text-shadow: .5px .5px 1px black;
  letter-spacing: 2px;
  position: relative;
}
.hidden {
  /* display: none; */
  margin-right: auto;
}
.fadeout {
  animation-name: fadeout;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-delay: 2s;
  animation-fill-mode: forwards;
}
.fadein {
  opacity: 0;
  animation-name: fadein;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-delay: 2s;
  animation-fill-mode: forwards;
}
@keyframes fadein {
  0% {left: 0%; opacity: 0;}
  100% {left: 100%; opacity: 1;}
}
@keyframes fadeout {
  0% {left: 0%; opacity: 1;}
  100% {left: 100%; opacity: 0;}
}
</style>
