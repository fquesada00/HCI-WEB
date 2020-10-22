<template>
  <v-app>
    <BackgroundImage/>
    <v-container>
        <v-row class="profileCard">
          <ProfileCard/>
        </v-row>
        <v-row class="exerciseCard">
          <ExerciseCard/>
        </v-row>
    </v-container>
  </v-app>
</template>

<script>
import BackgroundImage from "@/components/BackgroundImage";
import ExerciseCard from "@/components/ExerciseCard";
import ProfileCard from "@/components/ProfileCard";

export default {
  name: "Profile",
  components: {ProfileCard, ExerciseCard, BackgroundImage}
}
</script>

<style scoped>
.exerciseCard {
  margin-top: 5%;
  padding-left:5%;
  padding-right:5%;
}

.profileCard {
  margin-top: 2%;
}
</style>