<template>
    <div>
        <span v-if="doneLoading">{{projectDetails.description}}</span>
        <span v-else>Loading!</span>
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
            doneLoading: false
        }
    },
    mounted() {
        let {projectId} = this.$route.query
        axios.get(`/api/projects/${projectId}`).then(response => {
            this.projectDetails = response.data;
            this.projectPictures = response.data.pictureLinks;
            this.doneLoading = true;
        })
    }
}
</script>