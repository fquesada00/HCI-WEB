<template>
 <v-app>
   <BackgroundImage/>
   <Header/>
   <ProfileCard/>
 </v-app>
</template>

<script>
import ProfileCard from "@/components/ProfileCard";
import Header from "@/components/Header";
import BackgroundImage from "@/components/BackgroundImage";
export default {
name: "Profile",
  components: {BackgroundImage, Header, ProfileCard}
}
</script>

<style scoped>

</style>