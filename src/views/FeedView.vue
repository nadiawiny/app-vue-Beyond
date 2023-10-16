<template>
  <div>
    <v-card-title>Linha do Tempo</v-card-title>
    <v-card-subtitle class="usuario">Publicações do usuário {{ userId }}</v-card-subtitle>
    
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
        text: "Hoje é um belo dia para ser feliz",
      },
      {
        id: 1,
        name: "João",
        text: "A gratidão é a memória do coração.",
      },
      {
        id: 2,
        name: "Clara",
        text: "Insista, persista e nunca desista.",
      },
      {
        id: 2,
        name: "Clara",
        text: "Não importa o que você decidiu. O que importa é que isso te faça feliz.",
      },
      {
        id: 3,
        name: 'Nádia',
        text: 'Boa Noite!'
      },
      {
        id: 3,
        name: 'Nádia',
        text: 'Deixe pra trás o que não te leva pra frente.'
      },
    ];
    // filtra as publicações do usuário com base no userId
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
.usuario{
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 17px;
}
</style>
