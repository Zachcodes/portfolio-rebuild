import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faInstagram, faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faTimesCircle, faBars, faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons'
import Toasted from 'vue-toasted'

library.add(faInstagram)
library.add(faGithub)
library.add(faLinkedin)
library.add(faTimesCircle)
library.add(faBars)
library.add(faArrowLeft)
library.add(faArrowRight)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(Toasted)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
