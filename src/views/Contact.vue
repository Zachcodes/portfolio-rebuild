<template>
  <div class="contact-main-container">
    <form class="contact-form-container">
      <label>Name</label> <input v-bind="test"/>
    </form>
    <SocialMediaContainer/>
  </div>
</template>

<script>
import SocialMediaContainer from '../components/SocialMediaContainer.vue'

export default {
  name: 'contact',
  data: {
    test: 'hello'
  },
  components: {
    SocialMediaContainer
  }
}
</script>

<style>
.contact-main-container {
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.contact-form-container {
  width: 40%;
  height: 60%;
}
</style>
