<template >
  <v-container class="form">
    <v-row class="justify-center">
      <h1>Iniciar Sesion</h1>
    </v-row>
    <validation-observer ref="observer" v-slot="{ invalid }">
      <form @submit.prevent="submit">
        <validation-provider
          v-slot="{ errors }"
          name="Email"
          rules="required|email"
        >
          <v-text-field
            v-model="email"
            :error-messages="errors"
            label="E-mail"
            required
            prepend-icon="mdi-account"
          ></v-text-field>
        </validation-provider>
        <validation-provider
          v-slot="{ errors }"
          name="password"
          rules="required"
        >
        <v-text-field v-model="password" :error_messages="errors" label="Contraseña" required 
            prepend-icon="mdi-lock">        </v-text-field>
          </validation-provider>
        <validation-provider
          v-slot="{ errors }"
          name="checkbox"
        >
          <v-checkbox
            v-model="checkbox"
            :error-messages="errors"
            value="1"
            label="Recordarme"
            type="checkbox"
          ></v-checkbox>
        </validation-provider>

        <v-btn class="mr-4" type="submit" :disabled="invalid">Ingresar</v-btn>
      </form>
    </validation-observer>
  </v-container>
</template>

<script>
import { required, email, max } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";

setInteractionMode("eager");

extend("required", {
  ...required,
  message: "{_field_} can not be empty",
});

extend("max", {
  ...max,
  message: "{_field_} no debe ser mayor a {length} caracteres",
});

extend("email", {
  ...email,
  message: "El email debe ser válido",
});

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data: () => ({
    name: "",
    email: "",
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: null,
  }),

  methods: {
    submit() {
      this.$refs.observer.validate();
    }
  },
};
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
  margin-top: 5%;
  max-width: 600px;
}
</style>