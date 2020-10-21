<template >
  <validation-observer ref="observer">
  
    <v-container class="login">
      <v-form @submit.prevent="submit">
      <ValidationProvider rules="required" v-slot="{ errors }">
        <v-row>
          <v-text-field
            v-model="username"
            label="Usuario"
            prepend-icon="mdi-account"
            :error-messages="errors"
            type="name"
          />
        </v-row>
      </ValidationProvider>
      <v-row>
        <v-text-field
          v-model="email"
          label="Email"
          prepend-icon="mdi-email"
          type="email"
          :rules="[rules.required]"
        />
      </v-row>
      <v-row>
        <v-text-field
          prepend-icon="mdi-lock"
          v-model="password"
          :append-icon="show1 ? 'mdi-eye-off' : 'mdi-eye'"
          :type="show1 ? 'password' : 'text'"
          :rules="[rules.required]"
          label="Contraseña"
          hint="At least 8 characters"
          counter
          @click:append="show1 = !show1"
        ></v-text-field>
      </v-row>
      <v-row>
        <v-text-field
          prepend-icon="mdi-lock"
          v-model="password2"
          :append-icon="show2 ? 'mdi-eye-off' : 'mdi-eye'"
          :type="show2 ? 'password' : 'text'"
          :rules="[rules.required]"
          hint="At least 8 characters"
          counter
          @click:append="show2 = !show2"
          label="Confirmar Contraseña"
        />
      </v-row>
      <v-btn
        @click="submit"
        x-large
        style="display: flex"
        class="mx-auto"
        color="rgb(57, 198, 173)"
        >Registrate</v-btn
      >
      <br />
      <br />
      <span>¿Ya tenes cuenta? </span>
      <a href="">Inicia Sesion</a>
    </v-form>
    </v-container>
  </validation-observer>
</template>

<script>
import { ValidationObserver, ValidationProvider,setInteractionMode } from "vee-validate";
setInteractionMode('eager')
export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  name: "CreateForm",
  data: () => ({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password2: "",
    gender: "",
    birthday: "",
    show1: "true",
    show2: "true",
    rules: {
      required: (value) => !!value || "Required.",
      // min: (v) => v.length >= 8 || "Min 8 characters",
    },
  }),
  methods: {
    submit() {
      console.log(this.username);
    },
  },
  computed: {},
};
</script>

<style scoped>
.login {
  border-radius: 40px;
  background-color: white;
  justify-self: center;
  align-self: center;
  padding-left: 4%;
  padding-right: 4%;
  padding-top: 1%;
  max-width: 600px;
}
</style>