<template>
 <v-app>
   <BackgroundImage/>
   <v-main>
     <CreateForm/>
   </v-main>
 </v-app>
</template>

<script>

import CreateForm from "@/components/CreateForm";

export default {
  name: "Signin",
  components: {CreateForm},
}
</script>


<style scoped>
</style>