<template>
  <v-container class="form">
    <v-row class="justify-center">
      <h1>Crear Ejercicio</h1>
    </v-row>
      <validation-observer ref="observer" v-slot="{ invalid }">

        <v-row>
          <v-col>
            <validation-provider
                v-slot="{ errors }"
                name="Nombre ejercicio"
                rules="required|max:100"
            >
              <v-text-field
                  label="Nombre del Ejercicio"
                  v-model="name"
                  :error-messages="errors">
              </v-text-field>
            </validation-provider>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col>
            <validation-provider
                v-slot="{ errors }"
                name="Descripcion"
                rules="required|max:200"
            >
              <v-textarea
                  label="Informacion Adicional"
                  v-model="detail"
                  counter
                  :error-messages="errors"
              ></v-textarea>
            </validation-provider>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <validation-provider
                v-slot="{ errors }"
                name="Repeticiones"
                rules="required|positive"
            >
              <v-text-field
                  type="number"
                  label="Repetitions"
                  prefix="#"
                  v-model="repetitions"
                  dense
                  :error-messages="errors"
              ></v-text-field>
            </validation-provider>
          </v-col>
          <v-col>
            <validation-provider
                v-slot="{ errors }"
                name="duracion"
                rules="required|positive"
            >
              <v-text-field
                  type="number"
                  label="Duration"
                  suffix="s"
                  dense
                  v-model="duration"
                  :error-messages="errors"
              ></v-text-field>
            </validation-provider>
          </v-col>
          <v-col>
            <validation-provider
                v-slot="{ errors }"
                name="tipo"
                rules="required"
            >
              <v-select
                  :items="categorias"
                  label="Categoria"
                  dense
                  v-model="categoria"
                  :error-messages="errors"
              ></v-select>
            </validation-provider>
          </v-col>
        </v-row>
        <v-row class="justify-center">
          <v-btn class="mr-4" type="submit" :loading="loading" @click="onSubmit" :disabled="invalid" color="primary">
            Crear
          </v-btn>
        </v-row>
      </validation-observer>
    <v-overlay
        :z-index=0
        :value="overlay"
    >
      <v-card class="carta">
        <v-row justify="center">
          <span>¡Muy bien! Se ha creado el ejercicio</span>
        </v-row>
        <v-row justify="center" style="padding-top: 10%;">

          <v-btn
              class="white--text"
              color="teal"
              @click="$router.push($route.query.redirect || '/')"
          >
            ¡Genial!
          </v-btn>
        </v-row>
      </v-card>
    </v-overlay>
  </v-container>
</template>

<script>
import {required, max, alpha_spaces, numeric} from "vee-validate/dist/rules";
import {
  extend,
  ValidationProvider,
  ValidationObserver,
} from "vee-validate";
import {Store} from "../js/store";
import {Exercise} from "../js/exercises";

extend("required", {
  ...required,
  message: "{_field_} no puede ser vacio",
});
extend("numeric", {
  ...numeric,
  message: "{_field_} tiene que se un numero",
});
extend("alpha_spaces", {
  ...alpha_spaces,
  message: "Solo se permiten letras y espacios",
});
extend("max", {
  ...max,
  message: "El {_field_} debe ser menor a {length} caracteres",
});
extend("positive", value => {
  if (value > 0) {
    return true
  }
  return '{_field_} no puede ser menor a 1';
})
export default {
  name: "CreateExercise",
  components: {ValidationProvider, ValidationObserver},
  data: () => ({
    name: "",
    detail: "",
    type: "exercise",
    duration: "",
    repetitions: "",
    categoria: "",
    categorias: ["Brazos", "Piernas", "Pecho", "Abdominales"],
    overlay: false,
    loading: false
  }),
  methods: {
    onSubmit: function () {
      this.loading = true;
      let exercise = new Exercise(this.name, this.detail, this.type, parseInt(this.duration), parseInt(this.repetitions))
      Store.createExercise(exercise, this.categoria).then(() => {
        this.loading = false;
        this.overlay = true;

      })
    }
  }
}
</script>

<style scoped>
.form {
  border-radius: 40px;
  background-color: white;
  justify-self: center;
  align-self: center;
  padding-left: 4%;
  padding-right: 4%;
  padding-top: 1%;
  margin-top: 2%;
  max-width: 600px;
}
</style>