<template>
  <div>
    <v-card width="240" class="box" height="110">
      <v-card-title>{{ text }}</v-card-title>
      <v-divider></v-divider>
      <v-row no-gutters>
        <v-col v-for="n in 3" :key="n" cols="12" sm="4">
          <v-card outlined tile v-show="n == 1">
            {{ cantidad }}
          </v-card>
          <v-btn v-show="n == 2">hola</v-btn>
          <v-btn v-show="n == 3">chau</v-btn>
        </v-col>
      </v-row>
    </v-card>
    <v-container class="b">
      <p>{{cantidad}}</p>
      <v-btn>hola</v-btn>
          <v-btn>chau</v-btn>
    </v-container>
  </div>
  <!-- <v-card width="400">
    <v-card flat>
      <v-card-text v-text="text"></v-card-text>
    </v-card>
    <v-divider dark="true"></v-divider>
    <div>
      <v-container>
        <v-row :align="align" no-gutters style="height: 150px">
          <v-col v-for="n in 3" :key="n">
            <v-card class="pa-2" outlined tile> hola </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
     <v-row>
      <v-col v-for="n in botones" v-bind:key="n">
        <v-btn depressed>
          {{n}}
        </v-btn>
        <v-divider v-show="n != botones[2]" vertical ='true'></v-divider>
      </v-col>
    </v-row>
    <v-btn-toggle v-model="toggle_one">
      <v-flex>
      <v-btn>{{hola}}
      </v-btn>
      </v-flex>
      <v-flex class="text-xs-center">
      <v-btn>{{chau}}
      </v-btn>
      </v-flex>
      <v-flex class="text-xs-right">
      <v-btn>{{devuelta}}
      </v-btn>
      </v-flex>

    </v-btn-toggle>
  </v-card> -->
</template>

<script>
export default {
  name: "Exercice_box.vue",
  data() {
    return {
      text: "NOMBRE EJERCICIO".slice(0, 40), //es un aprox, cambiar
      alignments: ["start", "center", "end"],
      botones: ["gaston", "me", "harta"],
      cantidad: "CANTIDAD",
    };
  },
};
</script>

<style scoped>
.box {
  position: absolute;
  top: 100px;
  left: 100px;
};
.b{
  position: absolute;
  top: 300px;
  left: 300px;
}
</style>