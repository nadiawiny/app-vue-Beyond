import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import { auth } from './config/index.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

Vue.config.productionTip = false
Vue.use(Vuex)

/* eslint-disable no-unused-vars */ // Desativa o aviso para a variável 'commit'
const store = new Vuex.Store({
  state: {
    user: null,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
    },
  },
  actions: {
    create({ commit }, payload) {
      const { email, password } = payload
      createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
          console.log('Usuário cadastrado', result)
        })
        .catch((error) => {
          alert('usuario ja cadastrado', error)
        })
    },
    login({ commit }, payload) {
      const { email, password } = payload
      signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
          console.log('Usuário logado', result)
          commit('setUser', result.user)
        })
        .catch((error) => {
          alert('usuario já logado',error)
        })
    }
  }
})

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
