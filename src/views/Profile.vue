<template>
 <v-app>
   <BackgroundImage/>
   <ProfileCard/>
 </v-app>
</template>

<script>
import ProfileCard from "@/components/ProfileCard";
import BackgroundImage from "@/components/BackgroundImage";
export default {
name: "Profile",
  components: {BackgroundImage, ProfileCard}
}
</script>

<style scoped>

</style>