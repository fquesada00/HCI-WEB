<template>
  <v-main>
    <LoginForm style=""  @logged="initialize"/>
  </v-main>
</template>

<script>
import LoginForm from "@/components/LoginForm";
import {Store} from "../js/store";

export default {
  name: "Login",
  components: {LoginForm},
  methods: {
    initialize: async function () {
      console.log("inicializo")
        await Store.initUser().then(()=>{this.loading=false})
    }
  }
}
</script>


<style scoped>
</style>