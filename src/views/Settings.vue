<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row>
          <v-col order-sm="1">
<!--            <ProfileCard class="profileSettingsFormat"/>-->
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
// import ProfileCard from "@/components/ProfileCard";

export default {
  name: "Settings.vue",
  components: { SettingsForm}
}
</script>

<style scoped>
.settingsFormFormat {
  margin-top: 1%;
}
</style>