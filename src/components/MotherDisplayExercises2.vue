<template>
  <v-container rounded style="width: 550px">
    <v-row>
      <v-col>
        <v-select
            :items="items"
            label="Categorías"
            @input="selectExer"
        ></v-select>
      </v-col>
    </v-row>
    <div>
      <div v-for="display in samples" :key="display.group">
        <DisplayList v-if="display.show" :exercises="display.exercises" :idx="idx"/>
      </div>
    </div>
  </v-container>
</template>

<script>
import DisplayList from "./MotherDisplayExercises3";

export default {
  components: {DisplayList},
  props: ["idx"],
  data: () => ({
    items: ["Espalda", "Biceps", "Hombros", "Pecho", "Triceps", "Piernas"],
    busqueda: "",
    samples: [
      {
        grupo: "Espalda",
        show: false,
        exercises: [
          {icon: "mdi-weight-gram", name: "ESPALDA", amount: 0},
          {icon: "mdi-bike", name: "Destruye Brazos", amount: 0},
          {icon: "mdi-biathlon", name: "Ayuda Abs", amount: 0},
          {icon: "mdi-bowling", name: "Destruye Piernas", amount: 0},
          {icon: "mdi-cactus", name: "Destruye Piernas", amount: 0},
          {icon: "mdi-cannabis", name: "Destruye Piernas", amount: 0},
          {icon: "mdi-castle", name: "Destruye Piernas", amount: 0},
          {icon: "mdi-dog", name: "Destruye Piernas", amount: 0},
          {icon: "mdi-elephant", name: "Destruye Piernas", amount: 0},
          {icon: "mdi-face", name: "Destruye Piernas", amount: 0},
          {icon: "mdi-foot-print", name: "Destruye Piernas", amount: 0},
          {icon: "mdi-ghost", name: "Destruye Piernas", amount: 0},
          {icon: "mdi-heart-pulse", name: "Destruye Piernas", amount: 0},
          {icon: "mdi-lingerie", name: "Destruye Piernas", amount: 0},
          {icon: "mdi-nintendo-switch", name: "Destruye Piernas", amount: 0},
        ],
      },
      {
        grupo: "Biceps",
        show: false,
        exercises: [
          {icon: "mdi-weight-gram", name: "BICEPS", amount: 0},
          {icon: "mdi-bike", name: "Destruye Brazos", amount: 0},
          {icon: "mdi-biathlon", name: "Ayuda Abs", amount: 0},
          {icon: "mdi-bowling", name: "Destruye Piernas", amount: 0},
          {icon: "mdi-cactus", name: "Destruye Piernas", amount: 0},
          {icon: "mdi-cannabis", name: "Destruye Piernas", amount: 0},
          {icon: "mdi-castle", name: "Destruye Piernas", amount: 0},
          {icon: "mdi-dog", name: "Destruye Piernas", amount: 0},
          {icon: "mdi-elephant", name: "Destruye Piernas", amount: 0},
          {icon: "mdi-face", name: "Destruye Piernas", amount: 0},
          {icon: "mdi-foot-print", name: "Destruye Piernas", amount: 0},
          {icon: "mdi-ghost", name: "Destruye Piernas", amount: 0},
          {icon: "mdi-heart-pulse", name: "Destruye Piernas", amount: 0},
          {icon: "mdi-lingerie", name: "Destruye Piernas", amount: 0},
          {icon: "mdi-nintendo-switch", name: "Destruye Piernas", amount: 0},
        ],
      },
      {
        grupo: "Hombros",
        show: false,
        exercises: [
          {icon: "mdi-weight-gram", name: "HOMBROS", amount: 0},
          {icon: "mdi-bike", name: "Destruye Brazos", amount: 0},
          {icon: "mdi-biathlon", name: "Ayuda Abs", amount: 0},
          {icon: "mdi-bowling", name: "Destruye Piernas", amount: 0},
          {icon: "mdi-cactus", name: "Destruye Piernas", amount: 0},
          {icon: "mdi-cannabis", name: "Destruye Piernas", amount: 0},
          {icon: "mdi-castle", name: "Destruye Piernas", amount: 0},
          {icon: "mdi-dog", name: "Destruye Piernas", amount: 0},
          {icon: "mdi-elephant", name: "Destruye Piernas", amount: 0},
          {icon: "mdi-face", name: "Destruye Piernas", amount: 0},
          {icon: "mdi-foot-print", name: "Destruye Piernas", amount: 0},
          {icon: "mdi-ghost", name: "Destruye Piernas", amount: 0},
          {icon: "mdi-heart-pulse", name: "Destruye Piernas", amount: 0},
          {icon: "mdi-lingerie", name: "Destruye Piernas", amount: 0},
          {icon: "mdi-nintendo-switch", name: "Destruye Piernas", amount: 0},
        ],
      },
      {
        grupo: "Pecho",
        show: false,
        exercises: [
          {icon: "mdi-weight-gram", name: "PECHO", amount: 0},
          {icon: "mdi-bike", name: "Destruye Brazos", amount: 0},
          {icon: "mdi-biathlon", name: "Ayuda Abs", amount: 0},
          {icon: "mdi-bowling", name: "Destruye Piernas", amount: 0},
          {icon: "mdi-cactus", name: "Destruye Piernas", amount: 0},
          {icon: "mdi-cannabis", name: "Destruye Piernas", amount: 0},
          {icon: "mdi-castle", name: "Destruye Piernas", amount: 0},
          {icon: "mdi-dog", name: "Destruye Piernas", amount: 0},
          {icon: "mdi-elephant", name: "Destruye Piernas", amount: 0},
          {icon: "mdi-face", name: "Destruye Piernas", amount: 0},
          {icon: "mdi-foot-print", name: "Destruye Piernas", amount: 0},
          {icon: "mdi-ghost", name: "Destruye Piernas", amount: 0},
          {icon: "mdi-heart-pulse", name: "Destruye Piernas", amount: 0},
          {icon: "mdi-lingerie", name: "Destruye Piernas", amount: 0},
          {icon: "mdi-nintendo-switch", name: "Destruye Piernas", amount: 0},
        ],
      },
      {
        grupo: "Triceps",
        show: false,
        exercises: [
          {icon: "mdi-weight-gram", name: "TRICEPS", amount: 0},
          {icon: "mdi-bike", name: "Destruye Brazos", amount: 0},
          {icon: "mdi-biathlon", name: "Ayuda Abs", amount: 0},
          {icon: "mdi-bowling", name: "Destruye Piernas", amount: 0},
          {icon: "mdi-cactus", name: "Destruye Piernas", amount: 0},
          {icon: "mdi-cannabis", name: "Destruye Piernas", amount: 0},
          {icon: "mdi-castle", name: "Destruye Piernas", amount: 0},
          {icon: "mdi-dog", name: "Destruye Piernas", amount: 0},
          {icon: "mdi-elephant", name: "Destruye Piernas", amount: 0},
          {icon: "mdi-face", name: "Destruye Piernas", amount: 0},
          {icon: "mdi-foot-print", name: "Destruye Piernas", amount: 0},
          {icon: "mdi-ghost", name: "Destruye Piernas", amount: 0},
          {icon: "mdi-heart-pulse", name: "Destruye Piernas", amount: 0},
          {icon: "mdi-lingerie", name: "Destruye Piernas", amount: 0},
          {icon: "mdi-nintendo-switch", name: "Destruye Piernas", amount: 0},
        ],
      },
      {
        grupo: "Piernas",
        show: false,
        exercises: [
          {icon: "mdi-weight-gram", name: "PIERNAS", amount: 0},
          {icon: "mdi-bike", name: "Destruye Brazos", amount: 0},
          {icon: "mdi-biathlon", name: "Ayuda Abs", amount: 0},
          {icon: "mdi-bowling", name: "Destruye Piernas", amount: 0},
          {icon: "mdi-cactus", name: "Destruye Piernas", amount: 0},
          {icon: "mdi-cannabis", name: "Destruye Piernas", amount: 0},
          {icon: "mdi-castle", name: "Destruye Piernas", amount: 0},
          {icon: "mdi-dog", name: "Destruye Piernas", amount: 0},
          {icon: "mdi-elephant", name: "Destruye Piernas", amount: 0},
          {icon: "mdi-face", name: "Destruye Piernas", amount: 0},
          {icon: "mdi-foot-print", name: "Destruye Piernas", amount: 0},
          {icon: "mdi-ghost", name: "Destruye Piernas", amount: 0},
          {icon: "mdi-heart-pulse", name: "Destruye Piernas", amount: 0},
          {icon: "mdi-lingerie", name: "Destruye Piernas", amount: 0},
          {icon: "mdi-nintendo-switch", name: "Destruye Piernas", amount: 0},
        ],
      },
    ],
    active: null,
  }),
  methods: {
    selectExer(event) {
      if (this.active != null) {
        //buscar el elemento previo y setearlo en null
        this.samples.find((e) => e.grupo == this.active).show = false;
      }
      this.active = event;
      //actualizar al nuevo elemento
      this.samples.find((e) => e.grupo == event).show = true;
    },
  },
  mounted(){
      
  }
};
</script>

<style scoped>
</style>
