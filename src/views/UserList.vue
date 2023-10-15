<template>
    <div>
      <h1>Lista de Usuários</h1>
      
      <!-- Lista de usuários -->
      <div v-for="(user, index) in userList" :key="index">
        <p>{{ user.name }}</p>
        <router-link :to="{ name: 'perfil', params: { userId: user.id } }">Ver Perfil</router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        userList: // Exemplo de lista de usuários
        [ 
            {
                id: 1,
                name: 'João',
            },
            {
                id: 2,
                name: 'Clara', 
            },
            {
                id: 3, 
                name: 'Nádia'
            },
        ],
      };
    },
    // Lógica da página de lista de usuários
  }
  </script>
  