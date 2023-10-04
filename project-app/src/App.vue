<template>
  <div>
    <v-app>
      <v-app-bar color="primary">
        <v-btn @click="clearTimeline" color="error">Apagar Publicações</v-btn>
      </v-app-bar>
      <v-main>
        <Timeline :posts="posts" @add-post="addPost" @edit-post="editPost" @remove-post="removePost" />
      </v-main>
      <v-app-bar app></v-app-bar>
    </v-app>
  </div>
</template>

<script>
import Vue from 'vue'
import Timeline from './components/Timeline.vue'

export default {
  components: {
    Timeline
  },
  data() {
    return {
      posts: []
    }
  },
  methods: {
    addPost(newPost) {
      this.posts.push(newPost)
    },
    editPost(editedPost) {
      const index = this.posts.findIndex(post => post.id === editedPost.id)
      if (index !== -1) {
        Vue.set(this.posts, index, editedPost)
      }
    },
    removePost(id) {
      this.posts = this.posts.filter(post => post.id !== id)
    },
    clearTimeline() {
      this.posts = []
    }
  }
}
</script>