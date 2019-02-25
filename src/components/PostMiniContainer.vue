<template>
    <div class="mini-post-container">
        <div class="post-content-container">
            <h3 class="content-title">{{post.title}}</h3>
            <h5 class="content-author"><b>Written by:</b> {{post.first}} {{post.last}}  |   {{post.formatted_date}}</h5>
            <img :src="post.header_image_url" class="content-header-image"/>
            <p class="content-snippet">{{post.snippet}}</p>
        </div> 
        <div class="post-meta-container">
            <div class="meta-row">
                {{post.comment_count}} comments <font-awesome-icon :icon="{prefix: 'fas', iconName: 'comment'}" ></font-awesome-icon>
            </div>
            <div class="meta-row">
                {{post.view_count}} views <font-awesome-icon :icon="{prefix: 'fas', iconName: 'eye'}" ></font-awesome-icon>
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
    font-family: 'Work Sans', sans-serif;
}
.post-content-container {
    width: 80%;
    display: flex;
    flex-direction: column;
}
.post-meta-container {
    width: 20%;
}
.content-title {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    margin-bottom: 10px;
    letter-spacing: 2px;
    font-size: 26px;
}
.content-author {
    margin: 0;
    margin-bottom: 10px;
    font-size: 11px;
}
.content-header-image {
    max-height: 300px;
}
</style>

