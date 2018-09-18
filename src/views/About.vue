<template>
  <div class="about-main-container">
    <div class="about-content-main-container">
      <div class="about-picture-container"></div>
      <div class="about-text"> 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean blandit erat eget vestibulum feugiat. Curabitur vel pellentesque lacus. Nunc ac magna rutrum, consequat erat ac, faucibus enim. Vivamus vel dolor sit amet libero euismod laoreet. Aenean id egestas massa, ac tristique tellus. Fusce aliquet hendrerit suscipit. Morbi porta velit at nunc placerat, rhoncus lobortis nibh volutpat. Quisque cursus quam elit, eu condimentum metus congue nec. Quisque dapibus leo in sollicitudin tincidunt. Donec neque ipsum, placerat vitae orci a, molestie ornare orci. Donec dapibus lacus sed ex dictum porttitor sed nec metus. Morbi vel sollicitudin odio, non mattis purus. Mauris euismod scelerisque elit non semper. Aenean vitae urna ut enim fermentum laoreet non sed nunc.

        Cras blandit, augue ac ullamcorper accumsan, erat sapien vehicula enim, ut malesuada magna risus sed risus. Nullam quis quam nunc. Proin nisi magna, venenatis pulvinar magna at, dapibus cursus leo. Cras sed gravida nisl. Aliquam vehicula leo justo, non pulvinar odio feugiat nec. Vivamus vel augue vitae diam iaculis ornare. Praesent sed mi lacus. Donec feugiat tincidunt dignissim. Praesent ut venenatis lacus, eu convallis lacus. Pellentesque sit amet ligula a nibh blandit semper. Nullam odio sapien, tempus nec euismod sit amet, interdum nec velit. Fusce in tristique lorem, ut lobortis nibh. Ut pharetra, ex sit amet aliquam tempus, erat lectus volutpat quam, sed posuere leo augue eu lacus. Aliquam ac lacus dolor.
      </div>
    </div>
    <SocialMediaContainer/>
  </div>
</template>

<script>
import SocialMediaContainer from '../components/SocialMediaContainer.vue'
import myPicture from '../assets/business_photo.jpeg'
export default {
  name: 'about',
  data() {  
    return {
      image: myPicture
    }
  },
  components: {
    SocialMediaContainer
  }
}
</script>

<style>
.about-main-container {
  min-height: 80vh;
  display: flex;
  justify-content: center;
  padding-top: 50px;
}
.about-content-main-container {
  width: 40%;
  display: flex;
  flex-direction: column;
}
.about-picture-container {
  background-image: url('https://avatars2.githubusercontent.com/u/22923676?s=460&v=4');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 325px;
  width: 325px;
  margin-bottom: 10px;
}
.about-text {
  width: 325px;
}
</style>