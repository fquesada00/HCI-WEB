<template>
 <v-app>
   <BackgroundImage/>
   <v-main>
     <CreateForm style="  margin-top:12%;"/>
   </v-main>
 </v-app>
</template>

<script>

import CreateForm from "@/components/CreateForm";
import BackgroundImage from "@/components/BackgroundImage";

export default {
  name: "Login",
  components: {CreateForm, BackgroundImage},
}
</script>


<style scoped>
</style>