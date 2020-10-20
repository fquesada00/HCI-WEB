<template>
  <v-app-bar tran color="rgb(57, 198, 173,0.9)" max-height="64px">
    <v-toolbar-title class="display-3">FitBo</v-toolbar-title>
    <v-tabs right>
      <v-tab v-for="tab in tabs" v-bind:key="tab.name" v-bind:href="tab.route" >
        <span>{{ tab.name }}</span>
        <v-icon right >{{tab.icon}}</v-icon>
      </v-tab>
    </v-tabs>
  </v-app-bar>

</template>

<script>

export default {
  name: "Header.vue",
  data: () => ({
    tabs: [
      {name:"Inicio", icon: "", bar:false, route:"/"},
      {name:"Crear Rutinas",icon:"",bar:false,route:"/rutinas"},
      {name:"Explorar",icon:"",bar:false,route:"/explore"},
      {name:"Mi Perfil",icon:"",bar:true,route:"/profile"},
      {name:"Iniciar Sesion",icon:"mdi-login",bar:false,route:"/login"},
      {name:"Crear Cuenta",icon:"mdi-account-plus-outline",bar:false,route:"/createAccount"}
    ]})
}
</script>

<style scoped>

</style>