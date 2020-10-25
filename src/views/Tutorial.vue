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
        text: "Selecciona los ejercicios haciendo click y arrastrandolos hacia la respectiva seccion de la rutina."
      },
      {
        title: "Paso 2", subtitle: "Crear un nuevo ciclo",
        text: "Pulsa el Boton + para crear un nuevo ciclo"
      },
      {
        title: "Paso 3", subtitle: "Organiza tu rutina",
        text: "Organiza y edita tanto tus ciclos como tus ejercicios"
      },
      {
        title: "¡Listo!", subtitle: "Comenza a armar tu rutina",
        text: "Organiza tu rutina, modifica los ciclos y reordena tus ejercicios."
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