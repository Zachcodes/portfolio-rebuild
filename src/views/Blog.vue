<template>
  <div class="blog-main-container">
    <div class="blog-text">Coming Soon!</div>
    <SocialMediaContainer/>
  </div>
</template>

<script>
import SocialMediaContainer from '../components/SocialMediaContainer.vue'

export default {
  name: 'blog',
  components: {
    SocialMediaContainer
  }
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
  color: black;
}
</style>