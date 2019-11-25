<template>
  <div class="container">
    <MenuBar />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import MenuBar from '../components/MenuBar'

export default {
  components: { MenuBar },
  computed: {
    counter () {
      return this.$store.state.counter
    }
  },
  methods: {
    ...mapGetters({
      theClasses: 'classes/get'
    })
  }
}
</script>

<style>
.container {
  /*margin: 0 auto;*/
  /*min-height: 100vh;*/
  display: grid;
  /*justify-content: center;*/
  /*align-items: center;*/
  /*text-align: center;*/
  width: 100vw;
  height: 100vh;
  /*background-color: whitesmoke;*/
  /*grid-template-rows: repeat(12, 1fr);*/
  align-items: stretch;
  grid-template-areas:
    "title title title"
    "main main main"
    "footer footer footer";
  /*box-sizing: content-box;*/
  /*grid-template-columns: auto;*/
  /*grid-column-start: initial;*/
  /*justify-content: start;*/
}

/*.subtitle {*/
/*  font-weight: 300;*/
/*  font-size: 42px;*/
/*  color: #526488;*/
/*  word-spacing: 5px;*/
/*  padding-bottom: 15px;*/
/*}*/

/*.links {*/
/*  padding-top: 15px;*/
/*}*/
</style>
