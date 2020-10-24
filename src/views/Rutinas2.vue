<template>
  <v-app>
    <BackgroundImage />
    <v-main class="main">
      <v-container></v-container>
      <v-row>
        <v-spacer></v-spacer>
        <v-btn style="margin-right: 13px" color="primary">
          <!--ToDo: rutear-->
          Tutorial
        </v-btn>
      </v-row>
      <v-stepper v-model="e1">
        <v-stepper-header>
          <v-stepper-step :complete="e1 > 1" step="1"
            >Entrada en Calor
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

          <v-stepper-step
            v-for="(step, index) in ciclos"
            v-bind:key="index"
            :step="index + 1"
            :complete="e1 > index"
            v-show="index > 0"
            >{{ step }}
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
                <div v-if="e1 - 1 != 1">
                  <BigExBox
                    style="background-color: white; z-index: 1"
                    :seccion_name="step"
                    :idx="e1 - 1"
                    :exercises="big_ex_box[e1 - 1].ejs"
                  />
                </div>
                <div v-if="e1 - 1 == 1">
                  <MotherBigBox
                    style="background-color: white; z-index: 1"
                    :big_box="mother_big_ex_box"
                  />
                </div>
              </v-col>
              <v-col order-sm="0" order-lg="1" style="height: fit-content">
                <div v-if="e1 - 1 != 1">
                  <DisplayLista
                    style="z-index: 1; background-color: white"
                    :idx="e1 - 1"
                  />
                </div>
                <div v-if="e1 - 1 == 1"><MotherDisplayLista :idx="-1" /></div>
              </v-col>
            </v-row>
          </v-stepper-content>
          <v-row style="padding: 20px">
            <v-btn style="text-align: right" @click="e1--" color="warning">
              return
            </v-btn>
            <v-spacer></v-spacer>
            <div v-if="e1 - 1 == 1">
              <v-text-field v-model="nombre">NUEVO NOMBRE</v-text-field>
            </div>

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
import BackgroundImage from "@/components/BackgroundImage";
import DisplayLista from "@/components/DisplayExercises2";
import BigExBox from "@/components/BigExerciseBox2";
import MotherBigBox from "@/components/MotherBigExerciseBox2";
import MotherDisplayLista from "@/components/MotherDisplayExercises2";

// import { bus2 } from "@/main";
import { bus } from "@/main";

