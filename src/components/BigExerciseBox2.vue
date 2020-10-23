<template>
  <div class="big-exercise-box2">
    <v-container>
      <v-row class="d-flex justify-space-between">
        <v-col cols="12" md="8" lg="9">
          <div>
            <p class="font-weight-black text-h5">{{ seccion_name }}</p>
          </div>
        </v-col>
        <v-col class="align-content-center" lg="3" md="4" cols="7">
          <v-text-field
            prefix="#"
            placeholder="0"
            type="number"
            solo
            :rules="[verify]"
          >
          </v-text-field>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-col v-for="nombre in nombres" :key="nombre">
        <v-container class="grey">
          <p class="text-h6">{{nombre}}</p>
        </v-container>
      </v-col>
      <v-text-field label="Regular" v-model="ej">NOMBRE EJ</v-text-field>
      <v-btn @click="add">add</v-btn>
      <v-divider></v-divider>
      <v-col align="center">
        <v-btn class="teal accent-4 font-weight-black text-h6">CONTINUAR</v-btn>
      </v-col>
    </v-container>
  </div>
</template>

<script>
export default {
  props: ["seccion_name"],

  data() {
    return {
      ej: "",
      nombres: [],
    };
  },
  methods: {
    verify(v) {
      if (!v.trim()) return true;
      if (!isNaN(parseFloat(v)) && v >= 0 && v <= 99) {
        this.reps = v;
        return true;
      }
      return "Number has to be between 0 and 99";
    },
    add() {
      if (this.ej != null) {
        this.nombres.push(this.ej);
        this.ej = "";
      }
    },
  },
};
</script>

<style scoped>
</style>