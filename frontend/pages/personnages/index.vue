<template>
  <div class="container">
    <div class="left">
     <v-card class="elevation-10" style="flex: 0 1 400px">
      <v-card-title class="headline">Personnages</v-card-title>
      <v-card-text>
        <v-form @submit.prevent="addAll">
          <v-btn type="submit" >charger1</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
     <v-btn @click="addAll">Charger</v-btn>
      <h2><nuxt-link to="/">Players</nuxt-link></h2>
      <ul class="players">
        <li>test</li>
        <li v-for="perso in persos" :key="perso.id">
          <span>{{ perso.nom }} {{ perso.type }} </span>
        </li>
        <li v-for="perso in persos" :key="perso.id">
          <nuxt-link :to="'/personnages/'+perso.id">{{ perso.nom }} {{ perso.type }} </nuxt-link>
        </li>
      </ul>
    </div>
    <div class="right">
     Liens
      <nuxt-child :key="$route.params.id"/>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    persos () {
      return this.$store.state.perso.persos
    }
  },
  methods: {
    addAll () {
      this.$store.dispatch('perso/addAll').then(persos => {
        console.log('Perso chargé dans le store', persos.data.persos)
        console.log('affichage', persos.data.persos[0])
        console.log(this.$store)
      })
    }
  }
  /*  mounted: {
    persos () {
      return this.$store.getters.allPersos
    }
  } */
}
</script>

<style scoped>
.page-enter-active, .page-leave-active {
  transition: opacity .4s, transform .4s;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  opacity: 1;
}
.page-enter, .page-leave-active {
  opacity: 0.5;
  transform: rotateY(100deg);
}
.container {
  width: 100%;
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  box-sizing: border-box;
}
.left {
  width: 50%;
  /*position: absolute;*/
  top: 0;
  left: 0;
  border: 1 solid red;
  padding-left: 600px;
  padding-top: 100px;
}
.right {
  width: 50%;
  /*position: absolute;*/
  top: 0;
  right: 0;
}
.players {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.players li a {
  display: block;
  border: 1px #ddd solid;
  padding: 10px;
  text-align: left;
  color: #222;
  text-decoration: none;
}
.players li a:hover {
  color: orange;
}
</style>