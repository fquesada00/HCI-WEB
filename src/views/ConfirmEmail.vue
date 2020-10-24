<template>
  <v-container v-if="error === ''">
    <v-row>
      <v-spacer></v-spacer>
      <v-card color="success white--text" class="mensajeError">
        <h1>Exito</h1>
        <h2>Su cuenta se ha verificado con exito</h2>
      </v-card>
      <v-spacer></v-spacer>
    </v-row>
  </v-container>
  <v-container v-else-if="error != null && error.length > 0">
    <v-row>
      <v-spacer></v-spacer>
      <v-card color="error  " class="mensajeError">
        <h1>Error</h1>
        <h2>{{ error }}</h2>
      </v-card>
      <v-spacer></v-spacer>
    </v-row>
  </v-container>
</template>

<script>
import {UserApi} from "../js/user";

export default {
  name: "confirmEmail",
  data: () => ({
    error: null
  }),
  async created() {
    let email = this.$route.query.email;
    let code = this.$route.query.code;
    await UserApi.verifyEmail(email, code).catch(() => {
      this.error = 'No se pudo verificar su cuenta'
    }).then((val)=>{
      if(val)
        this.error=''
    })

  }
}
</script>

<style scoped>
.mensajeError {
  justify-self: center;
  text-align: center;
  padding: 25px;
  margin-top: 10%;
}

</style>