<template>
  <div>
    <v-app-bar app color="blue" flat>
        <v-icon @click="toggleMenu">mdi-view-sequential</v-icon>
        <v-spacer></v-spacer>
     </v-app-bar>

    <v-card-title>Linha do Tempo</v-card-title>
    <v-card-subtitle class="usuario">Publicações do usuário {{ userId }}</v-card-subtitle>
    
    <div v-for="(post, index) in userPosts" :key="index" class="post-card">
      <v-card color="#4E97D1" class="margem-card">
        <v-card-subtitle class="font-weight-bold">{{ post.name }}</v-card-subtitle>
        <v-card-text>{{ post.text }}</v-card-text>
      </v-card>
    </div>

    <v-navigation-drawer v-model="menu" app>
      <v-list>
          <v-list-item>
            <v-list-item-icon @click="goToUser">
              <v-icon>mdi-account-multiple</v-icon>
            </v-list-item-icon>
            <v-list-item-title @click="goToUser">Buscar usuários</v-list-item-title>
          </v-list-item>
          
          <v-list-item>
            <v-list-item-icon @click="goToFeed">
              <v-icon>mdi-message-text</v-icon>
            </v-list-item-icon>
            <v-list-item-title  @click="goToFeed">Feed</v-list-item-title>
          </v-list-item>
          
          <v-list-item>
            <v-list-item-icon @click="sair">
              <v-icon>mdi-logout-variant</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Sair</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
  </div>
</template>

<script>
import router from '../router/index.js'
export default {
  props: ['userId'],
  data() {
    return {
      userPosts: [],
      menu: false,
    };
  },
  methods: {
    toggleMenu(){
        this.menu = !this.menu;
      },
      goToUser() {
        this.$router.push(`/usuario/`);
      },
      goToFeed() {
        this.$router.push('/publi');
      },
      beforeCreate() {
        this.$store.dispatch("fetchUser");
      },
      sair() {
      this.$vuetify.theme.dark = false;
      this.$store.dispatch("logout")
      .then(() => {
        localStorage.clear(); 
        router.push('/'); 
      })
      .catch((error) => {
        console.error(error);
      });
    }
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
