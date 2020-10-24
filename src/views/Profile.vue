<template>
  <v-container v-if="error == null && user != null">
    <transition mode="out-in" enter-active-class="animated slideInLeft" leave-active-class="animated slideOutRight">

      <v-row>
        <v-col v-if="!settings">
          <ExerciseCard class="exerciseCard"/>
        </v-col>
        <v-col v-else>
          <SettingsForm @updateData="getData" />
        </v-col>
        <v-col>
          <ProfileCard :user="user" :id="id"
                       :created="createdRoutines.length-1"
                       :completed="completed.length"
                       :favourite="favourite.length" class="profileCard"
                       @showSettings="toggleSettings"/>

        </v-col>
      </v-row>
    </transition>

  </v-container>
  <v-container v-else>
    <span>{{ error }}</span>
  </v-container>
</template>

<script>
import ExerciseCard from "@/components/ExerciseCard";
import ProfileCard from "@/components/ProfileCard";
import {UserApi} from "../js/user";
import {Store} from "../js/store";
import SettingsForm from "../components/SettingsForm";

export default {
  name: "Profile",
  components: {ProfileCard, ExerciseCard, SettingsForm},
  data: () => ({
    error: null,
    user: null,
    id: "",
    createdRoutines: [],
    completed: [],
    favourite: [],
    loaded: "",
    settings: false
  }),
  created() {
    this.getData()
  },
  methods: {
    getData: async function () {
      let ret = await UserApi.getCurrentUser().catch(err => {
        this.error = err.details
      });
      this.user = ret;
      this.user.id = ret.id
      let created = await Store.getMyRoutines().catch(err => {
        this.error = err.details
      })
      this.createdRoutines = created ? created.results : [];
      let fav = await Store.getFavs().catch(err => {
        this.error = err.details;
      })
      this.favourite = fav ? fav.results : [];
      let completed = await Store.getCompleted().catch(err =>{
        this.error = err.details;
      })
      this.completed = completed ? completed.results :[]
    },
    toggleSettings() {
      this.settings = !this.settings
    }
  }
}
</script>

<style scoped>
.exerciseCard {
  margin-top: 5%;
  flex: auto;
}

.profileCard {
  margin-top: 5%;
  margin-right: 5%;
}
</style>