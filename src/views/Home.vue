<template>
  <v-container v-if="!logged">
    <div class="titulo">
      <h1 class="tituloText">Arma tu rutina</h1>
    </div>
  </v-container>
  <v-container v-else>
    <v-row style="margin: auto;">
      <v-col style="max-width: 500px;">
        <v-card style="padding: 7px" color="rgb(255, 255, 255,0.6)">
          <v-container class="text-h4 black--text font-weight-light">
            ¡Bienvenido de Nuevo!
          </v-container>

          <v-carousel cycle show-arrows-on-hover height="400px" interval="10000">
            <v-carousel-item :src="img1">
              <v-container class="text-h4 font-weight-bold text-right">
                Mis favoritos
              </v-container>
            </v-carousel-item>
            <v-carousel-item :src="img2">
              <v-container class="text-h4 font-weight-bold text-right">
                Mis Rutinas
              </v-container>
            </v-carousel-item>
            <v-carousel-item :src="img3">
              <v-container class="text-h4 font-weight-bold text-right">
                Mis ejercicios
              </v-container>
            </v-carousel-item>
          </v-carousel>
        </v-card>
      </v-col>
      <v-col style="padding: 50px">
        <v-row justify="center" class="py-3">
          <v-btn style="background-color:rgb(57, 198, 173)" width="100%">
            Crear Ejercicio
          </v-btn>
          <ExerciseCard></ExerciseCard>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import {bus} from "../main";
import ExerciseCard from "../components/ExerciseCard";
export default {
  name: "Home",
  components:{ExerciseCard},
  data() {
    return {
      logged: !!sessionStorage.getItem('token'),
      img1: require('../assets/img1.jpg'),
      img2: require('../assets/img2.jpg'),
      img3: require('../assets/img3.jpg')


    }
  },
  mounted() {
    bus.$on('logged', () => {
      this.logged = !!sessionStorage.getItem('logged')
    })
  }
}
</script>
<style scoped>


.titulo {
  text-align: center;
}

.tituloText {
  color: white;
  font-size: 120px;
  text-transform: uppercase;
  background: transparent;
}
</style>