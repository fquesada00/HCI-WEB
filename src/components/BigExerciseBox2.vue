<template>
  <v-container rounded class="bigExerciseBox2">
    <h2>{{ seccion_name }}</h2>
    <v-row v-for="exercise in exercises" :key="exercise.ej">
      <ExerciseBox  :ej="exercise.ej"></ExerciseBox>
    </v-row>
  </v-container>
</template>

<script>
import {bus} from "../main";
import ExerciseBox from "./ExerciseBox";
export default {
  components: {ExerciseBox},
  props: ["seccion_name"],

  data() {
    return {
      exercises: [],
    };
  },
  methods: {
    nextStep: function () {
      bus.$emit('nextStep')
    }
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
.bigExerciseBox2 {
  height: 100%;
  width: 50%;
  min-width:550px;
  justify-content: center;
}
</style>