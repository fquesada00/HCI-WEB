<template>
  <v-expansion-panels>
    <v-expansion-panel>
      <v-expansion-panel-content>
        <BigExBox style="background-color: white ; z-index: 1;" :seccion_name="title1"/>
      </v-expansion-panel-content>
    </v-expansion-panel>
    <v-expansion-panel>
      <v-expansion-panel-content>
      <BigExBox style="background-color: white ; z-index: 1;" :seccion_name="title2"/>
      </v-expansion-panel-content>
    </v-expansion-panel>
    <v-expansion-panel>
      <BigExBox style="background-color: white ; z-index: 1;" :seccion_name="title3"/>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
import BigExBox from "@/components/BigExerciseBox2";

export default {
  components: {BigExBox},
  name: "SectionCreator",
}
</script>

<style scoped>

</style>