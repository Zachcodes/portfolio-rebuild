<template>
    <div>
        <span v-html="blogPost"></span>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'blogPost',
  created: async function () {
    let {data} = await axios.get(`/api/blog/${this.$route.query.file}`)
    this.blogPost = data;
  },
  data() {
    return {
      blogPost: ''
    }
  }
}
</script>

<style>

</style>