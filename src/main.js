import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
// import { initializeApp } from 'firebase/app'
// import { firebaseConfig } from './config/index.js'

// initializeApp(firebaseConfig)

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
