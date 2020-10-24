<template>
  <v-container>
      <v-row class="ma-0"
        ><v-col class="d-flex" style="height: 83px">
          <div class="mb-10">
            <v-select
              color="black"
              class="categorias"
              :items="items"
              filled
              solo
              label="Categorías"
              background-color="teal accent-4"
              style="border-radius: 10px"
              @input="selectExer"
            ></v-select>
          </div>
        </v-col>
        <!-- <v-col class="d-flex" cols="6" sm="6" lg="6" xs="12">
        <v-spacer></v-spacer>
        <div class="mb-12">
          <v-text-field
            class="busqueda"
            placeholder="Búsqueda"
            filled
            dense
            height="55"
            width="10"
            solo
            background-color="teal accent-4"
            elevation-1
            style="border-radius: 10px"
          ></v-text-field>
        </div>
      </v-col> -->
      </v-row>

      <v-row>
        <v-col v-for="display in samples" :key="display.group">
          <div v-if="display.show">
            <v-card
              ><DisplayList :exercises="display.exercises"></DisplayList
            ></v-card>
          </div>
        </v-col>
      </v-row>
  </v-container>
</template>

<script>
import DisplayList from "./DisplayExercises3";
export default {
  components: { DisplayList },
  name: "DisplayExercises",
  data: () => ({
    items: ["Espalda", "Biceps", "Hombros", "Pecho", "Triceps", "Piernas"],
    busqueda: "",
    samples: [
      {
        grupo: "Espalda",
        show: false,
        exercises: [
          { icon: "mdi-weight-gram", name: "ESPALDA", amount: 0 },
          { icon: "mdi-bike", name: "Destruye Brazos", amount: 0 },
          { icon: "mdi-biathlon", name: "Ayuda Abs", amount: 0 },
          { icon: "mdi-bowling", name: "Destruye Piernas", amount: 0 },
          { icon: "mdi-cactus", name: "Destruye Piernas", amount: 0 },
          { icon: "mdi-cannabis", name: "Destruye Piernas", amount: 0 },
          { icon: "mdi-castle", name: "Destruye Piernas", amount: 0 },
          { icon: "mdi-dog", name: "Destruye Piernas", amount: 0 },
          { icon: "mdi-elephant", name: "Destruye Piernas", amount: 0 },
          { icon: "mdi-face", name: "Destruye Piernas", amount: 0 },
          { icon: "mdi-foot-print", name: "Destruye Piernas", amount: 0 },
          { icon: "mdi-ghost", name: "Destruye Piernas", amount: 0 },
          { icon: "mdi-heart-pulse", name: "Destruye Piernas", amount: 0 },
          { icon: "mdi-lingerie", name: "Destruye Piernas", amount: 0 },
          { icon: "mdi-nintendo-switch", name: "Destruye Piernas", amount: 0 },
        ],
      },
      {
        grupo: "Biceps",
        show: false,
        exercises: [
          { icon: "mdi-weight-gram", name: "BICEPS", amount: 0 },
          { icon: "mdi-bike", name: "Destruye Brazos", amount: 0 },
          { icon: "mdi-biathlon", name: "Ayuda Abs", amount: 0 },
          { icon: "mdi-bowling", name: "Destruye Piernas", amount: 0 },
          { icon: "mdi-cactus", name: "Destruye Piernas", amount: 0 },
          { icon: "mdi-cannabis", name: "Destruye Piernas", amount: 0 },
          { icon: "mdi-castle", name: "Destruye Piernas", amount: 0 },
          { icon: "mdi-dog", name: "Destruye Piernas", amount: 0 },
          { icon: "mdi-elephant", name: "Destruye Piernas", amount: 0 },
          { icon: "mdi-face", name: "Destruye Piernas", amount: 0 },
          { icon: "mdi-foot-print", name: "Destruye Piernas", amount: 0 },
          { icon: "mdi-ghost", name: "Destruye Piernas", amount: 0 },
          { icon: "mdi-heart-pulse", name: "Destruye Piernas", amount: 0 },
          { icon: "mdi-lingerie", name: "Destruye Piernas", amount: 0 },
          { icon: "mdi-nintendo-switch", name: "Destruye Piernas", amount: 0 },
        ],
      },
      {
        grupo: "Hombros",
        show: false,
        exercises: [
          { icon: "mdi-weight-gram", name: "HOMBROS", amount: 0 },
          { icon: "mdi-bike", name: "Destruye Brazos", amount: 0 },
          { icon: "mdi-biathlon", name: "Ayuda Abs", amount: 0 },
          { icon: "mdi-bowling", name: "Destruye Piernas", amount: 0 },
          { icon: "mdi-cactus", name: "Destruye Piernas", amount: 0 },
          { icon: "mdi-cannabis", name: "Destruye Piernas", amount: 0 },
          { icon: "mdi-castle", name: "Destruye Piernas", amount: 0 },
          { icon: "mdi-dog", name: "Destruye Piernas", amount: 0 },
          { icon: "mdi-elephant", name: "Destruye Piernas", amount: 0 },
          { icon: "mdi-face", name: "Destruye Piernas", amount: 0 },
          { icon: "mdi-foot-print", name: "Destruye Piernas", amount: 0 },
          { icon: "mdi-ghost", name: "Destruye Piernas", amount: 0 },
          { icon: "mdi-heart-pulse", name: "Destruye Piernas", amount: 0 },
          { icon: "mdi-lingerie", name: "Destruye Piernas", amount: 0 },
          { icon: "mdi-nintendo-switch", name: "Destruye Piernas", amount: 0 },
        ],
      },
      {
        grupo: "Pecho",
        show: false,
        exercises: [
          { icon: "mdi-weight-gram", name: "PECHO", amount: 0 },
          { icon: "mdi-bike", name: "Destruye Brazos", amount: 0 },
          { icon: "mdi-biathlon", name: "Ayuda Abs", amount: 0 },
          { icon: "mdi-bowling", name: "Destruye Piernas", amount: 0 },
          { icon: "mdi-cactus", name: "Destruye Piernas", amount: 0 },
          { icon: "mdi-cannabis", name: "Destruye Piernas", amount: 0 },
          { icon: "mdi-castle", name: "Destruye Piernas", amount: 0 },
          { icon: "mdi-dog", name: "Destruye Piernas", amount: 0 },
          { icon: "mdi-elephant", name: "Destruye Piernas", amount: 0 },
          { icon: "mdi-face", name: "Destruye Piernas", amount: 0 },
          { icon: "mdi-foot-print", name: "Destruye Piernas", amount: 0 },
          { icon: "mdi-ghost", name: "Destruye Piernas", amount: 0 },
          { icon: "mdi-heart-pulse", name: "Destruye Piernas", amount: 0 },
          { icon: "mdi-lingerie", name: "Destruye Piernas", amount: 0 },
          { icon: "mdi-nintendo-switch", name: "Destruye Piernas", amount: 0 },
        ],
      },
      {
        grupo: "Triceps",
        show: false,
        exercises: [
          { icon: "mdi-weight-gram", name: "TRICEPS", amount: 0 },
          { icon: "mdi-bike", name: "Destruye Brazos", amount: 0 },
          { icon: "mdi-biathlon", name: "Ayuda Abs", amount: 0 },
          { icon: "mdi-bowling", name: "Destruye Piernas", amount: 0 },
          { icon: "mdi-cactus", name: "Destruye Piernas", amount: 0 },
          { icon: "mdi-cannabis", name: "Destruye Piernas", amount: 0 },
          { icon: "mdi-castle", name: "Destruye Piernas", amount: 0 },
          { icon: "mdi-dog", name: "Destruye Piernas", amount: 0 },
          { icon: "mdi-elephant", name: "Destruye Piernas", amount: 0 },
          { icon: "mdi-face", name: "Destruye Piernas", amount: 0 },
          { icon: "mdi-foot-print", name: "Destruye Piernas", amount: 0 },
          { icon: "mdi-ghost", name: "Destruye Piernas", amount: 0 },
          { icon: "mdi-heart-pulse", name: "Destruye Piernas", amount: 0 },
          { icon: "mdi-lingerie", name: "Destruye Piernas", amount: 0 },
          { icon: "mdi-nintendo-switch", name: "Destruye Piernas", amount: 0 },
        ],
      },
      {
        grupo: "Piernas",
        show: false,
        exercises: [
          { icon: "mdi-weight-gram", name: "PIERNAS", amount: 0 },
          { icon: "mdi-bike", name: "Destruye Brazos", amount: 0 },
          { icon: "mdi-biathlon", name: "Ayuda Abs", amount: 0 },
          { icon: "mdi-bowling", name: "Destruye Piernas", amount: 0 },
          { icon: "mdi-cactus", name: "Destruye Piernas", amount: 0 },
          { icon: "mdi-cannabis", name: "Destruye Piernas", amount: 0 },
          { icon: "mdi-castle", name: "Destruye Piernas", amount: 0 },
          { icon: "mdi-dog", name: "Destruye Piernas", amount: 0 },
          { icon: "mdi-elephant", name: "Destruye Piernas", amount: 0 },
          { icon: "mdi-face", name: "Destruye Piernas", amount: 0 },
          { icon: "mdi-foot-print", name: "Destruye Piernas", amount: 0 },
          { icon: "mdi-ghost", name: "Destruye Piernas", amount: 0 },
          { icon: "mdi-heart-pulse", name: "Destruye Piernas", amount: 0 },
          { icon: "mdi-lingerie", name: "Destruye Piernas", amount: 0 },
          { icon: "mdi-nintendo-switch", name: "Destruye Piernas", amount: 0 },
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
};
</script>

<style scoped>
.categorias {
  width: 200px;
  margin-bottom: -20px;
}

.divisor {
  margin-top: -50px;
}

.busqueda {
  width: 200px;
  height: 10px;
}

.v-text-field >>> input {
  font-size: 1.16em;
}

.v-select {
  font-size: 1.2em;
}

.v-select >>> label {
  font-size: 0.99em;
}

.v-select__selection {
  max-width: 90%;
  height: 90px;
}
</style>
