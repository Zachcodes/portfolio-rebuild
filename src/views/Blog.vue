<template>
  <div class="blog-main-container">
    <div class="blog-text">Coming Soon!</div>
  </div>
</template>

<script>
export default {
  name: 'blog'
}
</script>

<style>
.blog-main-container {
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.blog-text {
  color: white;
  font-size: 50px;
  text-shadow: .5px .5px 1px black;
  line-height: 18px;
  letter-spacing: 2.5px;
  font-family: 'Josefin Sans', sans-serif;
}
@media(max-width: 800px) {
  .blog-main-container {
    min-height: calc(100vh - 135px);
  }
}
</style>