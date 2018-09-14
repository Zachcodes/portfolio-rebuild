<template>
  <div id="app">
    <div class="nav">
      <div class="nav-name">Zachary Springer</div>
      <router-link to="/">Home</router-link>
      <router-link to="/portfolio">Portfolio</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/blog">Blog</router-link>
      <router-link to="/contact">Contact</router-link>
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
}
</style>
