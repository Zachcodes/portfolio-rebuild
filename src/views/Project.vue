<template>
    <div>
        <span>{{projectDetails.description}}</span>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'project',
    data() {
        return {
            projectDetails: {},
            projectPictures: []
        }
    },
    mounted() {
        let {projectId} = this.$route.query
        axios.get(`/api/projects/${projectId}`).then(response => { 
            this.projectDetails = response.data;
            console.log(response.data.pictureLinks)
            let sorted = response.data.pictureLinks.sort((a, b) => {
                if(a.)
            })
            this.projectPictures = response.data.pictureLinks;
        })
    }
}
</script>