import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import {auth} from './js/sandbox.superapp.js'

Vue.config.productionTip = false



const app = new Vue({
  router,
  vuetify,
  render: function (h) { return h(App) }
}).$mount('#app')

;
( async () => {

  let res_logged = await auth.logged()

  if(!res_logged) {
    app.$router.push('/login')
  }

  
})()
