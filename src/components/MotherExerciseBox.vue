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
      <v-btn rigth color="error" @click="removeExercise(ej)">
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </v-col>
    <v-col cols="1">
      <v-btn fab x-small @click="move(up)">
        <v-icon>mdi-arrow-up</v-icon>
      </v-btn>
    </v-col>
    <v-col cols="1">
      <v-btn fab x-small @click="move(down)">
        <v-icon>mdi-arrow-down</v-icon>
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
export default {
  components: {CreateExercise},
  props: ["ej","idx"],
  data() {
    return {
      cantidad: "CANTIDAD",
      overlay: false,
      up:"up",
      down:"down",
    };
  },
  methods:{
    removeExercise(name){
      var index = this.idx;
      this.$emit("borrarEjMother",{nombre:name, indice:index});
    },
    // move(position){
    //   var index = this.idx;
    //   bus.$emit("moveExer",{nombre:this.ej, indice:index, posicion: position});
    // }
  }
};
</script>

<style scoped>
</style>