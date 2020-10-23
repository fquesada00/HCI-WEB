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
    <v-tabs v-if="!loggedIn" right fixed-tabs>
      <v-tab v-for="tab in tabsLoggedOut" v-bind:key="tab.name" :to="tab.route" >
        <div :append-icon="tab.icon">{{ tab.name }}</div>
      </v-tab>
    </v-tabs>
    <v-tabs v-else right fixed-tabs>
      <v-tab v-for="tab in tabsLoggedIn" v-bind:key="tab.name" :to="tab.route" >
        <div :append-icon="tab.icon">{{ tab.name }}</div>
      </v-tab>
    </v-tabs>
  </v-app-bar>
</template>
<script>
export default {
  name: "Header.vue",
  props: ['loggedIn'],

  data: () => ({
    tabsLoggedOut: [
      {name: "Inicio", icon: null, route: "/"},
      {name: "Crear Rutinas", icon: null, route: "/rutinas"},
      {name: "Explorar", icon: null, route: "/explore"},
      {
        name: "Iniciar Sesion",
        icon: "mdi-login",
        route: "/login",
      },
      {
        name: "Crear Cuenta",
        icon: "mdi-account-plus-outline",
        route: "/signin",
      },
    ],
    tabsLoggedIn: [
      {name: "Inicio", icon: null,route: "/"},
      {name: "Crear Rutinas", icon: null, route: "/rutinas"},
      {name: "Explorar", icon: null, route: "/explore"},
      {name: "Mi Perfil", icon: null, route: "/profile"},
      {
        name: "Cerrar Sesion",
        icon: "mdi-exit-to-app",
        route: "/",
      },
    ],
    active: 0,
  }),
};
</script>