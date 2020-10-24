<template>
  <div class="big-exercise-box2">
    <v-container>
      <v-row class="d-flex justify-space-between">
        <v-col cols="12" md="8" lg="9">
          <div>
            <p class="font-weight-black text-h5">{{ seccion_name }}</p>
          </div>
        </v-col>
        <v-col class="align-content-center" lg="3" md="4" cols="7">
          <!-- <v-text-field
            prefix="#"
            placeholder="0"
            type="number"
            solo
            :rules="[verify]"
          >
          </v-text-field> -->
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-col v-for="exercise in exercises" :key="exercise.ej">
        <v-container>
          <ExerciseBox :ej="exercise.ej"></ExerciseBox>
        </v-container>
      </v-col>
      <v-divider></v-divider>
      <v-col align="center">
        <v-btn class="teal accent-4 font-weight-black text-h6">CONTINUAR</v-btn>
      </v-col>
    </v-container>
  </div>
</template>

<script>
import { bus } from "../main";
import ExerciseBox from "./ExerciseBox";
export default {
  components: { ExerciseBox },
  props: ["seccion_name"],

  data() {
    return {
      exercises: [],
    };
  },
  methods: {
    // verify(v) {
    //   //   if (!v.trim()) return true;
    //   if (!isNaN(parseFloat(v)) && v >= 0 && v <= 99) {
    //     this.reps = v;
    //     return true;
    //   }
    //   if (v != undefined) {
    //     alert("Number has to be between 0 and 99");
    //   }
    // },
  },
  mounted() {
    bus.$on("addExerToBigBox", (data) => {
      console.log(this.exercises);
      if (data == undefined) {
        alert("Element is undefined!"); //error nuestro aca
        return;
      }
      if (this.exercises.length == 0) {
        this.exercises.push(data);
        return;
      } else {
        var element = this.exercises.findIndex((e) => e.ej == data.ej);
        if (element === -1) {
          this.exercises.push(data);
          return;
        }
        alert("Exercise is already in the list!");
      }
    });
  },
};
</script>

<style scoped>
</style>