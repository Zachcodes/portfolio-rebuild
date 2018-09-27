<template>
  <div class="contact-main-container">
    <form class="contact-form-container" v-on:submit.prevent="handleSubmit" autocomplete="off">
      <input autocomplete="off" class="contact-input" v-model="name" placeholder="Name"/>
      <input autocomplete="off" class="contact-input" v-model="email" placeholder="Email"/>
      <input class="contact-input" v-model="message" placeholder="Message"/>
      <!-- <font-awesome-icon :icon="{prefix: 'fas', iconName: 'times-circle'}"></font-awesome-icon> -->
      <div class="contact-input-container">
        <button 
        class="contact-submit-button"
        v-bind:class="{ disabled: checkValues, active: !checkValues}" 
        type="submit"
        v-bind:disabled="checkValues">Submit</button>
      </div>
    </form>
    <SocialMediaContainer/>
  </div>
</template>

<script>
import SocialMediaContainer from '../components/SocialMediaContainer.vue'
import axios from 'axios'

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
      axios({
        method: 'post',
        url: '/api/submitContact',
        data: {
          name: this.name,
          email: this.email,
          message: this.message
        }
      }).then(res => {
        this.name = ''
        this.email = ''
        this.message = ''
      })
    }
  },
  computed: {
    checkValues() {
      if(this.name && this.email && this.message) return false
      return true
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Nunito+Sans');
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
  align-items: center;
  justify-content: center;
}
.contact-input {
  background-color: transparent;
  border: none;
  border-bottom: .5px solid black;
  margin-bottom: 10px;
  width: 100%;
  max-width: 250px;
  color: white;
  letter-spacing: 6px;
  font-size: 12px;
  font-family: 'Nunito Sans', sans-serif;
}
.contact-input:focus {
  outline: none;
  box-shadow: none !important;
  -webkit-box-shadow: none !important; 
  -moz-box-shadow: none !important;
}
.contact-input::-webkit-input-placeholder {
  font-size: 12px;
  letter-spacing: 6px;
  color: #ffffffa6;
}
.contact-input-container {
  width: 100%;
  display: flex;
  justify-content: center;
}
.contact-submit-button {
  color: white;
  background-color: transparent;
  border: 1px solid white;
  border-radius: 10px;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: bold;
  letter-spacing: 6px;
  font-size: 16px;
  width: 100%;
  max-width: 200px;
}
.contact-submit-button:focus {
  outline: none;
}
.disabled {
  color: #ffffffa6;
  background-color: transparent;
  border: 1px solid #ffffffa6;
  border-radius: 10px;
}
.active:hover {
  color: black;
  background-color: white;
  border: 1px solid white;
  border-radius: 10px;
  font-family: 'Nunito Sans', sans-serif;
  outline: none;
  box-shadow: 1px 2px 2px black;
}
</style>
