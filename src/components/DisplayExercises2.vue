<template>
  <div class="DisplayExercises">
    <v-card width="600" height="400" class="ma-8">
      <v-row class="ma-0"
        ><v-col class="d-flex" cols="6" sm="6" lg="6">
          <div class="mb-10">
            <v-select
              color="black"
              class="categorias"
              :items="items"
              filled
              solo
              label="Categorías"
              background-color="teal accent-4"
            ></v-select>
          </div>
        </v-col>
        <v-col class="d-flex" cols="6" sm="6" lg="6">
          <v-spacer></v-spacer>
          <div class="mb-12">
            <v-text-field
              class="busqueda red"
              placeholder="Búsqueda"
              filled
              dense
              height="55"
              width="10"
              background-color="teal accent-4"
              elevation-1
            ></v-text-field>
          </div>
        </v-col>
      </v-row>
      <v-divider class="divisor"></v-divider>
      
    </v-card>
  </div>
</template>

<script>
export default {
  name: "DisplayExercises",
  data: () => ({
    items: ["Espalda", "Biceps", "Hombros", "Pecho", "Triceps", "Piernas"],
    busqueda: "",
  }),
  methods: {},
};
</script>

<style scoped>
.categorias {
  width: 200px;
  margin-bottom: -20px;
}
.divisor {
  margin-top: -50px;
}
.busqueda {
  width: 200px;
  height: 10px;
}
.v-text-field >>> input {
  font-size: 1.16em;
}
/* .v-select >>> label {
  font-size: 1.16em;
} */
.v-select{
    font-size: 1.2em;
}
.v-select >>> label{
    font-size: 0.99em;
}
</style>
