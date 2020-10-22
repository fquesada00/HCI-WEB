<template>
  <v-app>
    <background-image/>
    <v-main>
      <v-container>
        <v-row>
          <v-col order-sm="1">
            <ProfileCard class="profileSettingsFormat"/>

          </v-col>
          <v-col order-sm="0">
            <SettingsForm class="settingsFormFormat"/>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import SettingsForm from "@/components/SettingsForm";
import BackgroundImage from "@/components/BackgroundImage";
import ProfileCard from "@/components/ProfileCard";

export default {
  name: "Settings.vue",
  components: {ProfileCard, BackgroundImage, SettingsForm}
}
</script>

<style scoped>
.profileSettingsFormat {
  margin-top: 1%;
}

.settingsFormFormat {
  margin-top: 1%;
}
</style>