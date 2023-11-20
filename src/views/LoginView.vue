<template>
  <v-app class="tela-login">
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
</v-app>
</template>

<script>
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../config/index.js'; // Importando a instância de autenticação do Firebase

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
      .then(() => {
        onAuthStateChanged(auth, (user) =>{
          if (user){
            if(this.$route.path !== '/publi'){
              this.$router.push('/publi')
            }
          }else{
            alert('Usuário não encontrado')
          }
        })
      })
      .catch((error) => {
        console.error('Erro durante o login', error);
        alert('Usuário não cadastrado, efetue o login');
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

<style scoped>
.tela-login{
  background-color: #faf7f7;
}
.elevation-12{
    margin-top: 10em;
    /* margin-left: 10px;
    margin-right: 10px; */
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 18px;
}
</style>
