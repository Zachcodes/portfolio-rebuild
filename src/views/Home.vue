<template>
  <div class="home-main-container">
    <div class="home-position-container">
      <div class="home-title">Zachary Springer</div>
      <div class="home-sub-title">Web Designer</div>
      <div class="home-carousel-container" ref="carouselContainer" id="carousel-container"> 
        <transition 
          v-on:enter="enter"
          v-on:leave="leave"
          v-on:after-leave="afterLeave"
          v-bind:css="false"
          name="test"
          appear
        >
          <div class="fade-base" v-if="fadein" :key="currentText" ref="carouselText">{{currentText}}</div>
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
      carouselText: ['Creativity', 'Passion', 'Ambition'],
      startingPosition: 0,
      fadein: true,
      currentText: 'Creativity',
      carouselParent: {}
    }
  },
  methods: {
    enter(el, done) {
      let objToReference = this;
      let parent = document.getElementById('carousel-container')
      if(!parent) {
        let intervalId = setInterval(() => {
          let parent = document.getElementById('carousel-container')
          if(parent) {
            clearInterval(intervalId)
            this.carouselParent = parent;
            beginAnimation(parent.clientWidth)
          } 
        }, 100)
      }
      else {
        this.carouselParent = parent;
        beginAnimation(parent.clientWidth)
      }
      function beginAnimation(parentWidth) {
        let adjustedWidth = parentWidth - el.clientWidth;
        // let initialX = adjustedWidth / 4 + 'px';
        let initialX = (adjustedWidth / 2) - 100 + 'px';
        let transitionX = adjustedWidth / 2 + 'px';
        Velocity(el, {
          transform: [ `translateX(${transitionX})`, `translateX(${initialX})`], 
          opacity: [1, 0] }, 
          {duration: 2000,
           complete: wrapUp})
        function wrapUp() {
          objToReference.fadein = false;
          done()
        }
      }
    },
    leave(el, done) {
      let parentWidth = this.carouselParent.clientWidth;
      let adjustedWidth = parentWidth - el.clientWidth;
      let initialX = adjustedWidth / 2 + 'px';
      // let transitionX = (adjustedWidth / 4) * 3 + 'px';
      let transitionX = (adjustedWidth / 2) + 100 + 'px';
      setTimeout(() => {
        Velocity(el, {
        transform: [`translateX(${transitionX})`, `translateX(${initialX})`], 
        opacity: [0, 1] }, {duration: 2000, complete: done})
      },1200)
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
  font-size: 80px;
  text-shadow: 2.5px 2.5px 5px black;
  letter-spacing: 9px;
}
.home-sub-title {
  height: 30%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 45px;
  text-shadow: 1.5px 1.5px 3px black;
  letter-spacing: 6px;
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
  font-size: 30px;
  text-shadow: .5px .5px 1px black;
  letter-spacing: 4px;
  position: relative;
}
.fade-base {
  opacity: 0;
  position: relative;
  /* width: 100%; */
  font-size: 28px;
  text-shadow: .5px .5px 1px black;
  letter-spacing: 4px;
}
@media(max-width: 1000px) {
  .home-position-container {
    width: 100%;
  }
}
@media(max-width: 750px) {
  .home-title {
    font-size: 70px;
    text-shadow: 2.5px 2.5px 5px black;
    letter-spacing: 5px;
  }
}
@media (max-width: 600px) {
  .home-title {
    font-size: 36px;
    text-shadow: 2.5px 2.5px 5px black;
    letter-spacing: 5px;
  }
  .home-sub-title {
    font-size: 28px;
    align-items: flex-start;
  }
  .home-carousel-container {
    align-items: flex-start;
  }
}
</style>
