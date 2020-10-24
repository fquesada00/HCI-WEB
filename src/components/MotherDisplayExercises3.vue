<template>
  <v-container style="background-color: white; z-index: 1">
    <v-virtual-scroll height=500px width="500px" item-height="64px" :items="exercises">
      <template v-slot:default="{ item }">
        <v-list-item>
          <v-list-item-avatar>
            <v-icon>
              {{ item.icon }}
            </v-icon>
          </v-list-item-avatar>
          <v-list-item-content>{{ item.name }}</v-list-item-content>
          <v-list-item-action>
            <v-btn color="success" @click="addExer(item.name, item.amount)">
              Add
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </template>
    </v-virtual-scroll>
  </v-container>
</template>

<script>
import {bus} from "../main";

export default {
  props: ["exercises","idx"],
  data: () => ({}),
  methods: {
    addExer(name, amount) {
        console.log("agrego en "+this.idx);
        if(this.idx == -1){
            return;
        }
        
      var index = this.idx;
      bus.$emit("addExerToMotherBigBox", {ej: name, cant: amount, indice: index});
    },
  },
  mounted(){
      bus.$on("changeMotherIdx", data => {
          this.idx = data;
          console.log("El indice es = "+data);
          bus.$emit("seleccionarBoton",data);
      });
      bus.$on("restartIdx", () => {
          this.idx = -1;
      });
  }
};
</script>

<style scoped>
</style>