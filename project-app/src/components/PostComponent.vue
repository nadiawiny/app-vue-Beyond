<template>
  <div>
    <v-card>
      <v-card-title>{{ post.text }}</v-card-title>
      <v-card-actions>
        <v-btn @click="editPost(post)" color="primary">Editar</v-btn>
        <v-btn @click="removePost(post.id)" color="error">Remover</v-btn>
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
    editPost(post) {
      this.$emit('edit', post)
    },
    removePost() {
      this.$emit('remove', this.post.id)
    }
  }
}
</script>