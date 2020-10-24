<template>
  <v-container class="form">
    <v-row class="justify-center">
      <h1>Editar Ejercicio</h1>
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
                :placeholder="nombre"
                :error-messages="errors"></v-text-field>
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
                :placeholder="informacion"
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
                :placeholder="repeticiones"
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
                :placeholder="duracion"
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
                :label="categoria"
                dense
                :error-messages="errors"
            ></v-select>
          </validation-provider>
        </v-col>
      </v-row>
      <v-row class="justify-center">
        <v-btn class="mr-4" type="submit" :loading="loading" :disabled="invalid" color="success">Guardar</v-btn>
      </v-row>
    </validation-observer>
  </v-container>
</template>

<script>

import {extend, ValidationObserver, ValidationProvider} from "vee-validate";
import {alpha_spaces, max, numeric, required} from "vee-validate/dist/rules";

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
  components: {ValidationProvider, ValidationObserver},
  props: ["nombre", "informacion", "repeticiones", "duracion", "categoria"],
  name: "EditExercise",
  data() {
    return {
      duration: "",
      repetitions: "",
      name: "",
      detail: "",
      categorias: ["Abs", "Brazos", "Piernas"]

    }
  }
}
</script>

<style scoped>

</style>