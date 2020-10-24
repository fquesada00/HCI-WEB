<template>
  <v-container class="form">
    <v-row class="justify-center">
      <h1>Crear Ejercicio</h1>
    </v-row>
    <v-row>
      <v-text-field
          label="Nombre del Ejercicio"
          v-model="name">
      </v-text-field>
    </v-row>
    <v-row>
      <v-textarea
          label="Informacion Adicional"
          v-model="detail"
      ></v-textarea>
    </v-row>
    <v-row>
      <v-col>
        <v-text-field
            type="number"
            placeholder="0"
            label="Repetitions"
            prefix="#"
            dense
        ></v-text-field>
      </v-col>
      <v-col>
        <v-text-field
            type="number"
            placeholder="0"
            label="Duration"
            suffix="s"
            dense
        ></v-text-field>
      </v-col>
      <v-col>
        <v-select
            :items="categorias"
            label="Categoria"
            dense
        ></v-select>
      </v-col>
    </v-row>
    <v-row>
      <v-text-field @change="show = isVideo(vid)"
                    label="Video (opcional)"
                    :v-model="vid">
      </v-text-field>
    </v-row>
    <v-row v-if="show">
      <iframe width="560" height="315" :src="vid" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "CreateExercise",
  data: () => ({
    name: "",
    detail: "",
    type: "exercise",
    duration: "",
    repetitions: "",
    categoria: "",
    categorias: ["Brazos", "Piernas", "Pecho", "Abs"],
    vid: "",
    show: false
  }),

  computed: {
    video: function () {
      return this.vid != null
    },
    isVideo : function(youtube){
      return youtube === /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w-]+\?v=|embed\/|v\/)?)([\w-]+)(\S+)?$/
    }
  }
}
</script>

<style scoped>
.form {
  border-radius: 40px;
  background-color: white;
  justify-self: center;
  align-self: center;
  padding-left: 4%;
  padding-right: 4%;
  padding-top: 1%;
  margin-top: 2%;
  max-width: 600px;
}
</style>