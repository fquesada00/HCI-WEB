<template>
  <v-card class="Exercise_Box">
    <v-card-text>
      <div class="exercise_name">
        {{ text }}
      </div>
    </v-card-text>
    <v-divider dark="true"></v-divider>
    <v-container>
      <v-row>
        <v-col cols="12" sm="3">
          <div>HOLA</div>
        </v-col>
        <v-col cols="12" sm="3">
          <v-btn text color="secondary">
            <v-icon>mdi-heart</v-icon>
          </v-btn>
        </v-col>
        <v-col cols="12" sm="3">
          <v-btn text color="pink">
            <v-icon>mdi-heart</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: "Exercice_box.vue",
  data() {
    return {
      text: "NOMBRE EJERCICIOSSSSSSSSSSSSSSSSSSS".slice(0, 20), //es un aprox, cambiar
      cantidad: "CANTIDAD",
    };
  },
};
</script>

<style scoped>
.Exercise_Box {
  margin: 100px;
  width: 300px;
  height: 200px;
  position: relative;
}
.exercise_name {
  font-size: 20px;
}
.fila_inferior {
  margin: 10px;
}
</style>