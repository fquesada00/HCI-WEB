<template>
  <v-container class="login" width="40%">
    <v-row>
      <v-text-field
        v-model="username"
        label="Usuario"
        prepend-icon="mdi-account"
      />
    </v-row>
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
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        :type="show1 ? 'text' : 'password'"
        :rules="[rules.required]"
        label="Contraseña"
        hint="At least 8 characters"
        counter
        @click:append="show1 = !show1"
      ></v-text-field>
    </v-row>
    <v-row>
      <v-text-field
        label="Repetir Contraseña"
        prepend-icon="mdi-lock"
        :rules="[rules.required]"
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
  </v-container>
</template>

<script>
export default {
  name: "CreateForm",
  data: () => ({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender: "",
    birthday: "",
    show1: "false",
    rules: {
      required: (value) => !!value || "Required."
      // min: (v) => v.length >= 8 || "Min 8 characters",
    },
  }),
  methods: {
    submit() {
      console.log(this.username);
    },
  },
};
</script>

<style scoped>
.login {
  border-radius: 40px;
  background-color: white;
  align-self: center;
  justify-self: center;
  padding-left: 4%;
  padding-right: 4%;
  margin-top: 14%;
  max-width: 600px;
}
</style>