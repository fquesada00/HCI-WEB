<template>
  <v-app>
    <BackgroundImage/>
    <v-row>
      <v-col  class="exerciseCard">
        <ExerciseCard/>
      </v-col>
      <v-spacer></v-spacer>
      <v-col class="profileCard">
        <ProfileCard />
      </v-col>
    </v-row>

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
  margin-left:10%;
}

.profileCard {
  margin-right:20%;
  margin-top: 5%;
}
</style>