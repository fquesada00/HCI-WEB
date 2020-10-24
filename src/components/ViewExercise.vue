<template>
  <v-container class="form">
    <v-row class="justify-center">
      <h1>Ver Ejercicio</h1>
    </v-row>
      <v-row>
        <v-col>
            <v-text-field
                label="Nombre del Ejercicio"
                v-model="name"
                :placeholder="nombre"
                readonly
                :error-messages="errors"></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col>
            <v-textarea
                label="Informacion Adicional"
                v-model="detail"
                :placeholder="informacion"
                readonly
                counter
                :error-messages="errors"
            ></v-textarea>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
            <v-text-field
                type="number"
                label="Repetitions"
                prefix="#"
                :placeholder="repeticiones"
                readonly
                v-model="repetitions"
                dense
                :error-messages="errors"
            ></v-text-field>
        </v-col>
        <v-col>
            <v-text-field
                type="number"
                label="Duration"
                :placeholder="duracion"
                readonly
                suffix="s"
                dense
                v-model="duration"
                :error-messages="errors"
            ></v-text-field>
        </v-col>
        <v-col>

            <v-select
                :items="categorias"
                :label="categoria"
                readonly
                dense
                :error-messages="errors"
            ></v-select>
        </v-col>
      </v-row>
  </v-container>
</template>

<script>

export default {
  props: ["nombre", "informacion", "repeticiones", "duracion", "categoria"],
  name: "ViewExercise",
  data() {
    return {
      duration: "",
      repetitions: "",
      name: "",
      detail: "",
      categorias: ["Abs","Brazos","Piernas"]

    }
  }
}
</script>

<style scoped>

</style>