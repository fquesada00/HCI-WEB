<template>
  <v-container class="form">
    <v-row class="justify-center">
      <h1>Crear Cuenta</h1>
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
<<<<<<< HEAD
            v-model="confirmation"
            :error-messages="errors"
            label="Confirmar Contraseña"
            :type="show2 ? 'text' : 'password'"
            required
            :append-icon="show2 ? 'mdi-eye': 'mdi-eye-off'"
            @click:append="show2 = !show2"
=======
              v-model="confirmation"
              :error-messages="errors"
              label="Confirm Password"
              :type="show2 ? 'text' : 'password'"
              required
              :append-icon="show2 ? 'mdi-eye': 'mdi-eye-off'"
              @click:append="show2 = !show2"
>>>>>>> c3960d5796fb93cfe9b83b3fb19714dbaaa96f77
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
        <v-row class="justify-center">
          <v-btn type="submit" :disabled="invalid"> submit</v-btn>
        </v-row>
      </form>
    </validation-observer>
  </v-container>
</template>

<script>
import {
  required,
  email,
  max,
  alpha_num,
  alpha_spaces,
  confirmed,
} from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";

import {User, UserApi} from "../js/user.js";

setInteractionMode("eager");

extend("required", {
  ...required,
  message: "{_field_} no puede ser vacio",
});

extend("max", {
  ...max,
  message: "{_field_} no puede ser mayor a {length} caracteres",
});

extend("email", {
  ...email,
  message: "El email no es valido",
});

extend("alpha_spaces", {
  ...alpha_spaces,
  message: "Solo se permiten letras y espacios",
});
extend("alpha_num", {
  ...alpha_num,
  message: "Solo se permiten letras y espacios",
});

extend("confirmed", {
  ...confirmed,
  message: "Passwords don't match",
});
export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data: () => ({
    name: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    confirmation: "",
    gender: null,
    allowedGenders: ["Male", "Female", "Other"],
    birthday: null,
    menu: false,
    show1: false,
    show2: false,
    nowDate: new Date().toISOString().slice(0, 10),
  }),

  methods: {
    async submit() {
      this.$refs.observer.validate();
      let user = new User(
          this.username,
          this.password,
          this.email,
          this.name + " " + this.lastname,
          new Date(this.birthday).getTime(),
          this.gender.toLowerCase()
      );
      let ret = await UserApi.register(user);
      console.log(ret.status);
    },
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
  margin-top: 2%;
  max-width: 600px;
}
</style>