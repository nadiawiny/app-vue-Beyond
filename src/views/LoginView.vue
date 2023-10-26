<template>
  <v-container fluid>
    <v-layout align-center justify-center>
      <v-card class="elevation-12" max-width="400">
        <v-card-title class="primary">
          <span class="headline">Login</span>
        </v-card-title>
        <v-card-text>
          <v-form @submit.prevent="login">
            <v-text-field v-model="email" label="E-mail" required></v-text-field>
            <v-spacer></v-spacer>
            <v-text-field v-model="password" label="Senha" type="password" required></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn type="sumit" color="primary" @click="createAcc">Cadastrar</v-btn> 
          <v-btn type="submit" color="primary" @click="login">Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../config/index.js'; // Importe a instância de autenticação do Firebase

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    login() {
      this.$store.dispatch('login', {
        email: this.email,
        password: this.password,
      })
      onAuthStateChanged(auth, (user) =>{
        if (user){
          if(this.$route.path !== '/usuario'){
            this.$router.push('/usuario')
          }
        }else{
          // this.$router.push('/login')
          alert('Usuário não encontrado')
        }
      })
    },
    createAcc(){
      this.$store.dispatch('create', {
        email: this.email,
        password: this.password
      })
    },
  },
 };
</script>
