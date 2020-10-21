<template>
  <v-app-bar fixed
    class="header"
    color="rgb(57, 198, 173,0.9)"
    max-height="64px"
    app
  >
    <v-container>
    <v-app-bar-nav-icon >
    <v-img
      src="../assets/logoFitbo.png"
      width="150px"
      height="150px"
    ></v-img>
    </v-app-bar-nav-icon>
    <v-app-bar-nav-title class="display-2">FitBo</v-app-bar-nav-title>
    </v-container>
    <v-tabs right>
      <v-tab v-for="tab in tabs" v-bind:key="tab.name" :to="tab.route">
        <span>{{ tab.name }}</span>
        <v-icon right>{{ tab.icon }}</v-icon>
      </v-tab>
    </v-tabs>
  </v-app-bar>
</template>
<script>
export default {
  name: "Header.vue",

  data: () => ({
    tabs: [
      { name: "Inicio", icon: "", bar: false, route: "/" },
      { name: "Crear Rutinas", icon: "", bar: false, route: "/rutinas" },
      { name: "Explorar", icon: "", bar: false, route: "/explore" },
      { name: "Mi Perfil", icon: "", bar: true, route: "/profile" },
      {
        name: "Iniciar Sesion",
        icon: "mdi-login",
        bar: false,
        route: "/login",
      },
      {
        name: "Crear Cuenta",
        icon: "mdi-account-plus-outline",
        bar: false,
        route: "/signin",
      },
    ],
    active: 0,
  }),
};
</script>

<style scoped >
.router-link-exact-active {
  border: 5px dashed red;
}
</style>