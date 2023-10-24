<template>
  <v-app>
    <v-app-bar app color="#000000" flat>
      <router-link to="/login">Login</router-link>br
      <router-link to="/publi">Ver Publicações</router-link>br
      <router-link to="/usuario">Ver Usuarios</router-link>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
};
</script>
