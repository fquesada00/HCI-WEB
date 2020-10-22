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
      <v-tab v-for="tab in filteredTabs" v-bind:key="tab.name" :to="tab.route" >
        <div :append-icon="tab.icon" v-if="tab.showme">{{ tab.name }}</div>
      </v-tab>
    </v-tabs>
  </v-app-bar>
</template>
<script>
export default {
  name: "Header.vue",

  data: () => ({
    loggedIn: false,
    tabs: [
      {name: "Inicio", icon: null, showme: true,route: "/"},
      {name: "Crear Rutinas", icon: null, showme: true, route: "/rutinas"},
      {name: "Explorar", icon: null, showme: true, route: "/explore"},
      {name: "Mi Perfil", icon: null, showme: loggedIn, route: "/profile"},
      {
        name: "Iniciar Sesion",
        icon: "mdi-login",
        showme: !loggedIn,
        route: "/login",
      },
      {
        name: "Crear Cuenta",
        icon: "mdi-account-plus-outline",
        showme: !loggedIn,
        route: "/signin",
      },
      {
        name: "Cerrar Sesion",
        icon: "mdi-exit-to-app",
        showme: loggedIn,
        route: "/",
      },
    ],
    active: 0,
  }),
  computed: {
    filteredTabs: function() {
      return this.tabs.filter(e => e.showme)
    },
    loggedIn: function() {
      return sessionStorage.getItem('token') != null
    }
  }
};
</script>