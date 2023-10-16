<template>
  <div>
    <v-app-bar fixed bottom color="#000000">
      <v-text-field v-model="novoPosts.text" @keyup.enter="adicionarPost" solo hide-details label="Postagem"></v-text-field>
      <v-btn @click="adicionarPost" icon color="white">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data: () => ({
    novoPosts: {
      name: "Nádia",
      text: "",
    },
  }),
  methods: {
    adicionarPost() {
      if (this.novoPosts.text && this.novoPosts.name) {
        const post = {
          name: this.novoPosts.name,
          text: this.novoPosts.text,
        };
        this.$emit("novo-post", post);
        this.novoPosts.name = "Nádia";
        this.novoPosts.text = "";
      }
    },
  },
};
</script>