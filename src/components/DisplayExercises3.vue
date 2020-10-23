<template>
  <v-container rounded style="height: 500px; width: 500px; background-color: white; z-index: 1">
    <v-virtual-scroll
        item-height="64"
        :items="exercises"
    >
      <template v-slot:default="{ item }">
        <v-list-item>
          <v-list-item-avatar>
            <v-icon>
              {{ item.icon }}
            </v-icon>
          </v-list-item-avatar>
          <v-list-item-content >{{ item.name }}</v-list-item-content>
          <v-list-item-action>
            <v-container style="width:100px">
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
            <v-btn color="success">
              Add
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </template>
    </v-virtual-scroll>
  </v-container>
</template>

<script>
export default {
  name: "DisplayExercises3",
  data: () => ({
        exercises: [{icon: "mdi-weight-gram", name: "Destruye Piernas", amount: 0},
          {icon: "mdi-bike", name: "Destruye Brazos", amount: 0},
          {icon: "mdi-biathlon", name: "Ayuda Abs", amount: 0},
          {icon: "mdi-bowling", name: "Destruye Piernas", amount: 0},
          {icon: "mdi-cactus", name: "Destruye Piernas", amount: 0},
          {icon: "mdi-cannabis", name: "Destruye Piernas", amount: 0},
          {icon: "mdi-castle", name: "Destruye Piernas", amount: 0},
          {icon: "mdi-dog", name: "Destruye Piernas", amount: 0},
          {icon: "mdi-elephant", name: "Destruye Piernas", amount: 0},
          {icon: "mdi-face", name: "Destruye Piernas", amount: 0},
          {icon: "mdi-foot-print", name: "Destruye Piernas", amount: 0},
          {icon: "mdi-ghost", name: "Destruye Piernas", amount: 0},
          {icon: "mdi-heart-pulse", name: "Destruye Piernas", amount: 0},
          {icon: "mdi-lingerie", name: "Destruye Piernas", amount: 0},
          {icon: "mdi-nintendo-switch", name: "Destruye Piernas", amount: 0}
        ]
      }
  ),
}
</script>

<style scoped>

</style>