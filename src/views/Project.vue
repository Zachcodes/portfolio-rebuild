<template>
    <div class="project-main-container">
        <div class="project-pictures-main-container">
            <div class="project-picture-main" :style="mainDisplayedImage"></div> 
            <div class="project-picture-sub">
                <ProjectMiniImageContainer v-for="(picture, index) in projectPictures"
                     :key="picture.project_image_id"
                     :selected="index === startingPictureIndex"
                     :link="picture.link"
                     ></ProjectMiniImageContainer>
            </div>
        </div>
        <div class="project-about-main-container">
            <div class="project-about-description">{{projectDetails.description}}</div>
            <div class="project-tech-main-container">
                <div class="project-tech">
                    <span v-for="tech in techUsed"
                          :key="tech.tech_id"
                          class="tech-box">{{tech.tech_name}}</span>    
                </div> 
                <div class="project-view-button-container">
                    <button class="project-view-button">View Project</button>
                </div>
            </div>
        </div> 
    </div>
</template>

<script>
import axios from 'axios';
import ProjectMiniImageContainer from '../components/ProjectMiniImageContainer.vue'
export default {
    name: 'project',
    data() {
        return {
            projectDetails: {},
            projectPictures: [],
            techUsed: [],
            startingPictureIndex: 0,
            intervalId: 0
        }
    },
    components: {
        ProjectMiniImageContainer
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
            this.techUsed = response.data.techUsed;
            let sortedByType = response.data.pictureLinks.sort((a, b) => {
                if(a.type_id === 1) return -1 
                else return 1
            })
            this.projectPictures = sortedByType;
        })
    },
    updated() {
        if(this.projectPictures.length && !this.intervalId) {
            let cbRef = this;
            this.intervalId = setInterval(() => {
                cbRef.startingPictureIndex === cbRef.projectPictures.length - 1 ? cbRef.startingPictureIndex = 0 : cbRef.startingPictureIndex += 1;
            }, 5000)
        }
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
    color: white;
    font-size: 16px;
    text-shadow: .5px .5px 1px black;
    line-height: 18px;
    letter-spacing: 2.5px;
    font-family: 'Josefin Sans', sans-serif;
}
.project-pictures-main-container {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.project-picture-main {
    height: 80%;
    width: 100%;
} 
.project-picture-sub {
    height: 20%;
    width: 100%;
    display: flex;
    padding: 5px 0px;
}
.project-about-main-container {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.project-about-description {
    height: 80%;
    width: 100%;
}
.project-tech-main-container {
    height: 20%;
    width: 100%;
    display: flex; 
}
.project-tech {
    width: 60%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
.project-view-button-container {
    width: 40%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.project-view-button {
    color: white;
    background-color: transparent;
    border: 1px solid white;
    border-radius: 10px;
    font-family: 'Nunito Sans', sans-serif;
    font-weight: bold;
    letter-spacing: 4px;
    font-size: 12px;
    width: 80%;
    max-width: 200px;
}
.project-view-button:hover {
    color: black;
    background-color: white;
    border: 1px solid white;
    border-radius: 10px;
    font-family: 'Nunito Sans', sans-serif;
    outline: none;
    box-shadow: 1px 2px 2px black;
}
.tech-box {
    width: 30%;
    height: 50px;
    padding: 1px;
    color: black;
    background-color: white;
    box-shadow: 1px 2px 2px black;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>