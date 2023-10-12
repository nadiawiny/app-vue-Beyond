<template>
  <v-app>
    <v-main>
      <v-app-bar app color = "#008DC0">Rede Social</v-app-bar>
        <v-btn @click="clearTimeline" color="error">Apagar Publicações</v-btn>
        <div>
            <Timeline :posts="posts" @add-post="addPost" @edit-post="editPost" @remove-post="removePost" />
          </div>
      </v-main>
  </v-app>
</template>

<script>
// import Vue from 'vue'
import Timeline from './components/Timeline.vue'

export default {
  components: {
    Timeline
  },
  data() {
    return {
      posts: [
        {
          id: 1,
          text: "Minha primeira Postagem"
        },
        {
          id: 2,
          text: "outra postagem"
        }
      ]
    }
  },
  methods: {
    
    addPost(newPost) {
      this.posts.push(newPost)
    },
    editPost(editedPost) {
      const index = this.posts.findIndex(post => post.id === editedPost.id)
      if(index!== -1){
        const updatedPosts = [...this.posts]
        updatedPosts[index] = editedPost
        this.posts = updatedPosts
      }
      // const index = this.posts.findIndex(post => post.id === editedPost.id)
      // if (index !== -1) {
      //   Vue.set(this.posts, index, editedPost)
      // }
    },
    removePost(id) { // remove as postagens pelo id
      this.posts = this.posts.filter(post => post.id !== id)
    },
    clearTimeline() { // remove todas as postagens
      this.posts = []
    }
  }
}
</script>