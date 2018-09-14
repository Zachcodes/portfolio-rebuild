<template>
    <div class="social-media-container">
        <a 
        href="https://www.facebook.com/ZacharySpringer12"
        rel="noopener noreferrer"
        target="_blank">
            <font-awesome-icon :icon="{prefix: 'fab', iconName: 'facebook'}" class="social-media-icon"></font-awesome-icon>
        </a>
        <a 
        href="https://github.com/Zachcodes"
        rel="noopener noreferrer"
        target="_blank">
            <font-awesome-icon :icon="{prefix: 'fab', iconName: 'github'}" class="social-media-icon"></font-awesome-icon>
        </a>
        <a 
        href="https://www.linkedin.com/in/zach-springer/"
        rel="noopener noreferrer"
        target="_blank">
            <font-awesome-icon :icon="{prefix: 'fab', iconName: 'linkedin'}" class="social-media-icon"></font-awesome-icon>
        </a> 
    </div>
</template>

<script>
export default {
    name: 'socialMediaContainer'
}
</script>

<style>
.social-media-container {
    display: flex;
    flex-direction: column;
    position: fixed;
    bottom: 50px;
    right: 10px;
}
.social-media-icon {
    color: white;
    font-size: 30px;
    margin: 3px 0px;
}
</style>