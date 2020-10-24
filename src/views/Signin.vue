<template>
  <v-row>
    <RegisterForm @success="showMessage"/>
    <v-overlay
        :z-index="zIndex"
        :value="overlay"
    >
      <v-card class="carta">
        <v-row justify="center">
          <span>¡Muy bien! Solo te queda confirmar tu mail</span>
        </v-row>
        <v-row justify="center" style="padding-top: 10%;">

          <v-btn
              class="white--text"
              color="teal"
              @click="$router.push($route.query.redirect || '/')"
          >
            ¡Entendido!
          </v-btn>
        </v-row>
      </v-card>
    </v-overlay>
  </v-row>
</template>

<script>

import RegisterForm from "@/components/RegisterForm";

export default {
  name: "Signin",
  data: () => ({
    overlay: false,
    zIndex: 0
  }),
  components: {RegisterForm},
  methods: {
    showMessage: function () {
      this.overlay = !this.overlay
    }
  }
}
</script>


<style scoped>
.carta{
  justify-self: center;
  text-align: center;
  padding: 25px;
  margin-top: 10%;
}
</style>