<template>
  <v-container rounded class="bigExerciseBox2">
    <h2>EJERCITACION PRINCIPAL</h2>
    <v-row v-for="(bb, index) in big_box" :key="index">
      <BigExBox
        style="background-color: white; z-index: 1"
        :seccion_name="bb.nombre"
        :idx="index"
        :exercises="bb.ejs"
      />
    </v-row>
  </v-container>
</template>

<script>
// import { bus2 } from "../main";
import { bus } from "../main";
import BigExBox from "@/components/MotherAuxBEB2";
export default {
  components: { BigExBox },
  props: ["big_box"],

  data() {
    return {
      // exercises: [],
    };
  },
  methods: {
    nextStep: function () {
      bus.$emit("nextStep");
    },
    // updateIdx(data) {
    //   bus.$emit("changeYourIdx", data);
    // },
  },
  // created() {
  //   console.log("CREATED");
  //   if (this.big_box.ejs == undefined) {
  //     console.log("UNDEFINED");
  //   }
  // },
  // updated() {
  //   console.log("UPDATED");
  //   console.log(this.big_box[0].ejs);
  //   if (this.big_box[0].ejs == undefined) {
  //     console.log("UNDEFINED");
  //   }
  // },
  // mounted() {
  //   console.log("MOUNTED");
  //   if (this.big_box.ejs == undefined) {
  //     console.log("UNDEFINED");
  //   }
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