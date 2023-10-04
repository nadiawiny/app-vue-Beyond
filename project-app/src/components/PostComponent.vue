<template>
  <div>
    <v-card>
      <v-card-title>{{ post.text }}</v-card-title>
      <v-card-text>
        <!-- Renderizar imagens ou outros conteúdos aqui -->
      </v-card-text>
      <v-card-actions>
        <v-btn @click="editPost" color="primary">Editar</v-btn>
        <v-btn @click="removePost" color="error">Remover</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    post: Object
  },
  methods: {
    editPost() {
      this.$emit('edit', this.post)
    },
    removePost() {
      this.$emit('remove', this.post.id)
    }
  }
}
</script>