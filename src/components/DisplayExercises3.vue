<template>
  <v-container style="background-color: white; z-index: 1">
    <v-virtual-scroll
      height="300px"
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
            <v-btn
              color="success"
              @click="
                addExer(
                  item.name,
                  item.detail,
                  item.type,
                  item.duration,
                  item.repetitions
                )
              "
            >
              Agregar
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
  name: "DisplayExercises3",
  data: () => ({}),
  methods: {
    addExer(name, detail, type, duration, repetitions) {
      var index = this.idx;
      bus.$emit("addExerToBigBox", {
        name: name,
        detail: detail,
        type: type,
        duration: duration,
        repetitions: repetitions,
        indice: index,
        isMother: 0,
      });
    },
  },
};
</script>

<style scoped>
</style>