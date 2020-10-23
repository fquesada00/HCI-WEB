<template>
  <v-app>
    <background-image/>
    <v-main>
      <v-container class="main">
        <v-row rounded class="search">
          <v-text-field
              style="margin-left:1%; margin-right:1%;"
              prepend-inner-icon="mdi-magnify"
              append-outer-icon="mdi-filter"
              label="Search"
              hide-details
          ></v-text-field>
        </v-row>
        <v-row style="margin-left:5%; margin-right:5%;">
          <ExerciseCard/>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import BackgroundImage from "@/components/BackgroundImage";
import ExerciseCard from "@/components/ExerciseCard";

export default {
  name: "Explore",
  components: {ExerciseCard, BackgroundImage}
}
</script>

<style scoped>
.main {
  z-index: 1;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1%;
}
.search{
  background-color: white;
  margin-left:1%;
  margin-right:1%;
  border-radius:5px;
  margin-bottom:5%;
}
</style>