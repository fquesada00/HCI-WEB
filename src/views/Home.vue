<template >
  <v-container v-if="!logged">
      <div class="titulo">
        <h1  class="tituloText">Arma tu rutina</h1>
      </div>
  </v-container>
  <v-container v-else>

  </v-container>
</template>

<script>

import {bus} from "../main";

export default {
  name: "Home",
  data() {
    return {
      logged:false
    }
  },
  mounted() {
    bus.$on('logged',()=>{
      this.logged = true
    })
  }
}
</script>
<style>
.titulo{
  margin-top: 15%;
  text-align: center;
}
.tituloText{
  color:white;
  font-size:120px;
  text-transform:uppercase;
  background: transparent;
}
</style>