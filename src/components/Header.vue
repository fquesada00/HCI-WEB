<template>
  <v-app-bar
      class="header"
      color="rgb(57, 198, 173,0.9)"
      max-height="64px"
      app fixed
  >

    <v-app-bar-nav-icon to="/">
      <v-img
          src="../assets/logoFitbo.png"
          width="150px"
          height="150px"
          class="ml-4"
      ></v-img>
    </v-app-bar-nav-icon>

    <v-toolbar-title class="display-2 font-weight-bold" @click="$router.push($route.query.redirect || '/')"
                     style="cursor:pointer; width: 500px" >FitBo</v-toolbar-title>
    <v-tabs v-if="!loggedIn" right fixed-tabs>
      <v-tab v-for="tab in tabsLoggedOut" v-bind:key="tab.name" :to="tab.route" >
        <div>{{ tab.name }}</div>
        <v-icon right >{{tab.icon}}</v-icon>
      </v-tab>
    </v-tabs>
    <v-tabs v-else right fixed-tabs>
      <v-tab v-for="tab in tabsLoggedIn" v-bind:key="tab.name" :to="tab.route" >
        <div>{{ tab.name }}</div>
        <v-icon right >{{tab.icon}}</v-icon>
      </v-tab>
      <v-btn large color="rgb(57, 198, 173,0.9)" @click="logOut" depressed :replace="true" to='/' dark height="64px">Cerrar Sesion
      <v-icon>mdi-exit-to-app</v-icon>
    </v-btn>
    </v-tabs>
  </v-app-bar>
</template>

<script>

import {
  UserApi
} from '../js/user'
import {bus} from "../main";

export default {
  name: "Header.vue",
  data: () => ({
    key: 0,
    loggedIn: sessionStorage.getItem('token'),
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
      {name: "Mi Perfil", icon: "mdi-account", route: "/profile"},
    
    ],
    active: 0,
  }),
  methods:{

    logOut: function() {
      UserApi.logout().then(()=>{
        this.loggedIn = !!sessionStorage.getItem('token')
        bus.$emit('logged')
      });

    },
    checkLogin:function (){
      this.loggedIn = !!this.sessionStorage.getItem('token')
    },
    updateLogin:function (){
      let ret = sessionStorage.getItem('token') != null
      this.key = 1;
      return ret
    }
  },
  mounted() {
    bus.$on('logged',() =>{
      this.loggedIn = !!sessionStorage.getItem('token')
    })
  }
};
</script>