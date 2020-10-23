<template>
  <v-container>
    <v-card width="600" height="400" style="border-radius: 10px">
      <v-row class="ma-0" style="height: 83px"
      >
        <v-col class="d-flex" cols="6" sm="6" lg="6" style="height: 83px">
          <div class="mb-10">
            <v-select
                color="black"
                class="categorias"
                :items="items"
                filled
                solo
                label="Categorías"
                background-color="teal accent-4"
                style="border-radius: 10px"
                @input="selectExer"
            ></v-select>
          </div>
        </v-col>
        <v-col class="d-flex" cols="6" sm="6" lg="6">
          <v-spacer></v-spacer>
          <div class="mb-12">
            <v-text-field
                class="busqueda"
                placeholder="Búsqueda"
                filled
                dense
                height="55"
                width="10"
                solo
                background-color="teal accent-4"
                elevation-1
                style="border-radius: 10px"
            ></v-text-field>
          </div>
        </v-col>
      </v-row>
      <v-card class="purple" width="100%" height="100%">

          <div v-for="item in samples" :key="item.grupo" class="yellow">
            <v-row class="red" v-if="item.show">
              <v-col cols="auto" v-for="exer in item.ejs" :key="exer">
                <v-card>
                  <v-img
                      class="align-baseline"
                      :src="exer.img"
                      height="160px"
                      width="150px"
                  >
                    <v-container
                        fluid
                        class="justify-center"
                        style="background-color: white; opacity: 0.6"
                    >
                      {{ exer.nombre }}
                    </v-container>
                  </v-img>
                </v-card>
              </v-col>
            </v-row>

          </div>
      </v-card>
      <!-- <v-card-actions class="red">
          <div v-for="item in samples" :key="item.grupo" class="yellow">
            <v-row v-if="item.show">
              <v-col cols="auto" v-for="exer in item.ejs" :key="exer">
                <v-card height="160px" width="150px">
                  <v-img
                    class="align-baseline"
                    :src="exer.img"
                    height="160px"
                    width="150px"
                  >
                    <v-container
                      fluid
                      class="justify-center"
                      style="background-color: white; opacity: 0.6"
                    >
                      {{ exer.nombre }}
                    </v-container>
                  </v-img>
                </v-card>
              </v-col>
            </v-row>
          </div>
      </v-card-actions> -->
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "DisplayExercises",
  data: () => ({
    items: ["Espalda", "Biceps", "Hombros", "Pecho", "Triceps", "Piernas"],
    busqueda: "",
    samples: [
      {
        grupo: "Espalda",
        show: false,
        ejs: [
          {
            nombre: "Espalda al pecho",
            img: "https://cdn.vuetifyjs.com/images/john.jpg",
          },
          {
            nombre: "Biceps Alternado",
            img: "https://cdn.vuetifyjs.com/images/john.jpg",
          },
          {
            nombre: "Biceps Conjuntos",
            img: "https://cdn.vuetifyjs.com/images/john.jpg",
          },
          {
            nombre: "Espalda al pecho",
            img: "https://cdn.vuetifyjs.com/images/john.jpg",
          },
          {
            nombre: "Biceps Alternado",
            img: "https://cdn.vuetifyjs.com/images/john.jpg",
          },
          {
            nombre: "Biceps Conjuntos",
            img: "https://cdn.vuetifyjs.com/images/john.jpg",
          },
          {
            nombre: "Biceps Conjuntos",
            img: "https://cdn.vuetifyjs.com/images/john.jpg",
          },
        ],
      },
      {
        grupo: "Biceps",
        show: false,
        ejs: [
          {
            nombre: "Biceps al pecho",
            img: "https://cdn.vuetifyjs.com/images/john.jpg",
          },
          {
            nombre: "Biceps Alternado",
            img: "https://cdn.vuetifyjs.com/images/john.jpg",
          },
          {
            nombre: "Biceps Conjuntos",
            img: "https://cdn.vuetifyjs.com/images/john.jpg",
          },
        ],
      },
      {
        grupo: "Hombros",
        show: false,
        ejs: [
          {
            nombre: "Hombros al pecho",
            img: "https://cdn.vuetifyjs.com/images/john.jpg",
          },
          {
            nombre: "Biceps Alternado",
            img: "https://cdn.vuetifyjs.com/images/john.jpg",
          },
          {
            nombre: "Biceps Conjuntos",
            img: "https://cdn.vuetifyjs.com/images/john.jpg",
          },
        ],
      },
      {
        grupo: "Pecho",
        show: false,
        ejs: [
          {
            nombre: "Pecho al pecho",
            img: "https://cdn.vuetifyjs.com/images/john.jpg",
          },
          {
            nombre: "Biceps Alternado",
            img: "https://cdn.vuetifyjs.com/images/john.jpg",
          },
          {
            nombre: "Biceps Conjuntos",
            img: "https://cdn.vuetifyjs.com/images/john.jpg",
          },
        ],
      },
      {
        grupo: "Triceps",
        show: false,
        ejs: [
          {
            nombre: "Triceps al pecho",
            img: "https://cdn.vuetifyjs.com/images/john.jpg",
          },
          {
            nombre: "Biceps Alternado",
            img: "https://cdn.vuetifyjs.com/images/john.jpg",
          },
          {
            nombre: "Biceps Conjuntos",
            img: "https://cdn.vuetifyjs.com/images/john.jpg",
          },
        ],
      },
      {
        grupo: "Piernas",
        show: false,
        ejs: [
          {
            nombre: "Piernas al pecho",
            img: "https://cdn.vuetifyjs.com/images/john.jpg",
          },
          {
            nombre: "Biceps Alternado",
            img: "https://cdn.vuetifyjs.com/images/john.jpg",
          },
          {
            nombre: "Biceps Conjuntos",
            img: "https://cdn.vuetifyjs.com/images/john.jpg",
          },
        ],
      },
    ],
    active: null,
  }),
  methods: {
    selectExer(event) {
      if (this.active != null) {
        //buscar el elemento previo y setearlo en null
        this.samples.find((e) => e.grupo == this.active).show = false;
      }
      this.active = event;
      //actualizar al nuevo elemento
      this.samples.find((e) => e.grupo == event).show = true;
    },
  },
};
</script>

<style scoped>
.categorias {
  width: 200px;
  margin-bottom: -20px;
}

.divisor {
  margin-top: -50px;
}

.busqueda {
  width: 200px;
  height: 10px;
}

.v-text-field >>> input {
  font-size: 1.16em;
}

.v-select {
  font-size: 1.2em;
}

.v-select >>> label {
  font-size: 0.99em;
}

.v-select__selection {
  max-width: 90%;
  height: 90px;
}
</style>
