<template>
  <v-container style="background-color: white; z-index: 1">
    <v-virtual-scroll
      height="500px"
      width="500px"
      item-height="64px"
      :items="exercises"
    >
      <template v-slot:default="{ item }">
        <v-list-item>
          <v-list-item-avatar>
            <v-icon>
              {{ item.icon }}
            </v-icon>
          </v-list-item-avatar>
          <v-list-item-content>{{ item.name }}</v-list-item-content>
          <v-list-item-action>
            <v-btn color="success" @click="addExer(item.name,
                  item.detail,
                  item.type,
                  item.duration,
                  item.repetitions)">
              Añadir
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </template>
    </v-virtual-scroll>
  </v-container>
</template>

<script>
import { bus } from "../main";

export default {
  props: ["exercises", "idx"],
  data: () => ({
    indice_interno: -1,
  }),
  methods: {
    addExer(name, detail, type, duration, repetitions) {
      if (this.idx == -1) {
        return;
      }
      bus.$emit("addExerToMotherBigBox", {
        name: name,
        detail: detail,
        type: type,
        duration: duration,
        repetitions: repetitions,
        indice: this.idx,
        isMother: 1,
      });
    },
  },
  mounted() {
    bus.$on("changeMotherIdx", (data) => {
      this.indice_interno = data;
      bus.$emit("seleccionarBoton", data);
    });
    bus.$on("restartIdx", () => {
      this.indice_interno = -1;
    });
  },
  created(){
          console.log("estoy en display3  CREATED"+this.idx);

  }
};
</script>

<style scoped>
</style>