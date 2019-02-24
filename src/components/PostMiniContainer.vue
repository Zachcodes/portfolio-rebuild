<template>
    <div class="mini-post-container">]
        <div class="post-content-container">
            <h3>{{post.title}}</h3>
            <h5>Written by: {{post.author.first}} {{post.author.last}} {{post.created_date}}</h5>
            <img :src="post.header_image_url"/>
            <p>{{post.snippet}}</p>
        </div> 
        <div class="post-meta-container">
        </div>
    </div>
</template>

<script>
export default {
    name: 'PostMiniContainer',
    props: ['post'],
    created(){
        console.log(this.$props)
    }
}
</script>

<style>

</style>

