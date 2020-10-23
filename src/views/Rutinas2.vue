<template>
  <v-app>
    <v-main class="rutinas">
        <DisplayExercises/>
      <!-- <v-col class="mt-n16">
        <v-row v-for="i in exercises" :key="i">
          <Exercises :ej="i" @reduceQty="remove($event)"></Exercises>
        </v-row>
      </v-col>
      <v-text-field label="Nombre ejercicio" type="text" v-model="texto_user">
      </v-text-field>
      <v-btn @click="add">AGREGAR EJERCICIO</v-btn>
      <div>
        <span>Tengo {{ qty }} elementos</span>
      </div> -->
    </v-main>
  </v-app>
</template>

<script>
import DisplayExercises from "@/components/DisplayExercises3";
// import Exercises from "@/components/ExerciseBox2";
export default {
  name: "Rutinas",
  components: { DisplayExercises},
  data() {
    return {
      texto_user: "",
      ej: "",
      qty: 0,
      exercises: [],
    };
  },
  methods: {
    add(name) {
      this.ej = this.texto_user;
      this.texto_user = "";
      if (this.exercises.find((e) => e === name)) {
        console.log("Element already exists");
        return;
      }
      this.exercises.push(name);
      this.qty++;
    },
    remove(name) {
      const idx = this.exercises.findIndex((e) => e === name);
      if (idx === -1) {
        console.log("Element does not exists");
        return;
      }
      this.exercises.splice(idx, 1);
      this.qty--;
    },
  },
};
</script>

<style scoped>
</style>