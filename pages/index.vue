<template>
  <div class="container">
    <b-tabs content-class="mt-3">
      <b-tab title="Summary" active>
        <Summary />
      </b-tab>
      <b-tab title="Ancestry" disabled>
        <p>I'm the second tab</p>
      </b-tab>
      <b-tab title="Templates" disabled>
        <p>I'm a disabled tab!</p>
      </b-tab>
      <b-tab title="Class">
        <Classes />
      </b-tab>
      <b-tab title="Feats & Abilities" disabled>
        <p>I'm a disabled tab!</p>
      </b-tab>
      <b-tab title="Domains" disabled>
        <p>I'm a disabled tab!</p>
      </b-tab>
      <b-tab title="Spells" disabled>
        <p>I'm a disabled tab!</p>
      </b-tab>
      <b-tab title="Inventory" disabled>
        <p>I'm a disabled tab!</p>
      </b-tab>
      <b-tab title="Description" disabled>
        <p>I'm a disabled tab!</p>
      </b-tab>
      <b-tab title="Temporary Bonuses" disabled>
        <p>I'm a disabled tab!</p>
      </b-tab>
      <b-tab title="Companions" disabled>
        <p>I'm a disabled tab!</p>
      </b-tab>
      <b-tab title="Character Sheet" disabled>
        <p>I'm a disabled tab!</p>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Summary from './Summary'
import Classes from './Classes'

export default {
  components: { Classes, Summary },
  // components: {
  //
  // },
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
  margin: 0 auto;
  min-height: 100vh;
  display: grid;
  /*justify-content: center;*/
  /*align-items: center;*/
  /*text-align: center;*/
  width: 100vw;
  height: 100vh;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
