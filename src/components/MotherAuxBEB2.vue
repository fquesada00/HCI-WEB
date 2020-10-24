<template>
  <v-container rounded class="bigExerciseBox2">
    <h2>{{ seccion_name }}</h2>
        <v-btn @click="updateIdx">HERE</v-btn>
                <v-btn @click="removeIdx">REMOVE</v-btn>

    <v-row v-for="exercise in exercises" :key="exercise.ej">
      <ExerciseBox
        :ej="exercise.ej"
        :idx="idx"
        @borrarEjMother="removeExer($event)"
      ></ExerciseBox>
    </v-row>
  </v-container>
</template>

<script>
// import { bus2 } from "../main";
import { bus } from "../main";
import ExerciseBox from "./MotherExerciseBox";
export default {
  components: { ExerciseBox },
  props: ["seccion_name", "idx", "exercises"],

  data() {
    return {
      // exercises: [],
    };
  },
  methods: {
    removeExer(data) {
      var index = this.idx;
      if (data.indice == index) {
        bus.$emit("removeExerciseFromMotherBigBox", data);

      } else {
        console.log("Index out of range");
      }
    },
    updateIdx(){
        bus.$emit("changeMotherIdx", this.idx);
    },
    removeIdx(){
        bus.$emit("eraseMotherIdx", this.idx);
        bus.$emit("restartIdx");
    }
  },
};
</script>

<style scoped>
.bigExerciseBox2 {
  height: 100%;
  width: 50%;
  min-width: 550px;
  justify-content: center;
}
</style>