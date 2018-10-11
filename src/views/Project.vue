<template>
    <div class="project-main-container">
        <div class="project-pictures-main-container">
            <div class="project-picture-main">
                <img :src="mainDisplayedImage" class="project-picture"/> 
            </div> 
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
            <div class="project-view-main-container">
                <button class="project-view-button"><a :href="urlLink" target="_blank">View Project</a></button>
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
            intervalId: 0,
            urlLink: ''
        }
    },
    components: {
        ProjectMiniImageContainer
    },
    computed: {
        mainDisplayedImage() {
            if(this.projectPictures.length) {
                let link = this.projectPictures[this.startingPictureIndex].link;    
                return link;
            }
        }
    },
    mounted() {
        let {projectId} = this.$route.query
        axios.get(`/api/projects/${projectId}`).then(response => { 
            this.projectDetails = response.data;
            this.techUsed = response.data.techUsed;
            this.urlLink = response.data.url_link;
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
    font-size: 20px;
    text-shadow: .5px .5px 1px black;
    line-height: 24px;
    letter-spacing: 4px;
    font-family: 'Josefin Sans', sans-serif;
}
.project-pictures-main-container {
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.project-picture-main {
    height: 80%;
    width: 100%;
    border: 1px solid white;
    box-shadow: 2px 2px 2px black;
} 
.project-picture {
    height: 100%;
    width: 100%;
}
.project-picture-sub {
    height: 20%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 5px 0px;
}
.project-about-main-container {
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.project-about-description {
    height: 80%;
    width: 100%;
    padding: 20px;
    background-color: #0000003d;
    border: 1px solid white;
    margin: 0px 10px;
    overflow: scroll;
}
.project-view-main-container {
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.project-view-button {
    color: white;
    background-color: transparent;
    border: 1px solid white;
    border-radius: 10px;
    font-family: 'Nunito Sans', sans-serif;
    font-weight: bold;
    letter-spacing: 6px;
    font-size: 30px;
    width: 80%;
    max-width: 350px;
}
.project-view-button:hover {
    color: black;
    background-color: white;
    border: 1px solid white;
    border-radius: 10px;
    font-family: 'Nunito Sans', sans-serif;
    outline: none;
    box-shadow: 1px 2px 2px black;
    cursor: pointer;
}
.project-view-button a {
    text-decoration: none;
    color: white;
}
.project-view-button a:hover {
    color: black;
}
@media (max-width: 800px) {
    .project-main-container {
        flex-direction: column;
        padding-left: 0;
        padding-right: 0;
        height: auto;
    }
    .project-pictures-main-container {
        width: 100%;
        height: 350px;
    }
    .project-picture-main {
        height: 100%;
    }
    .project-picture {
        height: 100%;
    }
    .project-picture-sub {
        display: none;
    }
    .project-about-main-container {
        width: 100%;
        height: auto;
        padding-top: 20px;
    }
    .project-about-description {
        margin: 10px 0px;
    }
    .project-view-main-container {
        margin: 10px 0px;
    }
}
</style>