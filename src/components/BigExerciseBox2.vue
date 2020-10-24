<template>
  <v-container rounded class="bigExerciseBox2">
    <h2>{{ seccion_name }}</h2>
    <v-row v-for="exercise in exercises" :key="exercise.ej">
      <ExerciseBox
        :ej="exercise.ej"
        :idx="idx"
        @borrarEj="removeExer($event)"
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
  },
  // beforeUpdate() {
  //   bus.$on("moveExer", (data) => {
  //     if (data.indice == this.idx) {
  //       var element = this.exercises.findIndex((e) => e.ej == data.nombre);
  //       if (element > -1) {
  //         if (data.posicion == "up") {
  //           if (element > 0) {
  //             [this.exercises[element - 1], this.exercises[element]] = [
  //               this.exercises[element],
  //               this.exercises[element - 1],
  //             ];
  //             console.log(this.exercises);
  //             return;
  //           }
  //         } else if (data.posicion == "down") {
  //           if (element != this.exercises.length - 1) {
  //             [this.exercises[element + 1], this.exercises[element]] = [
  //               this.exercises[element],
  //               this.exercises[element + 1],
  //             ];

  //             return;
  //           }
  //         } else {
  //           console.log("Position unknown");
  //         }
  //       } else {
  //         console.log("Element is not present in the list"); //error nuestro
  //         return;
  //       }
  //     }
  //   });
  // },
  // updated() {
  //   bus.$on("moveExer2", (data) => {
  //     if (data.indice == this.idx) {
  //       var element = this.exercises.findIndex((e) => e.ej == data.nombre);
  //       if (element > -1) {
  //         if (data.posicion == "up") {
  //           if (element > 0) {
  //             [this.exercises[element - 1], this.exercises[element]] = [
  //               this.exercises[element],
  //               this.exercises[element - 1],
  //             ];
  //             console.log(this.exercises);
  //             return;
  //           }
  //         } else if (data.posicion == "down") {
  //           if (element != this.exercises.length - 1) {
  //             [this.exercises[element + 1], this.exercises[element]] = [
  //               this.exercises[element],
  //               this.exercises[element + 1],
  //             ];

  //             return;
  //           }
  //         } else {
  //           console.log("Position unknown");
  //         }
  //       } else {
  //         console.log("Element is not present in the list"); //error nuestro
  //         return;
  //       }
  //     }
  //   });
  // },
  // mounted() {
  //   bus.$on("moveExer2", (data) => {
  //     if (data.indice == this.idx) {
  //       var element = this.exercises.findIndex((e) => e.ej == data.nombre);
  //       if (element > -1) {
  //         if (data.posicion == "up") {
  //           if (element > 0) {
  //             [this.exercises[element - 1], this.exercises[element]] = [
  //               this.exercises[element],
  //               this.exercises[element - 1],
  //             ];
  //             console.log(this.exercises);
  //             return;
  //           }
  //         } else if (data.posicion == "down") {
  //           if (element != this.exercises.length - 1) {
  //             [this.exercises[element + 1], this.exercises[element]] = [
  //               this.exercises[element],
  //               this.exercises[element + 1],
  //             ];

  //             return;
  //           }
  //         } else {
  //           console.log("Position unknown");
  //         }
  //       } else {
  //         console.log("Element is not present in the list"); //error nuestro
  //         return;
  //       }
  //     }
  //   });
  // },
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