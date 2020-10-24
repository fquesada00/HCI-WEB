<template>
  <v-app>

    <v-main class="main">
      <v-row>
        <v-spacer></v-spacer>
        <v-btn style="margin-right: 13px" color="primary">
          <!--ToDo: rutear-->
          Tutorial
        </v-btn>
      </v-row>
      <v-stepper v-model="e1">
        <v-stepper-header>
          <v-stepper-step v-for="(step,index) in ciclos" v-bind:key="index" :step="index"
                          :complete="e1 > index" v-show="index > 0">{{ step }}
          </v-stepper-step>
        </v-stepper-header>

        <v-stepper-items>
          <v-stepper-content
            v-for="(step, index) in ciclos"
            v-bind:key="index"
            :step="index"
          >
            <v-row>
              <v-col order-sm="1" order-lg="0" style="height: fit-content">
                <BigExBox
                  style="background-color: white; z-index: 1"
                  :seccion_name="step"
                  :idx="e1 - 1"
                  :exercises="big_ex_box[e1 - 1].ejs"
                />
              </v-col>
              <v-col order-sm="0" order-lg="1" style="height: fit-content">
                <DisplayLista
                  style="z-index: 1; background-color: white"
                  :idx="e1 - 1"
                />
              </v-col>
            </v-row>
          </v-stepper-content>
          <v-row style="padding: 20px">
            <v-btn style="text-align: right" @click="e1--" color="warning">
              return
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn
              v-show="show"
              style="text-align: right; margin-right: 10px"
              @click="addCycle"
              color="error"
            >
              <v-icon> mdi-delete </v-icon>
            </v-btn>
            <v-btn
              v-show="show"
              style="text-align: right; margin-right: 10px"
              @click="addCycle"
              color="success"
              >Add Cycle
            </v-btn>
            <v-btn style="text-align: right" @click="nextStep" color="primary">
              continue
            </v-btn>
          </v-row>
        </v-stepper-items>
      </v-stepper>
    </v-main>
  </v-app>
</template>

<script>
import DisplayLista from "@/components/DisplayExercises2";
import BigExBox from "@/components/BigExerciseBox2";
// import { bus2 } from "@/main";
import { bus } from "@/main";

export default {
  name: "Rutinas",
  components: { BigExBox, DisplayLista },
  data() {
    return {
      ciclos: [
        "",
        "Entrada en Calor",
        "Ejercitacion Principal",
        "Enfriamiento",
      ],
      big_ex_box: [
        { grupo: "Entrada en Calor", ejs: [] },
        { grupo: "Ejercitacion Principal", ejs: [] },
        { grupo: "Enfriamiento", ejs: [] },
      ],
      texto_user: "",
      ej: "",
      qty: 0,
      exercises: [],
      title: "Entrada en Calor",
      title2: "Ejercitacion Principal",
      title3: "Enfriamiento",
      //ToDo: Falta añadir un boton de eliminar el ultimo ciclo, excepto por los 3 principales,
      //ToDo: Hacer que cada vez que añadis un ciclo te pregunte el nombre
      e1: 1,
    };
  },
  computed: {
    show: function () {
      return this.e1 > 1;
    },
  },
  methods: {
    addCycle: function () {
      this.e1++;
      this.ciclos = this.ciclos.concat(["Ejemplo"]);
    },
    nextStep(){
      this.e1++;
      if(this.e1 == this.big_ex_box.length){
        bus.$emit("confirmarRutina", this.big_ex_box);
      }
    }
  },
  mounted() {
    bus.$on("nextStep", () => {
      this.e1++;
    });
    bus.$on("addExerToBigBox", (data) => {
      if (data.indice > -1) {
        if (this.big_ex_box[data.indice].ejs.length == 0) {
          this.big_ex_box[data.indice].ejs.push({
            ej: data.ej,
            cant: data.cant,
          });
        } else {
          var element = this.big_ex_box[data.indice].ejs.findIndex(
            (e) => e.ej == data.ej
          );
          if (element == -1) {
            this.big_ex_box[data.indice].ejs.push({
              ej: data.ej,
              cant: data.cant,
            });
          } else {
            console.log(
              "Element is already in bigBox number " +
                data.indice +
                " at index " +
                element
            );
          }
        }
      } else {
        console.log("Index out of range");
      }
    });
    bus.$on("removeExerciseFromBigBox", (data) => {
      //ya chequee el idx valido
      var element = this.big_ex_box[data.indice].ejs.findIndex(
        (e) => e.ej == data.nombre
      );
      if (element > -1) {
        this.big_ex_box[data.indice].ejs.splice(element, 1);
      } else {
        console.log("Index out of range");
      }
    });
  },
};
</script>

<style scoped>
.main {
  margin-left: auto;
  width: 75%;
  margin-right: auto;
}
</style>