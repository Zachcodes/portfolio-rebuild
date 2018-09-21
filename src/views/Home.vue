<template>
  <div class="home-main-container">
    <div class="home-position-container">
      <div class="home-title">Zachary Springer</div>
      <div class="home-sub-title">Web Design</div>
      <!-- Beginning of if -->
      <div class="home-carousel-container"> 
        <!-- <transition 
          name="fadein"

          appear
        > -->
        <!-- <transition 
          v-on:before-enter="beforeEnter"
          v-on:enter="enter"
          v-on:leave="leave"
          v-on:after-leave="afterLeave"
          v-bind:css="false"
          appear
        > -->
        <transition 
          v-on:enter="enter"
          v-on:leave="leave"
          v-on:after-leave="afterLeave"
          v-bind:css="false"
          name="test"
          appear
        >
          <div class="fade-enter" v-show="fadein" :key="currentText">{{currentText}}</div>
          <!-- <div v-show="fadein" :key="currentText">{{currentText}}</div> -->
        </transition>
      </div>
      <!-- Beginning of else
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
      </div> -->
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
      fadein: true,
      currentText: 'Simplified'
    }
  },
  methods: {
    enter(el, done) {
      Velocity(el, {
        // transform: [ "translate(50%, 50%)", "translate(25%, 25%)"], 
        transform: [ "translateX(50%)", "translateX(25%)"], 
        opacity: [1, 0] }, {duration: 3000, complete: wrapUp})
      let objToReference = this;
      function wrapUp() {
        objToReference.fadein = false;
        done()
      }
    },
    leave(el, done) {

      setTimeout(() => {
        Velocity(el, {
        // transform: [ "translate(75%, 0)", "translate(50%, 50%)"], 
        transform: [ "translateX(75%)", "translateX(50%)"], 
        opacity: [0, 1] }, {duration: 3000, complete: done})
      },5000)
    },
    afterLeave(el) {
        this.startingPosition = this.startingPosition === 2 ? 0 : this.startingPosition + 1;
        this.currentText = this.carouselText[this.startingPosition]
        this.fadein = true;
    },
    currentCarouselValue() {
      return this.carouselText[this.startingPosition]
    },
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
  width: 70%;
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
  /* font-size: 48px; */
  font-size: 30px;
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
  /* flex-direction: column; */
  /* align-items: center; */
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
.fade-enter {
  opacity: 0;
  position: relative;
  width: 100%;
  /* animation-name: fade-in;
  animation-duration: 4s;
  animation-fill-mode: forwards; */
}
.fade-leave {
  animation-name: fade-exit;
  animation-duration: 4s;
  animation-fill-mode: forwards;
}
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translate(0, 0)
  }
  to {
    opacity: 1;
    transform: translate(50%, 50%);
  }
}
@keyframes fade-exit {
  from {
    opacity: 1;
    transform: translate(50%, 50%)
  }
  to {
    opacity: 0;
    transform: translate(100%, 0);
  }
}
</style>
