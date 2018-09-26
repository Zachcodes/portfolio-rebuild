<template>
    <div v-bind:class="[selected ? miniActive : '', miniImageContainer]" :style="imageClass">

    </div>
</template>

<script>
export default {
    name: 'projectMiniImageContainer',
    props: ['selected', 'link'],
    data() {
        return {
            miniActive: 'mini-active',
            miniImageContainer: 'mini-image-container'
        }
    },
    computed: {
        imageClass() {
            let link = this.$props.link
            return {
                backgroundImage: `url(${link})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover'
            }
        }
    }
}
</script>

<style>
.mini-image-container {
    width: 20%;
    height: 100%;
}
.mini-active {
    border: 1px solid blue;
}
</style>