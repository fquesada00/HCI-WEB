<template>
  <v-container rounded class="bigExerciseBox2">
    <v-row>
      <v-col>
        <h2>{{ seccion_name }} x{{ cantCiclos }}</h2>
      </v-col>
      <v-col cols="1">
        <v-btn v-if="cantCiclos > 1" @click="modifyClick(restar)" x-small fab>
          <v-icon> mdi-minus </v-icon>
        </v-btn>
      </v-col>
      <v-col cols="1">
        <v-btn @click="modifyClick(sumar)" x-small fab>
          <v-icon> mdi-plus </v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-btn v-if="!show" style="margin-right: 20px" @click="updateIdx"
      >AQUÍ</v-btn
    >
    <v-btn v-else color="primary" style="margin-right: 20px" @click="updateIdx"
      >AQUÍ</v-btn
    >

    <v-btn color="error" @click="removeIdx">ELIMINAR</v-btn>

    <v-row v-for="exercise in exercises" :key="exercise.ej">
      <ExerciseBox
        :name="exercise.name"
        :idx="idx"
        :detail="exercise.detail"
        :type="exercise.type"
        :duration="exercise.duration"
        :repetitions="exercise.repetitions"
      ></ExerciseBox>
    </v-row>
  </v-container>
</template>

<script>
// import { bus2 } from "../main";
import { bus } from "@/main";
import ExerciseBox from "./MotherExerciseBox";
export default {
  components: { ExerciseBox },
  props: ["seccion_name", "idx", "exercises", "ciclos"],

  data() {
    return {
      show: false,
      cantCiclos: this.ciclos,
      sumar: "sumar",
      restar: "restar",
    };
  },
  methods: {
    updateIdx() {
      console.log("te paso el indice = " + this.idx);
      bus.$emit("changeMotherIdx", this.idx);
      bus.$emit("changeMotherDisplay", this.idx);
    },
    removeIdx() {
      bus.$emit("eraseMotherIdx", this.idx);
      bus.$emit("restartIdx");
    },

    modifyClick(operacion) {
      if (operacion == "restar") {
        this.cantCiclos--;
      } else {
        this.cantCiclos++;
      }
      bus.$emit("updateMotherBigBoxCicle", {
        indice: this.idx,
        ciclos: this.cantCiclos,
      });
    },
  },
  mounted() {
    console.log("ESTOY EN MOUNTED");
    bus.$on("seleccionarBoton", (data) => {
      this.show = this.idx === data;
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