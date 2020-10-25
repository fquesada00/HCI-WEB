<template>
  <v-row style="padding-left: 2%; padding-right: 2%" class="Exercise_Box">
    <v-col class="col-xl-6 col-sm-4">
      <span>{{ ej }}</span>
    </v-col>
    <v-spacer></v-spacer>
    <v-col cols="2">
      <v-btn left color="orange" @click="overlay = !overlay">Ver más</v-btn>
    </v-col>
    <v-col cols="2">
      <v-btn rigth color="error" @click="removeExercise">
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </v-col>
    <v-overlay rounded light :value="overlay">
      <v-card rounded height="600px" width="600px" light>
        <v-row style="margin-left: 10px; margin-right: 10px">
          <ViewExercise
            v-if="edit === false"
            :repeticiones="34"
            :informacion="'FlexFlexFlex'"
            :duracion="5"
            :categoria="'Brazos'"
            :nombre="'Flexion de Brazos'"
          />
          <EditExercise
            v-else
            :repeticiones="34"
            :informacion="'FlexFlexFlex'"
            :duracion="5"
            :categoria="'Brazos'"
            :nombre="'Flexion de Brazos'"
          ></EditExercise>
        </v-row>
        <v-row>
          <v-btn
            style="margin-left: auto; margin-right: 20px"
            color="orange"
            @click="edit = !edit"
          >
            <span v-if="edit">Ver</span>
            <span v-else>Editar</span>
          </v-btn>
          <v-btn
            style="margin-right: 20px"
            color="primary"
            @click="overlay = !overlay"
          >
            Cerrar
          </v-btn>
        </v-row>
      </v-card>
    </v-overlay>
  </v-row>
</template>

<script>
import ViewExercise from "@/components/ViewExercise";
import EditExercise from "@/components/EditExercise";
export default {
  name: "Exercice_box.vue",
  components: { ViewExercise, EditExercise },
  props: ["name", "idx", "detail", "type", "duration", "repetitions"],
  data() {
    return {
      cantidad: "CANTIDAD",
      overlay: false,
      up: "up",
      down: "down",
      edit: true,
    };
  },
  methods: {
    removeExercise() {
      var index = this.idx;
      this.$emit("borrarEj", {
        name: this.name,
        detail: this.detail,
        type: this.type,
        duration: this.duration,
        repetitions: this.repetitions,
        indice: index,
      });
    },
  },
};
</script>

<style scoped>
</style>