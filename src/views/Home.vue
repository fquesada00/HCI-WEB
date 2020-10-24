<template>
  <v-container v-if="!logged">
    <div class="titulo" style="height: 100%;width: 100%;margin-top: 13%">
      <h1 class="tituloText">Arma tu rutina</h1>
    </div>
  </v-container>
  <v-container v-else>
    <v-row style="margin: auto auto auto;">
      <v-col style="max-width: 500px; padding:50px; margin: auto" cols="2">
        <v-card style="padding: 7px" color="rgb(255, 255, 255,0.6)">
          <v-container class="text-h4 black--text font-weight-light">
            ¡Bienvenido de Nuevo!
          </v-container>

          <v-carousel cycle show-arrows-on-hover height="400px" interval="10000">
            <v-carousel-item :src="img1"  style="text-shadow:0 0 3px #000000;cursor:pointer;" @click="open('favs')">
              <v-container class="text-h4 font-weight-bold text-right" style="text-shadow:0 0 3px #000000">
                Mis favoritos
              </v-container>
            </v-carousel-item>
            <v-carousel-item :src="img2" style="text-shadow:0 0 3px #000000;cursor:pointer;" @click="open('rutinas')">
              <v-container class="text-h4 font-weight-bold text-right">
                Mis Rutinas
              </v-container>
            </v-carousel-item>
            <v-carousel-item :src="img3"  style="text-shadow:0 0 3px #000000;cursor:pointer;" @click="open('ejercicios')">
              <v-container class="text-h4 font-weight-bold text-right">
                Mis ejercicios
              </v-container>
            </v-carousel-item>
          </v-carousel>
        </v-card>
      </v-col>
      <v-col style="max-width: 50%; padding:50px; margin: auto">
        <v-container style="margin: auto">
          <v-btn style="background-color:rgb(57, 198, 173);border-radius: 10px;margin-bottom: 10px;" width="100%"
                 height="50px" class="text-h5 black--text font-weight-bold" to="/createExercise">
            Crear Ejercicio
          </v-btn>
          <v-btn style="background-color:rgb(57, 198, 173);border-radius: 10px;margin-top: 10px" width="100%"
                 height="50px" class="text-h5 black--text font-weight-bold" to="/rutinas">
            Crear Rutina
          </v-btn>
        </v-container>
        <v-row style="height: 10px">
          <span></span>
        </v-row>
        <v-container style=";margin: auto" color="rgb(255, 255, 255,0.6)">
          <v-row justify="space-around" align="center">
            <v-container style="margin: auto">
              <v-carousel height="250px" cycle show-arrows-on-hover interval="10000">
                <v-carousel-item v-for="(rutina,index) in destacados" v-bind:key="index" :src="categorias[index]" @click="open(rutina)" style="cursor:pointer;">
                  <v-divider></v-divider>
                  <v-row>
                    <v-container style="text-align: right; text-shadow:0 0 3px #000000" class="text-h3 font-weight-light ">
                      {{ rutina }}
                    </v-container>
                  </v-row>
                </v-carousel-item>
              </v-carousel>
            </v-container>
          </v-row>
        </v-container>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>

import {bus} from "../main";

export default {
  name: "Home",
  data() {
    return {
      logged: !!sessionStorage.getItem('token'),
      img1: require('../assets/img1.jpg'),
      img2: require('../assets/img2.jpg'),
      img3: require('../assets/img3.jpg'),
      categorias: [require('../assets/cat1.jpg'), require('../assets/cat2.jpg'), require('../assets/cat3.jpg')],
      destacados: ['Rutinas cortas', 'Rutinas medias', 'Rutinas Largas']
    }
  },
  methods:{
    open:function (data){
      console.log('open ' +data)
      bus.$emit('open ' + data)
    }
  }
  ,
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