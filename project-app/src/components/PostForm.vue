<template>
  <v-app-bar fixed bottom color = "black">
      <v-text-field v-model="newPost.text" @keyup.enter="plusPost()" solo hide-details label="Nova Publicação"></v-text-field>
      <v-btn @click="plusPost()" icon color ="#008DC0">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
  </v-app-bar>
</template>  

<script>
export default {
  data() {
    return {
      newPost: {
        id: null,
        text: ''
      }
    }
  },
  methods: {
    plusPost(){
      if (this.newPost.text.trim() === '') return
      this.newPost.id = Date.now()
      this.$emit('plus', this.newPost)
      this.newPost = ''
      this.textInput = ''
    }
  }
}
</script>