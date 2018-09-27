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
             v-on:mouseleave="checkDropdown($event, 'out')">
        <font-awesome-icon :icon="{prefix: 'fas', iconName: 'bars'}" 
                           ></font-awesome-icon>
        </div>
      </div>
    </div>
    <div class="nav-dropdown hidden" 
         id="navDropdown"
         v-on:mouseleave="checkDropdown($event, 'out')"></div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      navDropdown: ''
    }
  },
  methods: {
    checkDropdown(e, direction) {
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
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Work+Sans');
@import url('https://fonts.googleapis.com/css?family=Josefin+Sans');
* {
  box-sizing: border-box;
}
body {
  margin: 0 auto;
  background-image: linear-gradient(to bottom, rgb(36, 99, 109), rgb(42, 183, 206));
  background-attachment: fixed;
  background-repeat: no-repeat;
  height: 100%;
}
.nav {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  height: 7vh;
}
.nav-logo-container {
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: flex-start;
}
.nav-logo {
  height: 60px;
  width: 60px;
  margin-top: 5px;
}
.nav-links {
  padding: 0px 5px;
  text-decoration: none;
  color: white;
  font-family: "Work Sans", sans-serif;
  letter-spacing: 2px;
  font-size: 16px;
  font-weight: bold;
  padding-bottom: 5px;
  text-shadow: .4px .4px .7px black;
  transition: font-size .3s;
}
.nav-links:hover {
  border-bottom: 1.5px solid black;
  text-shadow: .9px .9px 2px black;
  font-size: 18px;
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
}
.nav-dropdown {
  position: absolute;
  height: 200px;
  width: 100%;
  background-color: black;
}
.hidden {
  display: none;
}
@media (max-width: 800px) {
  .nav-links {
    display: none;
  }
  .nav-hamburger {
    margin-right: 15px;
  }
}
@media (min-width: 800px) {
  /* .nav-hamburger {
    display: none;
  } */
   .nav-links {
    display: none;
  }
}
</style>
