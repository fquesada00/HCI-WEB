<template>
  <v-card class="profile">
    <v-row>
      <v-icon class="gears">
        mdi-cog
      </v-icon>
    </v-row>
    <v-row justify="center">
      <v-avatar onmouseover="" style="border-style: solid; border-color:darkgrey;" size="150">
        <v-img draggable="false"
               :src="img">
        </v-img>
      </v-avatar>
    </v-row>
    <v-row class="px-5" justify="center">
      <span class="name text-center">{{ nombre + " " + apellido }}</span>
    </v-row>
    <v-row justify="center" class="py-3">
      <v-btn style="background-color:rgb(57, 198, 173)" width="70%">
        {{ rutinasCreadas + " Rutinas Creadas" }}
      </v-btn>
      <!--Se podria hacer con un v-for lo de los botones, despues vemos-->
    </v-row>
    <v-row justify="center" class="py-3">
      <v-btn style="background-color:rgb(57, 198, 173)" width="70%">{{ rutinasCompletadas + " Rutinas Completadas" }}
      </v-btn>
    </v-row>
    <v-row justify="center" class="py-3">
      <v-btn style="background-color:rgb(57, 198, 173)" width="70%">
        {{ rutinasFavoritas + " Rutinas Favoritas" }}
      </v-btn>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "ProfileCard",
  data: () => ({
    nombre: "Martin",
    apellido: "Sosa",
    rutinasCreadas: 20,
    rutinasCompletadas: 3,
    rutinasFavoritas: 3,
    img: "https://cdn.vuetifyjs.com/images/john.jpg"
  })
}
</script>

<style scoped>
.profile {
  height: 450px;
  width: 350px;
  background-color: white;
}

.name {
  font-size: 45px;
  font-weight: lighter;
}

.gears {
  margin-left: auto;
  padding-right: 5%;
  padding-top: 1%;
}
</style>