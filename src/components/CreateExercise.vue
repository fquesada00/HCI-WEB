<template>
  <v-container class="form">
    <v-row class="justify-center">
      <h1>Crear Ejercicio</h1>
    </v-row>

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
              :error-messages="errors"
          ></v-select>
        </validation-provider>
      </v-col>
    </v-row>
    <v-row class="justify-center">
      <v-btn class="mr-4" type="submit" :loading="loading" color="primary">Crear</v-btn>
    </v-row>
  </v-container>
</template>

<script>
import {required, max, alpha_spaces, numeric} from "vee-validate/dist/rules";
import {
  extend,
  ValidationProvider,
} from "vee-validate";

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
extend("positive",value =>{
   if(value > 0){
     return true
   } return '{_field_} no puede ser menor a 1';
})
export default {
  name: "CreateExercise",
  components: {ValidationProvider},
  data: () => ({
    name: "",
    detail: "",
    type: "exercise",
    duration: "",
    repetitions: "",
    categoria: "",
    categorias: ["Brazos", "Piernas", "Pecho", "Abs"],
    vid: "",
    show: false,
    loading: false
  }),
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