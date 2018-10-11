<template>
    <div class="social-media-container">
        <a 
        href="https://www.instagram.com/zach_slc/"
        rel="noopener noreferrer"
        target="_blank">
            <font-awesome-icon :icon="{prefix: 'fab', iconName: 'instagram'}" class="social-media-icon"></font-awesome-icon>
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
    /* color: #5858588a; */
    color: #ffffff87;
    font-size: 40px;
    margin: 3px 0px;
    transition: all .5s;
}
.social-media-icon:hover {
    color: white;
    /* color: #2d2d2d; */
    font-size: 42px;
    /* text-shadow: 3px 3px 16px #272634; */
}
@media (max-width: 800px) {
    .social-media-container {
        position: relative;
        bottom: 0;
        right: 0;
        left: 0;
        width: 100%;
        flex-direction: row;
        height: 50px;
        background-color: black;
        justify-content: flex-end;
        align-items: center;
        border-top: .5px solid white;
    }
    .social-media-icon {
        color: white;
        margin: 0px 10px;
    }
}
</style>