<template>
    <!-- <div v-bind:class="[selected ? miniActive : '', miniImageContainer]" :style="imageClass"> -->
    <div v-bind:class="[selected ? miniActive : '', miniImageContainer]" v-on:click="selectMainImage(index)">
        <img :src="imageClass" class="mini-image"/>
    </div>
</template>

<script>
export default {
    name: 'projectMiniImageContainer',
    props: ['selected', 'link', 'selectMainImage', 'index'],
    data() {
        return {
            miniActive: 'mini-active',
            miniImageContainer: 'mini-image-container'
        }
    },
    computed: {
        imageClass() {
            let link = this.$props.link
            return link;
        }
    }
}
</script>

<style>
.mini-image-container {
    width: 20%;
    height: 100%;
    margin: 0px 3px;
    border: 1px solid #ffffffa6;
    box-shadow: .5px 1px 1px black;
}
.mini-image-container:hover {
    cursor: pointer;
}
.mini-active {
    width: 25%;
    height: 110%;
    transition: width .5s, height .5s;
    border: 1px solid white;
    box-shadow: 1.5px 2px 2px black;
}
.mini-image {
    width: 100%;
    height: 100%;
}
</style>