<template>
  <v-container rounded class="bigExerciseBox2">
    <v-row>
      <v-col cols="8">
        <h2>{{ seccion_name }} x{{ cantCiclos}}</h2>
        <h3></h3>
      </v-col>
      <v-spacer>
      </v-spacer>
      <v-col cols="1">
      <v-btn v-if="cantCiclos > 1" @click="cantCiclos--" x-small fab>
        <v-icon>
          mdi-minus
        </v-icon>
      </v-btn>
      </v-col>
      <v-col cols="1">
        <v-btn  @click="cantCiclos++" x-small fab>
          <v-icon>
            mdi-plus
          </v-icon>
        </v-btn>
      </v-col>

    </v-row>
    <v-row v-for="exercise in exercises" :key="exercise.ej">
      <ExerciseBox
        :ej="exercise.ej"
        :idx="idx"
        @borrarEj="removeExer($event)"
        @moveExer="desplazar($event)"
      ></ExerciseBox>
    </v-row>
  </v-container>
</template>

<script>
// import { bus2 } from "../main";
import { bus } from "../main";
import ExerciseBox from "./ExerciseBox";

export default {
  components: { ExerciseBox },
  props: ["seccion_name", "idx", "exercises"],

  data() {
    return {
      // exercises: [],
      cantCiclos : 1
    };
  },
  methods: {
    nextStep: function () {
      bus.$emit("nextStep");
    },
    removeExer(data) {
      var index = this.idx;
      if (data.indice == index) {
        bus.$emit("removeExerciseFromBigBox", data);
        // var idx = this.exercises.findIndex((e) => e.ej == data.nombre);
        // if (idx > -1) {
        //   this.exercises.splice(idx, 1);
        //   console.log(this.exercises);
        // } else {
        //   console.log("Element is not in the list!");
        //   return;
        // }
      } else {
        console.log("Index out of range");
      }
    },
    desplazar(data) {
      if (data.indice == this.idx) {
        var element = this.exercises.findIndex((e) => e.ej == data.nombre);
        console.log(data);
        console.log(element + " - " + data.posicion);
        if (element > -1) {
          if (data.posicion == "up") {
            if (element > 0) {
              [this.exercises[element - 1], this.exercises[element]] = [
                this.exercises[element],
                this.exercises[element - 1],
              ];
              console.log(this.exercises);
              return;
            }
          } else if (data.posicion == "down") {
            if (element != this.exercises.length - 1) {
              [this.exercises[element + 1], this.exercises[element]] = [
                this.exercises[element],
                this.exercises[element + 1],
              ];

              return;
            }
          } else {
            console.log("Position unknown");
          }
        } else {
          console.log("Element is not present in the list"); //error nuestro
          return;
        }
      }
    },
  },
  updated(){
    }
  // mounted() {
  //   bus2.$on("addExerToBigBox", (data) => {
  //     if (data == undefined) {
  //       alert("Element is undefined!"); //error nuestro aca
  //       return;
  //     }
  //     if (data.indice == this.idx) {
  //       console.log("idx = "+data.indice);
  //       if (this.exercises.length == 0) {
  //         this.exercises.push(data);
  //       } else {
  //         var element = this.exercises.findIndex((e) => e.ej == data.ej);
  //         if (element === -1) {
  //           this.exercises.push(data);
  //         } else {
  //           console.log("Element is already in the list at " + element);
  //         }
  //       }
  //     }
  //   });
  // },
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