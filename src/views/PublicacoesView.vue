<template>
    <v-app>
      <v-main>
      <v-app-bar app color="#4E97D1" flat>
        <v-icon @click="toggleMenu">mdi-view-sequential</v-icon>
          <div class="d-flex align-center justify-center" style="flex-grow: 1;">
            <v-toolbar-title>Feed</v-toolbar-title>
          </div>
    </v-app-bar>
    <v-navigation-drawer v-model="menu" app>
      <v-list>
          <v-list-item @click="$router.push(`/usuario`)">
            <v-list-item-icon @click="goToUser">
              <v-icon>mdi-account-multiple</v-icon>
            </v-list-item-icon>
            <v-list-item-title @click="goToUser">Buscar usuários</v-list-item-title>
          </v-list-item>
          <v-list-item @click="$router.push(`/`)">
            <v-list-item-icon @click="sair">
              <v-icon>mdi-logout-variant</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Sair</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <BotaoDelete @deletar-Todos-Pots="deletarTodosPots" />
      <AddPosts @novo-post="adicionarPost" />
      <div v-for="(post, index) in Posts" :key="index" class="post-card">
        <v-card color="#4E97D1" class="margem-card">
          <v-card-subtitle class="font-weight-bold">{{ post.name }}</v-card-subtitle>
          <v-card-text>{{ post.text }}</v-card-text>
          <v-btn @click="editarposts(post, index)">Editar</v-btn>
          <v-btn @click="removePost(index)" color="error">Remover</v-btn>
        </v-card>
      </div>
      <EditPosts :dialog="dialog" :editarpost="editarpost"
      @salvar-post-editado="salvarpostsedit" @cancelar-editar="cancelaredit" />
    </v-main>
  </v-app>
</template>
  
<script>
    import BotaoDelete from '../components/BotaoDeletarTodos.vue';
    import AddPosts from '../components/AddPosts.vue';
    import EditPosts from '../components/EditPosts.vue';
    import router from '../router/index.js'
    
    export default {
      name: "App",
      components: {
        BotaoDelete,
        AddPosts,
        EditPosts
      },
      data: () => ({
        Posts: [
        {
          id: 1,
          name: "João",
          text: "Hoje é um belo dia para ser feliz",
        },
        {
          id: 2,
          name: "Clara",
          text: "Insista, persista e nunca desista.",
        },
        ],
        novoPosts: {
          id: 3,
          name: "Nádia",
          text: "",
        },
        editarpost: {
          index: null,
          text: "",
        },
        dialog: false,
        menu: false,
      }),
      methods: {
        removePost(index) {
          this.Posts = this.Posts.filter((post, i) => i !== index);
        },
        editarposts(post, index) {
          this.editarpost.index = index;
          this.editarpost.text = post.text;
          this.dialog = true;
        },
        salvarpostsedit() {
          if (this.editarpost.index !== null) {
            this.$set(this.Posts, this.editarpost.index, {
              name: this.Posts[this.editarpost.index].name,
              text: this.editarpost.text,
            });
            this.dialog = false;
          }
        },
        cancelaredit() {
          this.dialog = false;
          this.editarpost.index = null;
          this.editarpost.text = "";
        },
        deletarTodosPots() {
          this.Posts = [];
        },
        adicionarPost(post) {
          this.Posts.push(post);
        },
        toggleMenu(){
          this.menu = !this.menu;
        },
        goToUser() {
          this.$router.push(`/usuario/`);
        },
        // goToFeed() {
        //   this.$router.push('/publi');
        // },
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
      },
    },
  }
</script>
  
  <style>
  .margem-card {
    margin-top: 1em;
    margin-left: 10px;
    margin-right: 10px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 18px;
  }
  </style>