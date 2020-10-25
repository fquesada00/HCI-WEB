<template>
  <v-row style="padding-left: 2%;padding-right: 2%" class="Exercise_Box">
    <v-col class="col-xl-6 col-sm-4">
      <span>{{ ej }}</span>
    </v-col>
    <v-spacer></v-spacer>
    <v-col cols="2">
      <v-btn left color="orange" @click="overlay = !overlay">More</v-btn>
    </v-col>
    <v-col cols="2">
      <v-btn rigth color="error" @click="removeExercise">
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </v-col>
    <v-overlay rounded light :value="overlay">
      <v-card rounded height="600px" width="600px" light> 
        <CreateExercise/>
        <!--        No se como se te ocurre aca octa,
        tipo si le pasas como props datos o no se, mañana lo vemos?-->
        <v-btn color="orange" @click="overlay = !overlay">Close</v-btn>
      </v-card>
    </v-overlay>
  </v-row>

</template>

<script>
import CreateExercise from "@/components/CreateExercise";
import {bus} from "../main";
export default {
  components: {CreateExercise},
  props: ["name", "idx", "detail", "type", "duration", "repetitions"],
  data() {
    return {
      cantidad: "CANTIDAD",
      overlay: false,
      up:"up",
      down:"down",
    };
  },
  methods:{
    removeExercise(){
      var index = this.idx;
      bus.$emit("removeExerciseFromMotherBigBox",{
        name: this.name,
        detail: this.detail,
        type: this.type,
        duration: this.duration,
        repetitions: this.repetitions,
        indice: index,
      });
    },
  }
};
</script>

<style scoped>
</style>