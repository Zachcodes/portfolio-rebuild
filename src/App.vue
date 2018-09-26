<template>
  <div id="app">
    <div class="nav">
      <div class="nav-logo-container">
        <img src="./assets/logo1.svg" class="nav-logo">
      </div>
      <router-link class="nav-links" to="/">Home</router-link>
      <router-link class="nav-links" to="/portfolio">Portfolio</router-link>
      <router-link class="nav-links" to="/about">About</router-link>
      <router-link class="nav-links" to="/blog">Blog</router-link>
      <router-link class="nav-links" to="/contact">Contact</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Work+Sans');
@import url('https://fonts.googleapis.com/css?family=Josefin+Sans');
* {
  box-sizing: border-box;
}
body {
  margin: 0 auto;
  /* background-image: linear-gradient(to bottom right, black, rgb(112,101,101,1), white); */
  /* background-image: linear-gradient(to bottom right, white, rgb(112,101,101,1), black); */
  /* background-image: linear-gradient(to bottom right, black, rgb(9, 98, 112), rgb(65, 189, 209)); */
  /* background: rgb(65, 189, 209); */
  background: rgb(42, 183, 206);
  /* background-repeat: no-repeat; */
  height: 100%;
  /* background-attachment: fixed; */
}
.nav {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
  height: 7vh;
  padding: 0px 20px;
}
.nav-logo-container {
  margin-right: auto;
  color: white;
  height: 100%;
  display: flex;
  justify-content: flex-start;
}
.nav-logo {
  height: 100%;
}
.nav-links {
  padding: 0px 5px;
  text-decoration: none;
  color: white;
  font-family: "Work Sans", sans-serif;
  letter-spacing: 2px;
  font-size: 18px;
  font-weight: bold;
  padding-bottom: 5px;
  text-shadow: .4px .4px .7px black;
  transition: font-size .3s;
}
.nav-links:hover {
  border-bottom: 1.5px solid black;
  text-shadow: .9px .9px 2px black;
  font-size: 19px;
}
</style>
