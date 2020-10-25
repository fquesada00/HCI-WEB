<template>
    <v-main>
      <v-carousel  :show-arrows="true" class="tutorial">
        <v-carousel-item v-for="slide in tutorialSlides" v-bind:key="slide.title" >
          <h1 style="margin-left:5%;" class="black--text">{{ slide.title }}</h1>
          <hr/>
          <br/>
          <h2 style="margin-left:5%;" class="black--text">{{ slide.subtitle }}</h2>
          <br/>
          <p style="margin-left:5%;" class="black--text">{{ slide.text }}</p>
          <v-container ><!--Aca va la animacion! !--></v-container>
          <v-btn style="margin-left:50%;" color="orange" to="/rutinas">Omitir</v-btn>
        </v-carousel-item>
      </v-carousel>
    </v-main>
</template>

<script>

export default {
  name: "Tutorial",
  data: () => ({
    tutorialSlides: [
      {
        title: "Paso 1", subtitle: "Selecciona los Ejercicios",
        text: "Seleccione una categorìa de ejercicios, luego apriete 'agregar' en el ejercicio que desa agregar."
      },
      {
        title: "Paso 2", subtitle: "Crear un nuevo ciclo",
        text: "Para agregar un cicle, escriba el nombre que le quiere poner y clickee en 'agregar ciclo'"
      },
      {
        title: "Paso 3", subtitle: "Revisa tu rutina",
        text: "Confirma que tu rutina este armada a tu placer y Finalizala"
      },
      {
        title: "¡Listo!", subtitle: "Comenza a armar tu rutina",
        text: "¡Crea tu rutina!"
      }
    ]
  })
}
</script>


<style scoped>
.tutorial {
  border-radius: 40px;
  background-color: white;
  z-index: 1;
  margin-left: auto;
  margin-right:auto;
  margin-top: 8%;
  height: 5%;
  width: 600px;
}

</style>