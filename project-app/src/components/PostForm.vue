<template>
  <div>
    <v-textarea v-model="newPost.text" label="Nova Publicação" rows="3"></v-textarea>
    <v-btn @click="submitPost" color="primary">Publicar</v-btn>
  </div>
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
    submitPost() {
      if (this.newPost.text.trim() === '') return
      this.newPost.id = Date.now()
      this.$emit('submit', this.newPost)
      this.newPost.text = ''
    }
  }
}
</script>