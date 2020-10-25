<template>
  <v-container v-if="!logeado"></v-container>
  <CreateExercise v-else/>
</template>

<script>
import CreateExercise from "@/components/CreateExercise";

export default {
  name: "NewExercise",
  components: {CreateExercise},
  computed:{
    logeado:()=>{
      console.log(sessionStorage.getItem('token'))
      return !!sessionStorage.getItem('token')
    }
  }
}
</script>

<style scoped>

</style>