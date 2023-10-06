<template>
  <div>
    <PostForm @plus="addPost" />
    <div v-for="post in posts" :key="post.id">
      <PostComponent :post="post" @edit="editPost" @remove="removePost" />
    </div>
  </div>
</template>

<script>

import PostForm from './PostForm.vue'
import PostComponent from './PostComponent.vue'

export default {
    name: "TimelineComponent",
    components: {
    PostForm,
    PostComponent
  },
  props: {
    posts: Array
  },
  methods: {
    addPost(newPost) {
      this.$emit('add-post', newPost)
    },
    editPost(newPost) {
      this.$emit('edit-post', newPost)
    },
    removePost(id) {
      this.$emit('remove-post', id)
    }
  }
}
</script>