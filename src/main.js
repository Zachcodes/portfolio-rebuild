import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebook, faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faTimesCircle, faBars} from '@fortawesome/free-solid-svg-icons'
import Toasted from 'vue-toasted'

library.add(faFacebook)
library.add(faGithub)
library.add(faLinkedin)
library.add(faTimesCircle)
library.add(faBars)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(Toasted)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
