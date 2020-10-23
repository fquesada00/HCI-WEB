<template>
  <v-expansion-panels multiple class="panel">
    <v-expansion-panel  style="margin-bottom:30px" v-bind:key="card" v-for="card in cards">
      <v-expansion-panel-header v-on:click="card.show = !card.show" style="font-size:30px">
        <v-container>
        <v-row>{{ card.titulo }}</v-row>
        <v-row v-if="card.show">
          <v-col  cols="auto" v-for="actual in card.exercises.slice(0,2)" v-bind:key="actual">
            <v-card height="160px" width="150px">
              <v-img class="align-baseline" :src="actual.img" height="160px" width="150px">
                <v-container fluid class='justify-center' style="font-size:16px;background-color: white; opacity: 0.6;">
                  {{ actual.nombre }}
                </v-container>
              </v-img>
            </v-card>
          </v-col>
        </v-row>
        </v-container>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-row>
          <v-col  cols="auto" v-for="actual in card.exercises" v-bind:key="actual">
            <v-card height="160px" width="150px">
              <v-img class="align-baseline" :src="actual.img" height="160px" width="150px">
                <v-container fluid class='justify-center' style="background-color: white; opacity: 0.6;">
                  {{ actual.nombre }}
                </v-container>
              </v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {
  name: "ExerciseCard",
  data: () => ({
    cards: [
      {
        titulo: "Mis Mejores Ejercicios",show:true , exercises:
            [{nombre: "Biceps al pecho", img: "https://cdn.vuetifyjs.com/images/john.jpg"},
              {nombre: "Biceps Alternado", img: "https://cdn.vuetifyjs.com/images/john.jpg"},
              {nombre: "Biceps Conjuntos", img: "https://cdn.vuetifyjs.com/images/john.jpg"},
              {nombre: "Biceps Conjuntos", img: "https://cdn.vuetifyjs.com/images/john.jpg"},
              {nombre: "Biceps Conjuntos", img: "https://cdn.vuetifyjs.com/images/john.jpg"},
              {nombre: "Biceps Conjuntos", img: "https://cdn.vuetifyjs.com/images/john.jpg"},
              {nombre: "Biceps Conjuntos", img: "https://cdn.vuetifyjs.com/images/john.jpg"},
              {nombre: "Biceps Conjuntos", img: "https://cdn.vuetifyjs.com/images/john.jpg"},
              {nombre: "Biceps Conjuntos", img: "https://cdn.vuetifyjs.com/images/john.jpg"},
              {nombre: "Biceps Conjuntos", img: "https://cdn.vuetifyjs.com/images/john.jpg"},
              {nombre: "Biceps Conjuntos", img: "https://cdn.vuetifyjs.com/images/john.jpg"},
              {nombre: "Biceps Conjuntos", img: "https://cdn.vuetifyjs.com/images/john.jpg"},
              {nombre: "Biceps Conjuntos", img: "https://cdn.vuetifyjs.com/images/john.jpg"},
              {nombre: "Biceps Conjuntos", img: "https://cdn.vuetifyjs.com/images/john.jpg"},
              {nombre: "Biceps Conjuntos", img: "https://cdn.vuetifyjs.com/images/john.jpg"},
              {nombre: "Biceps Conjuntos", img: "https://cdn.vuetifyjs.com/images/john.jpg"}]
      },
      {titulo: "Mis Rutinas",show:true ,exercises: ["Abs en Fuego", "No des la espalda", "Destruye Gluteos"]}
    ]
  })
}
</script>

<style scoped>
.panel{
}
</style>