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

            <v-btn type="submit" color="primary">Cadastrar</v-btn> 
            <v-btn type="submit" color="primary">Login</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
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
    register() {
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then(userCredential => {
          // Registro bem-sucedido, o usuário está autenticado automaticamente
          const user = userCredential.user;
          console.log('Novo usuário registrado:', user);
          // Redirecione o usuário para a página principal ou outra página desejada
          this.$router.push('/login'); // Redireciona o usuário para a página principal
        })
        .catch(error => {
          // Lidar com erros de registro
          console.error('Erro de cadastro:', error.code, error.message);
        });
    },
    login() {
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then(userCredential => {
          // Autenticação bem-sucedida
          const user = userCredential.user;
          console.log('Usuário autenticado:', user);
          // // Redirecione o usuário para a página principal ou outra página desejada
          // this.$router.push('/usuario'); // Redireciona o usuário para a página principal
        })
        .catch(error => {
          // Lidar com erros de autenticação
          console.error('Erro no login:', error);
        });
      onAuthStateChanged(auth, (user) => {
        if (user){
          this.$router.push('/usuario')
        }else{
          alert('Usuário não encontrado')
        }
      })
    },
  },
 };
</script>
