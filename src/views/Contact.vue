<template>
  <div class="contact-main-container">
    <form class="contact-form-container" v-on:submit.prevent="handleSubmit">
      <div>
        <label>Name</label> <input class="contact-input" v-model="name"/>
      </div>
      <div>
        <label>Email</label> <input class="contact-input" v-model="email"/>
      </div> 
      <div>
        <label>Message</label> <input class="contact-input" v-model="message"/>
      </div>
      <div>
        <button v-bind:disabled="checkValues" type="submit">Submit</button>
      </div>
    </form>
    <SocialMediaContainer/>
  </div>
</template>

<script>
import SocialMediaContainer from '../components/SocialMediaContainer.vue'

export default {
  name: 'contact',
  data() {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  components: {
    SocialMediaContainer
  },
  methods: {
    handleSubmit() {
      
    }
  },
  computed: {
    checkValues() {
      if(this.name && this.email && this.message) return true
      return false
    }
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
  display: flex;
  flex-direction: column;
}
.contact-input {
  background-color: transparent;
  border: none;
  border-bottom: .5px solid black;
}
.contact-input:focus {
  outline: none;
}
</style>
