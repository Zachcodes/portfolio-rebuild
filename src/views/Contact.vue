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
        <button 
        class="contact-submit-button"
        v-bind:class="{ disabled: checkValues}" 
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
        url: 'http://localhost:5000/api/submitContact',
        data: {
          name: this.name,
          email: this.email,
          message: this.message
        },
        headers: {
          'Access-Control-Allow-Origin': '*'
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
.contact-submit-button {
  color: #d0d0d0;
  background-color: #1f1f1f;
  border: none;
}
.disabled {
  color: #d0d0d0a8;
  background-color: #1f1f1f3b;
}
</style>
