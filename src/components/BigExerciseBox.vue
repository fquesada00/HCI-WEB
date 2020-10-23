<template>
  <div class="big-exercise-box">
    <v-container>
      
    </v-container>
  </div>

  <!-- <v-container class="blue" style="width: 25%">
    <v-row class="green" no-gutters align-content-between->
      <v-col class="d-flex"
        cols="auto"
        lg="auto"
        xl="auto"
        md="auto"
        xs="auto"
        style="margin-left: 0%; width: 70%; height: 50px"
      >
        <span style="font-size: 20px">
          {{ seccion_name }}
        </span></v-col
      >
      <v-container class="purple" style="margin-left:0%;width:70%; height:50px;">
          <span style="font-size:20px;">
            {{ seccion_name }}
          </span>
        </v-container>
      <v-col
        cols="auto"
        lg="auto"
        xl="auto"
        md="auto"
        xs="auto"
        class="red"
        style="margin-left: 0%; width: 17%; height: 50px"
      >
        <v-text-field
          prefix="#"
          placeholder="0"
          type="number"
          solo
          :rules="[verify]"
        ></v-text-field>
      </v-col>
      <v-container class="yellow" style="width: 22%; margin-top:-10px;"
          ><v-text-field
            prefix="#"
            placeholder="0"
            type="number"
            solo
            :rules="[verify]"
          ></v-text-field
        ></v-container>
    </v-row>
  </v-container> -->
</template>

<script>
export default {
  name: "big_exercise_box",
  props: ["seccion_name"],
  data() {
    return {
      reps: "",
    };
  },
  methods: {
    print() {
      console.log(this.seccion_name);
    },
    verify(v) {
      if (!v.trim()) return true;
      if (!isNaN(parseFloat(v)) && v >= 0 && v <= 99) {
        this.reps = v;
        return true;
      }
      return "Number has to be between 0 and 99";
    },
  },
};
</script>
<style scoped>
</style>