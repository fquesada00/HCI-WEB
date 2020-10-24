<template>
  <v-expansion-panels multiple style="margin-top: 50px;border-radius: 10px;height: 10px;">
    <v-expansion-panel class="panel" style="margin-bottom:30px;" v-bind:key="index" v-for="(card,index) in cards">
      <v-expansion-panel-header v-on:click="card.show = !card.show" style="font-size:30px">
        <v-container>
          <v-row>{{ card.titulo }}</v-row>
          <v-row v-if="card.show">
            <v-col cols="auto" v-for="(actual,idx) in card.exercises.slice(0,2)" v-bind:key="idx">
              <v-card height="160px" width="150px">
                <v-img class="align-baseline" :src="actual.img" height="160px" width="150px">
                  <v-container fluid class='justify-center'
                               style="font-size:16px;background-color: white; opacity: 0.6;">
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
          <v-col cols="auto" v-for="(actual,idx) in card.exercises" v-bind:key="idx">
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
  name: "ExerciseBox",
  data: () => ({
        cards: [{
          titulo: 'Destacados',
          exercises: {nombre: 'Ej1'}
        }]
      }
  )
}
</script>

<style scoped>
.panel {
  opacity: 60%;
}
</style>