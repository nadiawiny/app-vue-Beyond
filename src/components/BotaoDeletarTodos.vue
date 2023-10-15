<template>
  <v-btn color="error" @click="deletarTodosPots">
    Deletar Publicações
  </v-btn>
</template>

<script>
export default {
  name: 'BotaoDelete',
  methods: {
    deletarTodosPots() {
      this.$emit('deletar-Todos-Pots')
    }
  },
};
</script>