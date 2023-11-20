// Importe as funções do Firebase que você precisar para autenticação ou manipulação de dados
// import Vue from 'vue';
// import Vuex from 'vuex';
// import router from '@/router';
// import { auth } from './config/index.js';
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
// import { onAuthStateChanged, 
//         createUserWithEmailAndPassword, 
//         signInWithEmailAndPassword, 
//         signOut } from 'firebase/auth';

// Vue.use(Vuex);

// const store = new Vuex.Store({
//     state: {
//     // userList: [],
//     user: null, // Adicione um estado para controlar o usuário autenticado
//   },
//   mutations: {
//     setUserList(state, user) {
//       state.user = user;
//     },
//     setUser(state, user) {
//       state.user = user;
//     },
//   },
//   actions: {
//     // Adicione as ações necessárias para interagir com o Firebase
//     async login({ commit }, { email, password }) {
//       try {
//         const userCredential = await signInWithEmailAndPassword(auth, email, password);
//         const user = userCredential.user;
//         commit('setUser', user);
//       } catch (error) {
//         console.error(error.message);
//         throw error;
//       }
//     },
//     async createAccount({ commit }, { email, password }) {
//       try {
//         const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//         const user = userCredential.user;
//         commit('setUser', user);
//       } catch (error) {
//         console.error(error.message);
//         throw error;
//       }
//     },
//     async signOut({ commit }) {
//       try {
//         await signOut(auth);
//         commit('setUser', null);
//       } catch (error) {
//         console.error(error.message);
//         throw error;
//       }
//     },
//     // Adicione outras ações conforme necessário
//   },
// });

// export default store;

