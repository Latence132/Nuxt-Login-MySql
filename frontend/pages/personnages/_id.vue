<template>
  <div class="player">
    <h1>{{ nom }}</h1>
    <h2>{{ type }}</h2>
    <v-btn @click="perso"> click</v-btn>
    {{perso}}
  </div>
</template>

<script>
export default {
  validate ({ params }) {
    return !isNaN(+params.id)
  },
  data () {
    return {
      perso: Object
    }
  },
  cumputed: {
    perso: {
      set: function ({ params }) {
        console.log(this.$store.state.perso.persos[params.id])
        this.perso = this.$store.state.perso.persos[params.id]
      },
      get: function () {
        console.log(this.perso)
        return this.perso
      }
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