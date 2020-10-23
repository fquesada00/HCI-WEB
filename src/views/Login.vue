<template>
   <v-main>
     <LoginForm style="" @logged="this.$emit('logged')"/>
   </v-main>
</template>

<script>
import LoginForm from "@/components/LoginForm";
export default {
  name: "Login",
  components: {LoginForm},
}
</script>


<style scoped>
</style>