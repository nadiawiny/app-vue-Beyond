<template>
  <div>
    <h1>Linha do Tempo</h1>
    <p>Publicações do usuário {{ userId }}</p>
    
    <!-- Listagem das publicações do usuário -->
    <div v-for="(post, index) in userPosts" :key="index" class="post-card">
      <v-card color="#4E97D1" class="margem-card">
        <v-card-subtitle class="font-weight-bold">{{ post.name }}</v-card-subtitle>
        <v-card-text>{{ post.text }}</v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  props: ['userId'],
  data() {
    return {
      userPosts: [],
    };
  },
  created() {
    const userId = this.$route.params.userId
    const allPosts = [
      {
        id: 1,
        name: "João",
        text: "Hoje é um belo dia para salvar vidas",
      },
      {
        id: 1,
        name: "João",
        text: "Oi bom dia!",
      },
      {
        id: 2,
        name: "Clara",
        text: "Eu não sou linda, eu sou inteligente, quer me elogiar? eloquia o meu cerebro",
      },
      {
        id: 3,
        name: 'Nádia',
        text: 'Boa Noite!'
      },
    ];
    // Filtra as publicações do usuário com base no userId
    this.userPosts = allPosts.filter(post => post.id === userId);
  },
};
</script>

<style scoped>
.margem-card {
  margin-top: 1em;
  margin-left: 10px;
  margin-right: 10px;
}
</style>
