<template @load="getData">
  <v-container class="form">
    <v-row class="justify-center">
      <h1>Mis datos</h1>
    </v-row>
    <validation-observer ref="observer">
      <form @submit.prevent="submit">
        <v-row>
          <v-col>
            <validation-provider
                v-slot="{ errors }"
                name="Nombre Completo"
                rules="alpha_spaces|max:50"
            >
              <v-text-field
                  v-model="user.fullName"
                  :error-messages="errors"
                  label="Nombre Completo"
              ></v-text-field>
            </validation-provider>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-menu
                ref="menu"
                v-model ="menu"
                :close-on-content-click="false"
                :return-value.sync="user.birthdate"
                transition="scale-transition"
                offset-y
                max-width="290px"
                min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                      v-model="user.birthdate"
                      label="Fecha de nacimiento"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                  ></v-text-field>
              </template>
              <v-date-picker
                  v-model="user.birthdate"
                  type="date"
                  locale="es"
                  no-title
                  scrollable
                  :max="nowDate"
              >
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="menu = false">
                  Cancelar
                </v-btn>
                <v-btn text color="primary" @click="$refs.menu.save(user.birthdate)">
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
                  v-model="user.gender"
                  :items="allowedGenders"
                  :error-messages="errors"
                  label="Genero"
                  required
              ></v-select>
            </validation-provider>
          </v-col>
        </v-row>
        <v-row class="justify-center" v-if="error != null">
          <span class="error--text">{{ error }}</span>
        </v-row>
        <v-row class="justify-center">
          <v-btn type="submit" > Actualizar</v-btn>
        </v-row>
      </form>
    </validation-observer>
  </v-container>
</template>

<script>
import {email, alpha_num} from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";
import {User, UserApi} from "@/js/user";

setInteractionMode("eager");


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
    user: new User(),
    menu:false,
    username: "",
    email: "",
    password: "",
    confirmation: "",
    gender: "",
    show2: false,
    allowedGenders: ["Male", "Female", "Other"],
    error: null,
    nowDate: new Date().toISOString().slice(0, 10),
    checkbox: null,
    show1: false
  }),

  methods: {
    async submit() {
      this.$refs.observer.validate();
      let validDay = new Date(this.user.birthdate).getTime()
      validDay = validDay ? validDay : this.user.birthdate
      let user = new User("",
          "",
          'a@mail.com',
          this.user.fullName,
          validDay,
          this.user.gender.toLowerCase(),"",""
          )
      await UserApi.updateCurrentUser(user).catch(err => {
        this.error = err.description
      }).finally(()=>{this.$emit('updateData')})

    },
    async getData(){
      this.user = await UserApi.getCurrentUser().catch(err => {
        this.error = err.description})
      this.user.birthdate = new Date(this.user.birthdate).toISOString().slice(0, 10)
      this.user.gender = this.user.gender.charAt(0).toUpperCase()+this.user.gender.slice(1)
      console.log(" la data es " + this.user.gender);
    }
  },
  created() {
    this.getData()
  }
}
</script>

<style scoped>
.form {
  border-radius: 3px;
  background-color: white;
  justify-self: center;
  align-self: center;
  padding-left: 4%;
  padding-right: 4%;
  margin-top: 5%;
  max-width: 700px;
}
</style>