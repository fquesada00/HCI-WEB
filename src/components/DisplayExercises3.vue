<template>
  <v-container
    rounded
    style="height: 500px; width: 500px; background-color: white; z-index: 1"
  >
      <!-- <v-btn @click="show_me">CLICKEAME</v-btn>
      <v-row>
          <v-col v-for="(ex,index) in exercises" :key="index">
            <v-container>
              <p>{{ex.name}}</p>
            </v-container>
          </v-col>
        </v-row> -->
      <v-virtual-scroll item-height="64" :items="exercises">
        <template v-slot:default="{ item }">
          <v-list-item>
            <v-list-item-avatar>
              <v-icon>
                {{ item.icon }}
              </v-icon>
            </v-list-item-avatar>
            <v-list-item-content>{{ item.name }}</v-list-item-content>
            <v-list-item-action>
              <v-container style="width: 100px">
                <v-text-field
                  type="number"
                  placeholder="0"
                  prefix="#"
                  dense
                  :value="item.amount"
                ></v-text-field>
              </v-container>
            </v-list-item-action>
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
import { bus } from "../main";
export default {
  props: ["exercises"],
  name: "DisplayExercises3",
  data: () => ({}),
  methods: {
    addExer(name, amount) {
      bus.$emit("addExerToBigBox", { ej: name, cant: amount });
    },
    show_me(){
      console.log(this.exercises);
    }
  },
};
</script>

<style scoped>
</style>