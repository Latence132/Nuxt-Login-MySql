<template>
  <div class="player">
    <h1>{{ perso.nom }}</h1>
    <h2>{{ perso.type }}</h2>
     {{perso.degats}}, {{perso.timeEndormi}} 
    <nuxt-link :to="'/personnages/personnages/'">Retour</nuxt-link>
   
  </div>
</template>

<script>
export default {
  validate ({ params }) {
    return !isNaN(+params.id)
  },
  computed: {
    perso () {
      console.log('appel du perso :' + this.$route.params.id)
      return this.$store.state.perso.persos[this.$route.params.id - 1]
    }
  },
  head () {
    return {
      title: 'this.perso.nom'
    }
  }
}
</script>

<style scoped>
.player {
  text-align: center;
  margin-top: 100px;
  font-family: sans-serif;
}
</style>