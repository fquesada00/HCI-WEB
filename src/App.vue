<template>
  <v-app>
    <BackgroundImage/>
     <Header ></Header>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Header from '@/components/Header.vue'
import BackgroundImage from "./components/BackgroundImage";
export default {
  name: 'App',
  components: { Header,BackgroundImage},
};
</script>
