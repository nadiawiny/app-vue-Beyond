<template>
    <div>
      <h1>Perfil do Usuário</h1>
      <p>Informações do usuário {{ userId }}</p>
  
      <div v-for="user in users" :key="user.id">
        <p>{{ user.name }}</p>
        <router-link :to="{ name: 'feed', params: { userId: user.id } }">Ver Linha do Tempo</router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['userId'],
    data() {
      return {
        user: {}, // objeto para armazenar informações do usuário
        users: [ // Declare 'users' como uma variável de dados
          {
            id: 1,
            name: 'João',
            email: 'joaovictor@gmail.com'
          },
          {
            id: 2,
            name: 'Clara',
            email: 'clara.maria@gmail.com'
          },
          {
            id: 3,
            name: 'Nádia',
            email: 'nadia15@gmail.com'
          }
        ]
      };
    },
    created() {
      const selectedUser = this.users.find(user => user.id === this.userId);
      if (selectedUser) {
        this.user = selectedUser;
      }
    }
  };
  </script>
  