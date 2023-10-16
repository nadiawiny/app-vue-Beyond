<template>
  <div>
    <v-card-title >Lista de Usuários</v-card-title>
    <v-text-field class="barra-pesquisa" v-model="searchQuery" placeholder="Pesquisar usuários"></v-text-field>

    <div v-if="searchQuery" class="resultado">
      <div v-for="user in filteredUsers" :key="user.id">
        <p>{{ user.name }}</p>
        <router-link  :to="{ name: 'perfil', params: { userId: user.id } }">Ver Perfil</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userList: [
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
          name: 'Nádia',
        },
      ],
      searchQuery: '', 
    };
  },
  computed: {
    filteredUsers() {
      return this.userList.filter(user => user.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
    },
  },
};
</script>
<style scoped>
.barra-pesquisa{
  margin-top: 0em;
  margin-left: 40px;
  margin-right: 40px;
}
.resultado{
  margin-top: 0em;
  margin-left: 40px;
  margin-right: 40px;
  font-size: 15px;

  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 20px;
}
</style>
