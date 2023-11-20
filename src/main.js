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
          alert('usuario ainda não cadastrado', error)
        })
    },
      login({ commit }, payload) {
        const { email, password } = payload;
        return signInWithEmailAndPassword(auth, email, password)
          .then((result) => {
            console.log('Usuário logado', result)
            commit('setUser', result.user);
            return result.user; // Retorna o usuário para tratar sucesso no componente
          })
          .catch((error) => {
            console.error('Erro usuario já logado', error);
            throw error;
          });
      },
  }
})

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
