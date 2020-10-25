<template>
  <v-container rounded style="width: 550px">
    <v-row>
      <v-col>
        <v-select
          :items="items"
          label="Categorías"
          @input="selectExer"
        ></v-select>
      </v-col>
    </v-row>
    <div>
      <div v-for="display in samples" :key="display.group">
        <DisplayList
          v-if="display.show"
          :exercises="display.exercises"
          :idx="indice_interno"
        />
      </div>
    </div>
  </v-container>
</template>

<script>
import DisplayList from "./MotherDisplayExercises3";
import { bus } from "../main";
import {Store} from "../js/store";

export default {
  components: { DisplayList },
  props: ["idx"],
  data: () => ({
    items: ["Brazos", "Piernas", "Pecho", "Abdominales"],
    busqueda: "",
    indice_interno: -1,
    samples: [],
    active: null,
  }),
  methods: {
    selectExer(event) {
      if (this.active != null) {
        //buscar el elemento previo y setearlo en null
        this.samples.find((e) => e.grupo == this.active).show = false;
      }
      this.active = event;
      //actualizar al nuevo elemento
      this.samples.find((e) => e.grupo == event).show = true;
    },
  },
  created() {
    var results = Store.getMyExercisesAll();
    this.samples[0].push({ grupo: "Brazos", show: false, exercises: [] });
    this.samples[1].push({ grupo: "Piernas", show: false, exercises: [] });
    this.samples[2].push({ grupo: "Pecho", show: false, exercises: [] });
    this.samples[3].push({ grupo: "Abdominales", show: false, exercises: [] });
    for (var i = 0; i < 4; i++) {
      for (var j = 0; j < results[i].length; j++) {
        this.samples[i].exercises.push({
          name: results[i][j].name,
          detail: results[i][j].detail,
          type: results[i][j].type,
          duration: results[i][j].duration,
          repetitions: results[i][j].repetitions,
        });
      }
    }
  },
  mounted() {
    bus.$on("changeMotherDisplay", (data) => {
      this.indice_interno = data;
    });
  },
};
</script>

<style scoped>
</style>
