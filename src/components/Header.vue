<template>
  <v-app-bar
      class="header"
      fixed
      color="rgb(57, 198, 173,0.9)"
      max-height="64px"
      app
  >

    <v-app-bar-nav-icon to="/">
      <v-img
          src="../assets/logoFitbo.png"
          width="150px"
          height="150px"
          class="ml-4"
      ></v-img>
    </v-app-bar-nav-icon>

    <v-toolbar-title class="display-2" @click="$router.push('/')"
                     style="cursor:pointer; width: 500px" >FitBo</v-toolbar-title>
    <v-tabs right fixed-tabs>
      <v-tab v-for="tab in tabs" v-bind:key="tab.name" :to="tab.route" >
        <div>{{ tab.name }}</div>
        <v-icon v-show="tab.icon != null" right>{{ tab.icon }}</v-icon>
      </v-tab>
    </v-tabs>
  </v-app-bar>
</template>
<script>
export default {
  name: "Header.vue",

  data: () => ({
    tabs: [
      {name: "Inicio", icon: null, bar: false, route: "/"},
      {name: "Crear Rutinas", icon: null, bar: false, route: "/rutinas"},
      {name: "Explorar", icon: null, bar: false, route: "/explore"},
      {name: "Mi Perfil", icon: null, bar: true, route: "/profile"},
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