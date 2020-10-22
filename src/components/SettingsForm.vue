<template>
  <v-container class="form">
    <v-row class="justify-center">
      <h1>Configuración</h1>
    </v-row>
    <validation-observer ref="observer" v-slot="{ invalid }">
      <form @submit.prevent="submit">
        <v-row>
          <v-col>
            <validation-provider
                v-slot="{ errors }"
                name="Nombre"
                rules="required|alpha_spaces|max:50"
            >
              <v-text-field
                  v-model="name"
                  :error-messages="errors"
                  label="Nombre"
                  required
              ></v-text-field>
            </validation-provider>
          </v-col>
          <v-col>
            <validation-provider
                v-slot="{ errors }"
                name="Apellido"
                rules="required|alpha_spaces|max:50"
            >
              <v-text-field
                  v-model="lastname"
                  :error-messages="errors"
                  label="Apellido"
                  required
              ></v-text-field>
            </validation-provider>
          </v-col>
        </v-row>
        <validation-provider
            v-slot="{ errors }"
            name="Email"
            rules="required|email|max:100"
            label="Email"
        >
          <v-text-field
              v-model="email"
              :error-messages="errors"
              label="Email"
              required
          ></v-text-field>
        </validation-provider>
        <validation-provider
            v-slot="{ errors }"
            name="Usuario"
            rules="required|max:50|alpha_num"
            label="Email"
        >
          <v-text-field v-model="username" :error-messages="errors" required>
            <template v-slot:label>
              <v-icon :color="errors[0] ? 'error' : ''">mdi-account</v-icon>
              Usuario
            </template>
          </v-text-field>
        </validation-provider>
        <validation-provider
            v-slot="{ errors }"
            name="Password"
            rules="max:50|required"
            vid="confirmation"
        >
          <v-text-field
              v-model="password"
              :error-messages="errors"
              label="Constraseña"
              :type="show1 ? 'text' : 'password'"
              required
              :append-icon="show1 ? 'mdi-eye': 'mdi-eye-off'"
              @click:append="show1 = !show1"
          />
        </validation-provider>
        <validation-provider
            v-slot="{ errors }"
            name="Confirmation"
            rules="confirmed:confirmation"
        >
          <v-text-field
              v-model="confirmation"
              :error-messages="errors"
              label="Confirmar constraseña"
              :type="show2 ? 'text' : 'password'"
              required
              :append-icon="show2 ? 'mdi-eye': 'mdi-eye-off'"
              @click:append="show2 = !show2"
          ></v-text-field>
        </validation-provider>
        <v-row>
          <v-col>
            <v-menu
                ref="menu"
                v-model="menu"
                :close-on-content-click="false"
                :return-value.sync="birthday"
                transition="scale-transition"
                offset-y
                max-width="290px"
                min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <validation-provider
                    v-slot="{ errors }"
                    name="Fecha de nacimiento"
                    rules="required"
                >
                  <v-text-field
                      v-model="birthday"
                      label="Fecha de nacimiento"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                      :error-messages="errors"
                      required
                  ></v-text-field>
                </validation-provider>
              </template>
              <v-date-picker
                  v-model="birthday"
                  type="date"
                  locale="es"
                  no-title
                  scrollable
                  :max="nowDate"
              >
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="menu = false">
                  Cancel
                </v-btn>
                <v-btn text color="primary" @click="$refs.menu.save(birthday)">
                  OK
                </v-btn>
              </v-date-picker>
            </v-menu>
          </v-col>
          <v-col>
            <validation-provider
                v-slot="{ errors }"
                name="Genero"
                rules="required"
            >
              <v-select
                  v-model="gender"
                  :items="allowedGenders"
                  :error-messages="errors"
                  label="Genero"
                  required
              ></v-select>
            </validation-provider>
          </v-col>
        </v-row>
        <v-row class="justify-center" v-if="error != null">
          <span  class="error--text">{{ error }}</span>
        </v-row>
        <v-row class="justify-center">
          <v-btn type="submit" :disabled="invalid"> submit</v-btn>
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
import {Credentials, UserApi} from "@/js/user";

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
  name: "SettingsCard",
  data: () => ({
    username: "",
    password: "",
    error: null,
    checkbox: null,
    show1: false
  }),
  methods: {
    async submit() {
      this.$refs.observer.validate();
      let cred = new Credentials(this.username, this.password)
      UserApi.login(cred)
          .then(() => this.$router.push(this.$route.query.redirect || '/'))
          .catch((e) => {
            this.error = e.details[0]
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
  margin-top: 5%;
  max-width: 600px;
}
</style>