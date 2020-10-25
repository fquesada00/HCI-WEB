<template>
  <v-container class="justify-center">
    <v-card color="rgb(255,255,255,0.75)">
      <v-row class="pa-3 ma-3">
        <v-col class="font-weight-black text-h3" cols="10">
          <template>
            {{ nombreVista.toUpperCase() }}
          </template>
        </v-col>
        <v-spacer></v-spacer>
        <v-col class="ma-auto">
          <v-btn icon><v-icon
              large
              @click="toggleSelect = !toggleSelect"
          >
            mdi-filter
          </v-icon>
          </v-btn>
          <v-select
              :items="order"
              v-if="toggleSelect"
              :menu-props="{value: toggleSelect}"
          />
        </v-col>
      </v-row>
      <v-row class="ma-auto">
        <v-col v-for="(rutina,indice) in rutinas" v-bind:key="indice" cols="4">
          <v-card height="60%" class="pa-6 ma-3 mr-0 text-center font-weight-bold text-h5" elevation="16" color="rgb(57, 198, 173)">
            <v-row class="justify-center font-italic">
              <template>
                {{ rutina.name }}
              </template>
            </v-row>
            <v-row class="font-weight-light text-right justify-end mb-o text-lg-subtitle-2">
              <v-col class="font-weight-thin ma-auto" cols="auto">
                dificultad:{{rutina.difficulty}}
              </v-col>
              <v-col class="font-weight-thin">
                creada por {{ rutina.creator.username }}
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import {RoutinesApi} from "../js/routines";

export default {
  name: "verRutinas",
  props: ['nombreVista','rutina'],
  data: () => ({
    rutinas: [],
    toggleSelect:false,
    order:['Dificultad','Nombre','Categoria','Creador']
  }),
  mounted() {
      RoutinesApi.getAllRoutinesBy(this.rutina).then((rutinas) => {
        this.rutinas = rutinas.results
      }).catch(err => {
        throw err
      })

  },
  methods: {
    getColor: (rutina) => {
      switch (rutina.difficulty){
          case 'rookie': return 'green';
          case 'beginner': return  'light-green';
          case 'intermediate': return 'yellow';
          case 'advanced': return  'orange';
          case 'expert': return 'red';
          default: return 'white';
        }
    }
  }
}
</script>

<style scoped>

</style>