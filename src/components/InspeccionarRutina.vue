<template>
  <v-container rounded style="margin-top:6%; width:70%">
    <v-container>
      <v-row>
        <v-col class="text-center">
          <h1>{{ routine.name }}</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="subtitle-1">{{ routine.detail }}</v-col>
      </v-row>
      <v-row>
        <v-col> Privacidad:
          <v-icon v-if="routine.isPublic">mdi-lock-open</v-icon>
          <v-icon v-else>mdi-lock</v-icon>
        </v-col>
        <v-col> Categoria: {{ routine.category.id }}
        </v-col>
        <v-col> Dificultad: {{ routine.difficulty }}
        </v-col>
      </v-row>
    </v-container>
    <v-container v-for="seccion in ejer" v-bind:key="seccion.grupo">
      <v-card outlined>
        <v-row>
          <v-col cols="auto">
            <v-card-title style="margin-right: 40px">
              {{ seccion.grupo + " x" + seccion.ciclos }}
            </v-card-title>
          </v-col>
        </v-row>
        <v-row>
          <v-card-text style="margin-left:40px" class=" font-weight-medium" v-for="ej in seccion.ejs"
                       v-bind:key="ej.ej">
            <v-container>
              <v-row class="title">
                {{ ejerEjemplo.name }}
              </v-row>
              <v-row class="subtitle-1">
                Detalles: {{ejerEjemplo.detail}}
              </v-row>
              <v-row>
                <v-col>
                  Tipo: {{ejerEjemplo.type}}
                </v-col>
                <v-col>
                  Repeticiones: {{"x" + ejerEjemplo.repetitions}}
                </v-col>
                <v-col>
                  Duracion: {{ ejerEjemplo.duration + "seg" }}
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
        </v-row>
        <br/>
        <v-divider style="size: 50px"></v-divider>
      </v-card>
    </v-container>
    <v-row>
    </v-row>
    <v-row>
      <v-col class="text-right">
        <v-btn style="margin-right:20px" @click="favourite = !favourite" v-if="favourite" icon outlined>
          <v-icon>
            mdi-heart-outline
          </v-icon>
        </v-btn>
        <v-btn style="margin-right:20px" @click="favourite = !favourite" v-else icon color="red" outlined>
          <v-icon>
            mdi-heart
          </v-icon>
        </v-btn>
        <v-btn v-if="canEdit" color="warning" style="margin-right:20px">
          Edit
        </v-btn>
        <v-btn color="primary">
          Close
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {bus} from "@/main";
import {Routine} from "@/js/routines";

export default {
  data() {
    return {
      routine: new Routine("La rutina del Octa", "La rutina del octa se basa en el brazo derecho",
          false, "Larga", "rookie"),
      favourite: false,
      canEdit: false,
      switch1: false,
      ejerEjemplo: {
        name: "Jumping Jacks",
        detail: "Salto en cuatro patas",
        type: "Exercise",
        duration: 30,
        repetitions: 10
      },
      ejer: [{grupo: "Entrada en Calor", ciclos: 4, ejs: [{ej: "pecho"}, {ej: "brazos"}]}, {
        grupo: "Ejercitacion Principal: Rookie",
        ciclos: 4,
        ejs: [{ej: "pecho"}, {ej: "brazos"}]
      }, {grupo: "Ejercitacion Principal: Parte 2", ciclos: 4, ejs: [{ej: "pecho"}, {ej: "brazos"}]}, {
        grupo: "Enfriamiento mediano",
        ciclos: 4,
        ejs: [{ej: "pecho"}, {ej: "brazos"}]
      }, {grupo: "Descanso", ciclos: 4, ejs: [{ej: "pecho"}, {ej: "brazos"}]},]
      /*
          mother_big_ex_box:[{nombre:"brazos", ciclos: ,ejs:[name,name,name],
          {nombre:"gonikian",ciclos: ,...}]
        */
    };
  },
  mounted() {
    bus.$on("confirmarRutina", (big_ex_box) => {
      this.ejer = big_ex_box;
    });
  },
  name: "InspeccionarRutina",
};
</script>

<style scoped>
</style>