<template>
 <v-app>
   <BackgroundImage/>
   <Header/>
   <v-main>
     <CreateForm/>
   </v-main>
 </v-app>
</template>

<script>

import Header from "@/components/Header";
import CreateForm from "@/components/CreateForm";
import BackgroundImage from "@/components/BackgroundImage";

export default {
  name: "Login",
  components: {CreateForm, Header,BackgroundImage},
}
</script>


<style scoped>
</style>