<template>
  <v-container class="login" width="40%">
    <v-row v-for="data in loginInfo" v-bind:key="data.title">
      <v-text-field :prepend-icon="data.icon" :append-icon="data.outerIcon" :placeholder="data.title"></v-text-field>
    </v-row>
    <v-btn x-large style="margin-left:30%;" color="rgb(57, 198, 173)">Iniciar Sesion</v-btn>
    <br/>
    <br/>
    <span>¿Aun no tienes cuenta? </span>
    <a href="">Crear Cuenta</a>

  </v-container>
</template>

<script>
export default {
  name: "LoginForm",
  data: () => ({
    loginInfo: [
      {title: "Usuario/Email", icon: "mdi-account"},
      {title: "Contraseña", icon: "mdi-lock", outerIcon: "mdi-eye-off",}
    ]
  })
}
</script>

<style scoped>
.login {
  border-radius: 40px;
  background-color: white;
  align-self: center;
  justify-self: center;
  padding-left: 4%;
  padding-right: 4%;
  max-width: 600px;
}
</style>