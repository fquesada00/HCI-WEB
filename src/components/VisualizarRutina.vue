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
            <v-icon> mdi-minus</v-icon>
          </v-btn>
        </v-col>
        <v-col cols="1">
          <v-btn @click="seccion.ciclos++" fab x-small>
            <v-icon> mdi-plus</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-row v-for="ej in seccion.ejs" v-bind:key="ej.name">
        <v-col>
          {{ ej.name }}
        </v-col>
      </v-row>
      <br />
      <v-divider style="size: 50px"></v-divider>
    </v-container>
    <v-container>
      <validation-observer ref="observer" v-slot="{ invalid }">
        <form @submit.prevent="submit">
          <v-row>
            <v-col cols="4">
              <validation-provider
                v-slot="{ errors }"
                name="Nombre"
                rules="required|alpha_spaces|max:50"
              >
                <v-text-field
                  label="Nombre de la Rutina"
                  v-model="routine.name"
                  counter
                  :error-messages="errors"
                  required
                >
                </v-text-field>
              </validation-provider>
            </v-col>
            <v-col cols="8">
              <validation-provider
                v-slot="{ errors }"
                name="Detalles"
                rules="required|alpha_spaces|max:200"
              >
                <v-textarea
                  label="Detalles"
                  v-model="routine.detail"
                  counter
                  :error-messages="errors"
                  required
                >
                </v-textarea>
              </validation-provider>
            </v-col>
          </v-row>
          <v-row class="justify-center"> </v-row>
          <v-row>
            <v-col cols="2">
              <v-switch
                :error-messages="errors"
                v-model="routine.isPublic"
                prepend-icon="mdi-lock"
                append-icon="mdi-lock-open"
              ></v-switch>
            </v-col>
            <v-col>
              <validation-provider
                v-slot="{ errors }"
                name="Detalles"
                rules="required"
              >
                <v-select
                  required
                  :error-messages="errors"
                  :items="categoria"
                  v-model="routine.category"
                  label="Longitud de rutina"
                ></v-select>
              </validation-provider>
            </v-col>
            <v-col>
              <validation-provider
                v-slot="{ errors }"
                name="Detalles"
                rules="required"
              >
                <v-select
                  required
                  :error-messages="errors"
                  :items="dificultad"
                  v-model="routine.difficulty"
                  label="Dificultad de rutina"
                ></v-select
              ></validation-provider>
            </v-col>
          </v-row>
          <v-row class="justify-center">
            <v-btn
              style="margin-left: auto; margin-right: auto"
              color="success"
              x-large
              type="submit"
              :disabled="invalid"
              @click="submit"
            >
              Submit</v-btn
            >
          </v-row>
        </form>
      </validation-observer>
    </v-container>
    <v-row> </v-row>
  </v-container>
</template>

<script>
import {Cycle} from '../js/cycles'
import { bus } from "@/main";
import { Routine } from "@/js/routines";
import {Store} from '../js/store';
import {
  alpha_num,
  alpha_spaces,
  max,
  required,
} from "vee-validate/dist/rules";
import { extend, ValidationProvider, ValidationObserver } from "vee-validate";

extend("required", {
  ...required,
  message: "El {_field_} no puede estar vacio",
});
extend("max", {
  ...max,
  message: "El {_field_} debe ser menor a {length} caracteres",
});

extend("alpha_spaces", {
  ...alpha_spaces,
  message: "Solo se permiten letras y espacios",
});
extend("alpha_num", {
  ...alpha_num,
  message: "Solo se permiten letras y numeros",
});

export default {
  components: { ValidationObserver, ValidationProvider },
  data() {
    return {
      routine: new Routine(),
      switch1: false,
      categoria: ["Corta", "Media", "Larga"],
      dificultad: ["rookie", "beginner", "intermediate", "advanced", "expert"],
      ejer: "",
      /*
          mother_big_ex_box:[{nombre:"brazos", ciclos: ,ejs:[name,name,name],
          {nombre:"gonikian",ciclos: ,...}]
        */
    };
  },
  methods: {
    async submit() {
      let store = [];
      let array_ejs = [];
      for (let i = 0; i < this.ejer.length; i++) {
        array_ejs[i].push(this.ejer[i].ejs);
        store.push(new Cycle(this.ejer[i].grupo, this.ejer[i].grupo, "exercise",i,this.ejer[i].ciclos));
      }
      await Store.createRoutine(this.routine, store, array_ejs);
    },
  },
  mounted() {
    bus.$on("confirmarRutina", (big_ex_box) => {
      this.ejer = big_ex_box;
    });
  },
  name: "VisualizarRutina",
};
</script>

<style scoped>
</style>