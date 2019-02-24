<template>
  <div class="blog-main-container">
    <PostMiniContainer v-for="post in blogPosts"
    :key="post.post_id">
    </PostMiniContainer>
  </div>
</template>

<script>
import axios from 'axios'
import PostMiniContainer from '../components/PostMiniContainer.vue'

export default {
  name: 'blog',
  components: {
    PostMiniContainer
  },
  created: async function () {
    let blogPosts = await axios.get('/api/blog')
    this.blogPosts = blogPosts.data
  },
  data() {
    return {
      blogPosts: []
    }
  }
}
</script>

<style>
.blog-main-container {
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

@media(max-width: 800px) {
  .blog-main-container {
    min-height: calc(100vh - 135px);
  }
}
</style>