export default {
  name: "Rutinas",
  components: {
    BackgroundImage,
    BigExBox,
    DisplayLista,
    MotherBigBox,
    MotherDisplayLista,
  },
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
      mother_big_ex_box: [""],
      texto_user: "",
      ej: "",
      qty: 0,
      exercises: [],
      title: "Entrada en Calor",
      title2: "Ejercitacion Principal",
      title3: "Enfriamiento",
      nombre: "",
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
      this.mother_big_ex_box.push({ nombre: this.nombre, ejs: [] });
      this.nombre = "";
    },
    nextStep() {
      this.e1++;
      if (this.e1 == this.big_ex_box.length) {
        bus.$emit("confirmarRutina", this.big_ex_box);
      }
    },
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
    bus.$on("addExerToMotherBigBox", (data) => {
      console.log(data);
      if (data.indice > -1) {
        if (this.mother_big_ex_box[data.indice].ejs.length == 0) {
          this.mother_big_ex_box[data.indice].ejs.push({
            ej: data.ej,
            cant: data.cant,
          });
        } else {
          var element = this.mother_big_ex_box[data.indice].ejs.findIndex(
            (e) => e.ej == data.ej
          );
          if (element == -1) {
            this.mother_big_ex_box[data.indice].ejs.push({
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
    bus.$on("removeExerciseFromMotherBigBox", (data) => {
      //ya chequee el idx valido
      var element = this.mother_big_ex_box[data.indice].ejs.findIndex(
        (e) => e.ej == data.nombre
      );
      if (element > -1) {
        this.mother_big_ex_box[data.indice].ejs.splice(element, 1);
      } else {
        console.log("Index out of range");
      }
    });
    bus.$on("eraseMotherIdx", data =>{
      if(data > -1 && data < this.mother_big_ex_box.length){
        this.mother_big_ex_box.splice(data,1);
      }else{
        console.log("Element is not in the list");
      }
    });
    bus.$on("moveExer", (data) => {
      var element = this.big_ex_box[data.indice].ejs.findIndex(
        (e) => e.ej == data.nombre
      );
      if (element > -1) {
        if (data.posicion == "up") {
          if (element > 0) {
            [
              this.big_ex_box[data.indice].ejs[element - 1],
              this.big_ex_box[data.indice].ejs[element],
            ] = [
              this.big_ex_box[data.indice].ejs[element],
              this.big_ex_box[data.indice].ejs[element - 1],
            ];
            console.log(this.big_ex_box[data.indice].ejs);
            return;
          }
        } else if (data.posicion == "down") {
          if (element < this.big_ex_box[data.indice].ejs.length - 1) {
            [
              this.big_ex_box[data.indice].ejs[element + 1],
              this.big_ex_box[data.indice].ejs[element],
            ] = [
              this.big_ex_box[data.indice].ejs[element],
              this.big_ex_box[data.indice].ejs[element + 1],
            ];
            return;
          }
        }
      } else {
        console.log("Element is not in list");
      }
    });
  },
  updated(){
    bus.$on("moveExer", (data) => {
      var element = this.big_ex_box[data.indice].ejs.findIndex(
        (e) => e.ej == data.nombre
      );
      if (element > -1) {
        if (data.posicion == "up") {
          if (element > 0) {
            [
              this.big_ex_box[data.indice].ejs[element - 1],
              this.big_ex_box[data.indice].ejs[element],
            ] = [
              this.big_ex_box[data.indice].ejs[element],
              this.big_ex_box[data.indice].ejs[element - 1],
            ];
            return;
          }
        } else if (data.posicion == "down") {
          if (element < this.big_ex_box[data.indice].ejs.length - 1) {
            [
              this.big_ex_box[data.indice].ejs[element + 1],
              this.big_ex_box[data.indice].ejs[element],
            ] = [
              this.big_ex_box[data.indice].ejs[element],
              this.big_ex_box[data.indice].ejs[element + 1],
            ];
            return;
          }
        }
      } else {
        console.log("Element is not in list");
      }
    });
  },
  // created(){
  //   bus.$on("moveExer", (data) => {
  //     var element = this.big_ex_box[data.indice].ejs.findIndex(
  //       (e) => e.ej == data.nombre
  //     );
  //     if (element > -1) {
  //       if (data.posicion == "up") {
  //         if (element > 0) {
  //           [
  //             this.big_ex_box[data.indice].ejs[element - 1],
  //             this.big_ex_box[data.indice].ejs[element],
  //           ] = [
  //             this.big_ex_box[data.indice].ejs[element],
  //             this.big_ex_box[data.indice].ejs[element - 1],
  //           ];
  //           return;
  //         }
  //       } else if (data.posicion == "down") {
  //         if (element < this.big_ex_box[data.indice].ejs.length - 1) {
  //           [
  //             this.big_ex_box[data.indice].ejs[element + 1],
  //             this.big_ex_box[data.indice].ejs[element],
  //           ] = [
  //             this.big_ex_box[data.indice].ejs[element],
  //             this.big_ex_box[data.indice].ejs[element + 1],
  //           ];
  //           return;
  //         }
  //       }
  //     } else {
  //       console.log("Element is not in list");
  //     }
  //   });
  // },
  // beforeUpdate() {
  //   bus.$on("moveExer", (data) => {
  //     var element = this.big_ex_box[data.indice].ejs.findIndex(
  //       (e) => e.ej == data.nombre
  //     );
  //     if (element > -1) {
  //       if (data.posicion == "up") {
  //         if (element > 0) {
  //           [
  //             this.big_ex_box[data.indice].ejs[element - 1],
  //             this.big_ex_box[data.indice].ejs[element],
  //           ] = [
  //             this.big_ex_box[data.indice].ejs[element],
  //             this.big_ex_box[data.indice].ejs[element - 1],
  //           ];
  //           return;
  //         }
  //       } else if (data.posicion == "down") {
  //         if (element < this.big_ex_box[data.indice].ejs.length - 1) {
  //           [
  //             this.big_ex_box[data.indice].ejs[element + 1],
  //             this.big_ex_box[data.indice].ejs[element],
  //           ] = [
  //             this.big_ex_box[data.indice].ejs[element],
  //             this.big_ex_box[data.indice].ejs[element + 1],
  //           ];
  //           return;
  //         }
  //       }
  //     } else {
  //       console.log("Element is not in list");
  //     }
  //   });
  // },
};
</script>

<style scoped>
.main {
  margin-left: auto;
  width: 75%;
  margin-right: auto;
}
</style>