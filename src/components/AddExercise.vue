<template>
  <v-card class="add">
    <v-card-action>
      <v-btn x-large class="boton">
        <v-icon>mdi-heart</v-icon>
      </v-btn>
    </v-card-action>
  </v-card>
</template>

<script>
export default {
  name: "Exercice_box.vue",
  data() {
    return {
      text: "NOMBRE EJERCICIOSSSSSSSSSSSSSSSSSSS".slice(0, 20), //es un aprox, cambiar
      cantidad: "15s",
    };
  },
};
</script>
<style scoped>
.add {
  width: 302px;
}
.boton  {
  width: 302px;
  height: 107px;
}
</style>