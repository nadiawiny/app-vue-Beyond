<template>
    <div>
      <v-card-title>Perfil do Usuário</v-card-title>
      <v-card-subtitle class="usuario">Informações do usuário {{ userId }}</v-card-subtitle>

    <div class="descricao" v-for="user in users" :key="user.id">
      <p>Nome: {{ user.name }}</p>
      <p>Idade: {{ user.idade }}</p>
      <p>Email: {{ user.email }}</p>
      <router-link :to="{ name: 'feed', params: { userId: user.id } }">Ver Linha do Tempo</router-link>
    </div>
      
    </div>
  </template>
  
  <script>
  export default {
    props: ['userId'],
    data() {
      return {
        user: {},
        users: [ 
          { 
            id: 1,
            name: 'João',
            idade: '20 anos',
            email: 'joaovictor@gmail.com'
          },
          {
            id: 2,
            name: 'Clara',
            idade: '18 anos',
            email: 'clara.maria@gmail.com'
          },
          {
            id: 3,
            name: 'Nádia',
            idade: '23 anos', 
            email: 'nadia15@gmail.com'
          }
        ]
      };
    },
    computed: {
      userList(){
        return this.$store.state.userList  
      }
    },
    created() {
      const selectedUser = this.users.find(user => user.id === this.userId);
      if (selectedUser) {
        this.user = selectedUser;
      }
    }
  };
  </script>

<style>
.descricao{
  margin-top: 1em;
  margin-left: 10px;
  margin-right: 10px;
  
  background-color: rgb(43, 39, 39);
  color: rgb(223, 221, 220);

  border-radius: 10px;
  padding-left: 10px;
  padding-bottom: 10px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 17px;
}
.usuario{
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 17px;
}
</style>
  