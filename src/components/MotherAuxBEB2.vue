<template>
  <v-container rounded class="bigExerciseBox2">
    <v-row>
      <v-col>
        <h2>{{ seccion_name }} x{{ cantCiclos }}</h2>
      </v-col>
      <v-col cols="1">
        <v-btn v-if="cantCiclos > 1" @click="cantCiclos--" x-small fab>
          <v-icon>
            mdi-minus
          </v-icon>
        </v-btn>
      </v-col>
      <v-col cols="1">
        <v-btn @click="cantCiclos++" x-small fab>
          <v-icon>
            mdi-plus
          </v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-btn v-if="!show" style="margin-right: 20px" @click="updateIdx"
      >HERE</v-btn
    >
    <v-btn v-else color="primary" style="margin-right: 20px" @click="updateIdx"
      >HERE</v-btn
    >

    <v-btn color="error" @click="removeIdx">REMOVE</v-btn>

    <v-row v-for="exercise in exercises" :key="exercise.ej">
      <ExerciseBox
        :ej="exercise.ej"
        :idx="idx"
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
      show: false,
      cantCiclos : 1
    };
  },
  methods: {
    updateIdx() {
      bus.$emit("changeMotherIdx", this.idx);
    },
    removeIdx() {
      bus.$emit("eraseMotherIdx", this.idx);
      bus.$emit("restartIdx");
    },
  },
  mounted() {
    console.log("ESTOY EN MOUNTED");
    bus.$on("seleccionarBoton", (data) => {
      if (this.idx == data) {
        this.show = true;
      } else {
        this.show = false;
      }
      console.log("Estoy en el idx = " + this.idx + " y estoy " + this.show);
    });
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