<template >
  <v-app>
    <BackgroundImage/>
    <Header/>
    <v-main>
      <div class="titulo">
        <h1  class="tituloText">Arma tu rutina</h1>
        <v-btn depressed color="rgb(57, 198, 173)" x-large tile>ingresar</v-btn>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import Header from "../components/Header.vue"
import BackgroundImage from "@/components/BackgroundImage";

export default {
  name: "Home",
  components: {Header,BackgroundImage},
  data() {
    return {}
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
}
</style>