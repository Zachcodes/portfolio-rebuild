<template>
    <div class="mini-post-container">
        <div class="post-content-container">
            <h3>{{post.title}}</h3>
            <h5>Written by: {{post.first}} {{post.last}} {{post.formatted_date}}</h5>
            <img :src="post.header_image_url"/>
            <p>{{post.snippet}}</p>
        </div> 
        <div class="post-meta-container">
            <div class="meta-row">
                {{post.comment_count}} comments
            </div>
            <div class="meta-row">
                {{post.view_count}} views
            </div>
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
.mini-post-container {
    display: flex;
    background-color: white;
    padding: 10px;
    width: 100%;
    max-width: 1000px;
    margin-bottom: 50px;
    border-style: groove;
    border: 1.25px solid black;
    border-radius: 6px;
    color: black;
}
.post-content-container {
    width: 80%;
    display: flex;
    flex-direction: column;
}
.post-meta-container {
    width: 20%;
}
</style>

