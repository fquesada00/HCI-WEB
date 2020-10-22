<template>
  <div v-show=do_display>
    <v-card class="white ma-3" width="268" height="101" tile hover>
      <div class="pa-3">
        <span class="black--text body-1">holaaa</span>
      </div>
      <v-divider></v-divider>
      <v-row class="ma-0">
        <div class="mx-7 text-center pt-3">
          <span class="black-text text-center">{{ cant }}</span>
        </div>
        <v-divider vertical></v-divider>
        <div>
          <v-btn x-large text tile><v-icon color="black">create</v-icon></v-btn>
        </div>
        <v-divider vertical></v-divider>
        <div>
          <v-btn x-large tile text
            ><v-icon @click="remove" color="red">remove_circle_outline</v-icon></v-btn
          >
        </div>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
    props: ["ej"],
  data() {
    return {
      cant: "x20",
      do_display: true,
    };
  },
  methods: {
      remove(){
          this.do_display = !this.do_display;
          this.$emit("reduceQty", "ej");
      },
  },
};
</script>
<style scoped>
</style>