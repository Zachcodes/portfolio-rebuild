<template>
  <div class="about-main-container">
    <div class="about-content-left-container">
      <div class="about-picture-container"></div>
    </div> 
    <div class="about-content-right-container">
      <div class="about-text"> 
        I'm a Web Designer from Utah. I work as a full time mentor for DevMountain where I get to teach students to code and I love it. Going to DevMountain was one of the best career decisions I ever made and I'm glad that I get to give back. 
        <br>
        <br>
        My first job out of DevMountain was at Ivinex where I worked as a software Engineer. Working at Ivinex was an amazing opportunity and I learned a lot. Nowadays, whenever I'm not working with students, you can find me building a passion project or expanding my skillset.
        <br>
        <br>
        On my free time I enjoy working out, climbing, running, spending time with friends and gaming. 
      </div>
    </div>
  </div>
</template>

<script>
import myPicture from '../assets/business_photo.jpeg'
export default {
  name: 'about',
  data() {  
    return {
      image: myPicture
    }
  }
}
</script>

<style>
.about-main-container {
  min-height: 80vh;
  display: flex;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 100px;
}
.about-content-left-container {
  width: 40%;
  display: flex;
  justify-content: center;
}
.about-content-right-container {
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-left: 5px;
}
.about-picture-container {
  background-image: url('https://avatars2.githubusercontent.com/u/22923676?s=460&v=4');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 60vh;
  width: 450px;
}

.about-text {
  color: white;
  font-size: 20px;
  text-shadow: .5px .5px 1px black;
  line-height: 24px;
  letter-spacing: 2.5px;
  font-family: 'Josefin Sans', sans-serif;
}

@media (max-width: 800px) {
  .about-main-container {
    flex-direction: column;
    padding-top: 30px;
  }
  .about-content-left-container {
    width: 100%;
  }
  .about-content-right-container {
    width: 100%;
    padding: 20px 20px;
  }
}
</style>