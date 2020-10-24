<template>
  <div class="rutinas">
    <BackgroundImage />
    <v-row>
      <v-col lg="4">
        <v-card
          ><BigExBox :seccion_name="title" class="mt-10"></BigExBox
        ></v-card>
      </v-col>
      <v-col lg="3">
        <v-card><DisplayLista /> </v-card
      ></v-col>
    </v-row>
  </div>
</template>

<script>
import BackgroundImage from "@/components/BackgroundImage";
import DisplayLista from "@/components/DisplayExercises2";
import BigExBox from "@/components/BigExerciseBox2";
// import Exercises from "@/components/ExerciseBox2";
export default {
  name: "Rutinas",
  components: { BackgroundImage, BigExBox, DisplayLista },
  data() {
    return {
      texto_user: "",
      ej: "",
      qty: 0,
      exercises: [],
      title: "ENTRADA EN FRIO",
    };
  },
  methods: {},
};
</script>

<style scoped>
</style>