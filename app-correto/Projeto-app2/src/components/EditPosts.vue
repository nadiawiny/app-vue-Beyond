<template>
  <v-dialog v-model="localDialog" max-width="500">
    <v-card>
      <v-card-title>Editar Posts</v-card-title>
      <v-card-text>
        <v-text-field v-model="editedText" label="Novo Post"></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-btn @click="salvarPostEditado">Salvar</v-btn>
        <v-btn @click="cancelarEditar">Cancelar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    dialog: {
      type: Boolean,
      required: true,
    },
    editarpost: Object,
  },
  data() {
    return {
      editedText: "",
      localDialog: this.dialog,
    };
  },
  watch: {
    dialog: {
      handler(newVal) {
        this.localDialog = newVal;
      },
      immediate: true,
    },
  },
  methods: {
    salvarPostEditado() {
      this.$emit("salvar-post-editado", this.editedText);
      this.$emit("update:dialog", false);
    },
    cancelarEditar() {
      this.$emit("cancelar-editar");
      this.$emit("update:dialog", false);
    },
  },
};
</script>
