<template>
  <div id="app">
    <div class="nav">
      <div class="nav-name">Zachary Springer</div>
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
* {
  box-sizing: border-box;
}
body {
  margin: 0 auto;
  background-image: linear-gradient(to bottom right, black, rgb(112,101,101,1));
  background-repeat: no-repeat;
  height: 100%;
  background-attachment: fixed;
}
.nav {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
  height: 7vh;
  padding: 0px 20px;
}
.nav-name {
  margin-right: auto;
  color: white;
}
.nav-links {
  padding: 0px 5px;
  text-decoration: none;
  color: white;
}
</style>
