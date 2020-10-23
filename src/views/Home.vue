<template >
    <v-main>
      <div class="titulo">
        <h1  class="tituloText">Arma tu rutina</h1>
        <v-btn depressed color="rgb(57, 198, 173)" x-large tile>ingresar</v-btn>
      </div>
    </v-main>
</template>

<script>

export default {
  name: "Home",
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
  background: transparent;
}
</style>