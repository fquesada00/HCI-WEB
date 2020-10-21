<template>
  <v-card class="profile">
    <v-icon class="gears">
      mdi-cog
    </v-icon>
    <v-avatar color="primary" size="50">
    </v-avatar>
  </v-card>
</template>

<script>
export default {
name: "ProfileCard"
}
</script>

<style scoped>
.profile {
  height:400px;
  width:300px;
  background-color: white;
}
.gears {
  margin-left:275px;
  margin-top:3px;
  position:absolute;
}
</style>