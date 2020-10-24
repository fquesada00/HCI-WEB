<template>
  <v-app>
    <BackgroundImage/>
    <v-main>
      <CreateExercise/>
    </v-main>
  </v-app>
</template>

<script>
import BackgroundImage from "@/components/BackgroundImage";
import CreateExercise from "@/components/CreateExercise";
export default {
name: "NewExercise",
  components: {CreateExercise, BackgroundImage}
}
</script>

<style scoped>

</style>