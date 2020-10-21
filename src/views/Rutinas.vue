<template>
 <v-app>
   <BackgroundImage/>
   <Exercises/>
 </v-app>
</template>

<script>
import BackgroundImage from "@/components/BackgroundImage";
import Exercises from '@/components/ExerciseBox';
export default {
name: "Rutinas",
  components: {BackgroundImage, Exercises},
}
</script>

<style scoped>

</style>