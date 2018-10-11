<template>
  <div id="app">
    <div class="nav">
      <div class="nav-logo-container">
        <img src="./assets/logo1.svg" class="nav-logo">
      </div>
      <div class="nav-links-container" id="navLinksContainer"> 
        <router-link class="nav-links" to="/">Home</router-link>
        <router-link class="nav-links" to="/portfolio">Portfolio</router-link>
        <router-link class="nav-links" to="/about">About</router-link>
        <router-link class="nav-links" to="/blog">Blog</router-link>
        <router-link class="nav-links" to="/contact">Contact</router-link>
        <div class="nav-hamburger" 
             id="fontAwesome"
             v-on:mouseenter="checkDropdown($event, 'in')"
             v-on:mouseleave="checkDropdown($event, 'out')"
             v-on:touchstart="checkDropdown($event, 'in')"
             >
        <font-awesome-icon :icon="{prefix: 'fas', iconName: 'bars'}" 
                           ></font-awesome-icon>
        </div>
      </div>
    </div>
    <div class="nav-dropdown hidden" 
         id="navDropdown"
          >
      <div class="nav-dropdown-div" 
           v-on:click="hideDropdown('/')"
           v-on:touchstart="hideDropdown('/')">Home</div>  
      <div class="nav-dropdown-div" 
           v-on:click="hideDropdown('/portfolio')"
           v-on:touchstart="hideDropdown('/portfolio')">Portfolio</div>  
      <div class="nav-dropdown-div" 
           v-on:click="hideDropdown('/about')"
           v-on:touchstart="hideDropdown('/about')">About</div>     
      <div class="nav-dropdown-div" 
           v-on:click="hideDropdown('/blog')"
           v-on:touchstart="hideDropdown('/blog')">Blog</div>     
      <div class="nav-dropdown-div nav-dropdown-div-bottom" 
           v-on:click="hideDropdown('/contact')"
           v-on:touchstart="hideDropdown('/contact')">Contact</div>     
    </div>
    <router-view/>
    <SocialMediaContainer/>
  </div>
</template>

<script>
import SocialMediaContainer from './components/SocialMediaContainer.vue'
export default {
  name: 'app',
  data() {
    return {
      navDropdown: ''
    }
  },
  methods: {
    checkDropdown(e, direction) {
      console.log(e.type, direction)
      if(direction === 'out') {
        let x = e.clientX, y = e.clientY 
        let elementMouseIsOver = document.elementFromPoint(x, y)
        let keepActiveIds = ['navLinksContainer', 'fontAwesome']
        if(elementMouseIsOver && keepActiveIds.indexOf(elementMouseIsOver.id) === -1) {
          let dropdown = document.getElementById('navDropdown')
          dropdown.classList.add('hidden')
        }
      }
      if(direction === 'in') {
        let dropdown = document.getElementById('navDropdown')
        dropdown.classList.remove('hidden') 
      }
    },
    hideDropdown(route) {
      console.log('helllll0')
      this.$router.push(route)
      let dropdown = document.getElementById('navDropdown')
      dropdown.classList.add('hidden')
    }
  },  
  components: {
    SocialMediaContainer
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Work+Sans');
@import url('https://fonts.googleapis.com/css?family=Josefin+Sans');
* {
  box-sizing: border-box;
}
html,body
{
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
    overflow-x: hidden; 
}
body {
  margin: 0 auto;
  background-image: linear-gradient(to bottom, rgb(36, 99, 109), rgb(42, 183, 206));
  background-attachment: fixed;
  background-repeat: no-repeat;
}
.nav {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  height: 85px;
  background: black;
  border-bottom: .25px solid white;
}
.nav-logo-container {
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: flex-start;
}
.nav-logo {
  height: 90px;
  width: 90px;
  margin-top: 20px;
  left: 10px;
  z-index: 2000;
  position: absolute;

}
.nav-links {
  padding: 0px 5px;
  text-decoration: none;
  color: white;
  font-family: "Work Sans", sans-serif;
  letter-spacing: 2px;
  font-size: 22px;
  font-weight: bold;
  padding-bottom: 5px;
  text-shadow: .4px .4px .7px black;
  transition: font-size .3s;
}
.nav-links:hover {
  border-bottom: 1.5px solid white;
  text-shadow: .9px .9px 2px black;
  font-size: 24px;
}
.nav-links-container {
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.nav-hamburger {
  color: white;
  font-size: 26px;
  margin-right: 10px;
}
.nav-dropdown {
  position: absolute;
  height: 200px;
  width: 100%;
  background-color: black;
  display: flex;
  flex-direction: column;
  z-index: 1000;
}
.hidden {
  display: none;
}
.nav-dropdown-div {
  width: 100%;
  height: 20%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-top: .25px solid white;
  border-bottom: .25px solid white;
}
.nav-dropdown-div-bottom {
  border-bottom: .5px solid white;
}@media (max-width: 1000px) {
  .nav-links {
    font-size: 18px;
  }
}
@media (min-width: 800px) {
  .nav-hamburger {
    display: none;
  }
}
@media (max-width: 800px) {
  .nav-links {
    display: none;
  }
}
</style>
