<template>
  <v-app>
    <v-main>
      <v-app-bar app color="#000000" flat></v-app-bar>
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
import BotaoDelete from './components/BotaoDeletarTodos.vue';
import AddPosts from './components/AddPosts.vue'
import EditPosts from './components/EditPosts.vue'


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
        name: "Dr. Derick",
        text: "Hoje é um belo dia para salvar vidas",
      },
      {
        name: "Dr. Yang",
        text: "Eu não sou linda, eu sou inteligente, quer me elogiar? eloquia o meu cerebro",
      },
    ],
    novoPosts: {
      name: "Eu",
      text: "",
    },
    editarpost: {
      index: null,
      text: "",
    },
    dialog: false,
  }),


  methods: {
    removePost(index) {
      this.Posts = this.Posts.filter((post, i) => i !== index);
    },
    editarposts(post, index) {
      this.editarpost.index = index;
      this.editarpost.text = post.text;
      this.dialog = true
    },
    salvarpostsedit() {
      if (this.editarpost.index !== null) {
        this.$set(this.Posts, this.editarpost.index, {
          name: this.Posts[this.editarpost.index].name,
          text: this.editarpost.text,
        });
        this.dialog = false
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
  },
};
</script>
<style>
.margem-card {
  margin-top: 1em;
  margin-left: 10px;
  margin-right: 10px;
}
</style>
