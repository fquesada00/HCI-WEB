<template>
 <v-app>
   <BackgroundImage/>
   <v-main>
     <RegisterForm/>
   </v-main>
 </v-app>
</template>

<script>

import RegisterForm from "@/components/RegisterForm";
import BackgroundImage from '@/components/BackgroundImage'
export default {
  name: "Signin",
  components: {RegisterForm,BackgroundImage},
}
</script>


<style scoped>
</style>