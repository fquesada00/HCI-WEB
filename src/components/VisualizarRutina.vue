<template>
  <v-container>
    <v-container v-for="seccion in ejer" v-bind:key="seccion.grupo">
      <v-row>
        <v-col cols="auto">
          <h2 style="margin-right: 40px">
            {{ seccion.grupo + " x" + seccion.ciclos }}
          </h2>
        </v-col>
        <v-col cols="1">
          <v-btn
            style="margin-right: 20px"
            v-show="seccion.ciclos > 1"
            @click="seccion.ciclos--"
            fab
            x-small
          >
            <v-icon> mdi-minus </v-icon>
          </v-btn>
        </v-col>
        <v-col cols="1">
          <v-btn @click="seccion.ciclos++" fab x-small>
            <v-icon> mdi-plus </v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-row v-for="ej in seccion.ejs" v-bind:key="ej.name">
        <v-col>
          {{ ej.name }}
        </v-col>
        <v-col>
          <v-btn color="error">
            <v-icon> mdi-delete </v-icon>
          </v-btn>
        </v-col>
        <v-spacer></v-spacer>
        <v-col>
          <v-btn style="margin-right: 20px" fab x-small>
            <v-icon> mdi-arrow-down </v-icon>
          </v-btn>
          <v-btn fab x-small>
            <v-icon> mdi-arrow-up </v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <br />
      <v-divider style="size: 50px"></v-divider>
    </v-container>
    <v-row>
      <v-btn
        style="margin-left: auto; margin-right: auto"
        color="success"
        x-large
      >
        Guardar Rutina
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
import { bus } from "@/main";

export default {
  data() {
    return {
      ejer: [
        {
          grupo: "Entrada en Calor",
          ciclos: 2,
          ejs: [
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
            {
              icon: "mdi-nintendo-switch",
              name: "Destruye Piernas",
              amount: 0,
            },
          ],
        },
        {
          grupo: "Ejercitacion Principal",
          ciclos: 2,
          ejs: [
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
            {
              icon: "mdi-nintendo-switch",
              name: "Destruye Piernas",
              amount: 0,
            },
          ],
        },
        {
          grupo: "Enfriamiento",
          ciclos: 2,
          ejs: [
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
            {
              icon: "mdi-nintendo-switch",
              name: "Destruye Piernas",
              amount: 0,
            },
          ],
        },
      ],
      /*
          mother_big_ex_box:[{nombre:"brazos", ciclos: ,ejs:[{name, amount},{name,amount}}],
          {nombre:"gonikian",ciclos: ,...}]
        */
    };
  },
  mounted() {
    bus.$on("confirmarRutina", (big_ex_box) => {
      this.grupos = big_ex_box;
    });
  },
  name: "VisualizarRutina",
};
</script>

<style scoped>
</style>