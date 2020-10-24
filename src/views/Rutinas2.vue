<template>
  <v-app>
    <BackgroundImage/>
    <v-main class="main">
      <v-container></v-container>
      <v-row>
        <v-spacer></v-spacer>
      <v-btn style="margin-right:13px" color="primary">
      <!--ToDo: rutear-->
        Tutorial
      </v-btn>
      </v-row>
      <v-stepper v-model="e1">
        <v-stepper-header>
          <v-stepper-step
              :complete="e1 > 1"
              step="1">Entrada en Calor
          </v-stepper-step>
<!--          <v-divider></v-divider>-->
<!--          <v-stepper-step-->
<!--              :complete="e1 > 2"-->
<!--              step="2">-->
<!--            Ejercitacion Principal-->
<!--          </v-stepper-step>-->
<!--          <v-divider></v-divider>-->
<!--          <v-stepper-step-->
<!--              :complete="e1 > 3"-->
<!--              step="3">-->
<!--            Enfriamiento-->
<!--          </v-stepper-step>-->
<!--          <v-divider></v-divider>-->
<!--          <v-stepper-step-->
<!--              :complete="e1 > 4"-->
<!--              step="4">-->
<!--            Confirmar-->
<!--          </v-stepper-step>-->

          <v-stepper-step v-for="(step,index) in ciclos" v-bind:key="index" :step="index + 1"
                          :complete="e1 > index" v-show="index > 0">{{step}}
            </v-stepper-step>


        </v-stepper-header>

        <v-stepper-items>
          <v-stepper-content v-for="(step,index) in ciclos" v-bind:key="index" :step="index">
            <v-row>
              <v-col style="height: fit-content">
                <BigExBox style="background-color: white ; z-index: 1;" :seccion_name="step"/>
              </v-col>
              <v-col style="height: fit-content">
                <DisplayLista style="z-index: 1; background-color: white"/>
              </v-col>
            </v-row>
          </v-stepper-content>
          <v-row style="padding:20px">
            <v-btn style="text-align:right" @click="e1--" color="warning">
              return
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn v-show="show" style="text-align:right; margin-right:10px" @click="addCycle" color="success">Add
              routine
            </v-btn>
            <v-btn style="text-align:right" @click="e1++" color="primary">
              continue
            </v-btn>
          </v-row>
        </v-stepper-items>
      </v-stepper>
    </v-main>
  </v-app>
</template>

<script>
import BackgroundImage from "@/components/BackgroundImage";
import DisplayLista from "@/components/DisplayExercises2";
import BigExBox from "@/components/BigExerciseBox2";

import {bus} from "@/main";

export default {
  name: "Rutinas",
  components: {BackgroundImage, BigExBox, DisplayLista},
  data() {
    return {
      ciclos: ["", "Entrada en Calor", "Ejercitacion Principal", "Enfriamiento"],

      texto_user: "",
      ej: "",
      qty: 0,
      exercises: [],
      title: "Entrada en Calor",
      title2: "Ejercitacion Principal",
      title3: "Enfiamiento",
      //ToDo: Falta añadir un boton de eliminar el ultimo ciclo, excepto por los 3 principales,
      //ToDo: Hacer que cada vez que añadis un ciclo te pregunte el nombre
      e1: 1
    };
  },
  computed: {
    show: function () {
      return this.e1 > 1;
    }
  },
  methods: {
    addCycle: function () {
      this.e1++;
      this.ciclos = this.ciclos.concat(['Ejemplo']);
    }
  },
  mounted() {
    bus.$on('nextStep', () => {
      this.e1++;
    })
  }
};

</script>

<style scoped>
.main {
  margin-left: auto;
  width: 65%;
  margin-right: auto;
}
</style>