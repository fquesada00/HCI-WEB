<template>
 <v-app>
   <BackgroundImage/>
   <v-main>
     <RegisterForm style="  margin-top:12%;"/>
   </v-main>
 </v-app>
</template>

<script>

import RegisterForm from "@/components/LoginForm";
import BackgroundImage from "@/components/BackgroundImage";
export default {
  name: "Login",
  components: {RegisterForm, BackgroundImage},
}
</script>


<style scoped>
</style>