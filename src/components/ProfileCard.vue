<template>
    <v-card class="profile">
      <v-row>
        <v-col></v-col>
      </v-row>
      <v-row justify="center">
        <v-avatar @click="editAvatar" style="border-style: solid; border-color:darkgrey;" size="150">
          <v-img draggable="false"
                 :src="img" @load="viewImg">
          </v-img>
        </v-avatar>
      </v-row>
      <v-row class="px-5" justify="center">
        <span class="name text-center" @load="getName">{{ name }}</span>
      </v-row>
      <v-row justify="center" class="py-3">
        <v-btn style="background-color:rgb(57, 198, 173)" width="70%">
          {{ created + " Rutinas Creadas" }}
        </v-btn>
        <!--Se podria hacer con un v-for lo de los botones, despues vemos-->
      </v-row>
      <v-row justify="center" class="py-3">
        <v-btn style="background-color:rgb(57, 198, 173)" width="70%">{{ completed + " Rutinas Completadas" }}
        </v-btn>
      </v-row>
      <v-row justify="center" class="py-3">
        <v-btn style="background-color:rgb(57, 198, 173)" width="70%">
          {{ favourite + " Rutinas Favoritas" }}
        </v-btn>
      </v-row>
    </v-card>
</template>

<script>

export default {
  name: "ProfileCard",
  props: [
    'user',
    'id',
    'created',
    'completed',
    'favourite',
  ],
  data: () => ({
  }),
  methods:{
    viewImg: function (){
      return this.img
    },
    getName(){
      return this.name
    },
    toggleSettings(){
      this.$emit('showSettings')
    },
    editAvatar(){

    }
  },
  computed: {
    name: function (){
      return this.user.fullName
    },
    username: function (){
      return this.user.username
    },
    img: function (){
      let pic = this.user.avatarUrl
      if (pic) {
        return pic
      }
      return 'https://gravatar.com/avatar/97d784d2c73a6d9a5b0ea955a02df250?s=400&d=robohash&r=x'
    }
  }
}
</script>

<style scoped>
.profile {
  margin: auto;
  min-height: 450px;
  width: 350px;
  background-color: white;
}

.name {
  font-size: 45px;
  font-weight: lighter;
}
</style>