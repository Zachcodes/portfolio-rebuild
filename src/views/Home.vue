<template>
  <div class="home-main-container">
    <div class="home-position-container">
      <div class="home-title">Zachary Springer</div>
      <div class="home-sub-title">Web Design</div>
      <!-- Beginning of if -->
      <div class="home-carousel-container" v-if="fadeout"> 
        <transition 
          name="fadeout"
          appear
        >
          <div class="testing">{{currentCarouselValue}}</div>
        </transition>
        <transition 
          name="fadein"
          appear
        >
          <div class="testing">{{nextCarouselValue}}</div>
        </transition>
      </div>
      <!-- Beginning of else -->
      <div class="home-carousel-container" v-else> 
        <transition 
          v-if="fadeout"
          name="fadeout"
          appear
        >
          <div class="testing">{{currentCarouselValue}}</div>
        </transition>
        <transition 
          v-else
          name="fadein"
          appear
        >
          <div class="testing">{{currentCarouselValue}}</div>
        </transition>
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
      nextPosition: 1,
      currentClass: "fadein",
      nextClass: "home-carousel-text fadeout",
      show: true,
      fadeout: true
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
      this.currentClass = "home-carousel-text hidden fadein";
      this.nextClass = "home-carousel-text fadeout";
    }, 7000)
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
  position: relative;
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
.testing {
  position: relative;
}
.fadeout-enter-active {
  animation-name: fadeout;
  animation-duration: 2s;
  animation-iteration-count: 1;
  animation-delay: 2s;
  animation-fill-mode: forwards;
}
.fadein-enter-active {
  opacity: 0;
  animation-name: fadein;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-delay: 2s;
  animation-fill-mode: forwards; 
}
@keyframes fadein {
  0% {left: 0%; opacity: 0;}
  100% {left: 50%; opacity: 1;}
}
@keyframes fadeout {
  0% {left: 50%; opacity: 1;}
  100% {left: 100%; opacity: 0;}
}
</style>
