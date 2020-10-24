<template>
  <v-container class="form">
    <v-row class="justify-center">
      <h1>Iniciar Sesion</h1>
    </v-row>
    <validation-observer ref="observer" v-slot="{ invalid }">
      <form @submit.prevent="submit">
        <validation-provider
            v-slot="{ errors }"
            name="Usuario"
            rules="required|alpha_num"
        >
          <v-text-field
              v-model="username"
              :error-messages="errors"
              label="Usuario"
              required
          >
            <template v-slot:label>
              <v-icon :color="errors[0] ? 'error' : ''">mdi-account</v-icon>
              Usuario
            </template>
          </v-text-field>
        </validation-provider>

        <validation-provider
            v-slot="{ errors }"
            name="contraseña"
            rules="required"
        >
          <v-text-field
              v-model="password"
              :error_messages="errors"
              label="Contraseña"
              :type="show1 ? 'text' : 'password'"
              :append-icon="show1 ? 'mdi-eye': 'mdi-eye-off'"
              @click:append="show1 = !show1"></v-text-field>
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
        <v-row class="justify-center" v-if="error != null">
          <span class="error--text">{{ error }}</span>
        </v-row>
        <v-row class="justify-center">
          <v-btn class="mr-4" type="submit" :disabled="invalid" :loading="loading">Ingresar</v-btn>
        </v-row>
      </form>
    </validation-observer>
  </v-container>
</template>

<script>
import {required, email, alpha_num} from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";
import {Credentials, UserApi} from "../js/user";
import {bus} from "../main";

setInteractionMode("eager");

extend("required", {
  ...required,
  message: "{_field_} can not be empty",
});

extend("alpha_num", {
  ...alpha_num,
  message: "{_field_} invalido",
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
    username: "",
    password: "",
    error: null,
    checkbox: null,
    show1: false,
    loading:false
  }),

  methods: {
    async submit() {
      this.loading=true;
      this.$refs.observer.validate();
      let cred = new Credentials(this.username, this.password)
      UserApi.login(cred)
          .then(() => {
            this.$emit('logged')
            this.$router.push(this.$route.query.redirect || '/');
            bus.$emit('logged');
          })
          .catch((e) => {
            this.error = e.details[0]
            this.loading=false
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
  max-width: 600px;
}
</style>