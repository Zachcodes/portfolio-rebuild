<template>
    <div class="project-main-container">
        <div class="project-pictures-main-container">
            <div class="project-picture-main" :style="mainDisplayedImage"></div> 
            <div class="project-picture-sub">
                <div v-for="picture in projectPictures"
                     :key="picture.project_image_id"></div>
            </div>
        </div>
        <div class="project-about-main-container">
            <div class="project-about-description"></div>
            <div class="project-tech-main-container">
                <div class="project-tech"></div> 
                <div class="project-view-button"></div>
            </div>
        </div> 
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'project',
    data() {
        return {
            projectDetails: {},
            projectPictures: [],
            startingPictureIndex: 0
        }
    },
    computed: {
        mainDisplayedImage() {
            if(this.projectPictures.length) {
                let link = this.projectPictures[this.startingPictureIndex].link;
                return {
                    backgroundImage: `url(${link})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                }
            }
        }
    },
    mounted() {
        let {projectId} = this.$route.query
        axios.get(`/api/projects/${projectId}`).then(response => { 
            this.projectDetails = response.data;
            let sortedByType = response.data.pictureLinks.sort((a, b) => {
                if(a.type_id === 1) return -1 
                else return 1
            })
            this.projectPictures = sortedByType;
        })
    }
}
</script>

<style>
.project-main-container {
  width: 100%;
  min-height: 80vh;
  display: flex;
  padding-top: 50px;
  padding-left: 25px;
  padding-right: 25px;
  height: 80vh;
}
.project-pictures-main-container {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: black;
}
.project-picture-main {
    height: 80%;
    width: 100%;
    background-color: white;
} 
.project-picture-sub {
    height: 20%;
    width: 100%;
    background-color: silver;
    display: flex;
}
.project-about-main-container {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: black;
}
.project-about-description {
    height: 80%;
    width: 100%;
    background-color: white;
}
.project-tech-main-container {
    height: 20%;
    width: 100%;
    display: flex; 
    background-color: red;
}
.project-tech {
    width: 60%;
    height: 100%;
    background-color: white;
}
.project-view-button {
    width: 40%;
    height: 100%;
    background-color: blue;
}
</style>