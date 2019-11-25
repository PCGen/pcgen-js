<template>
  <div class="title">
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
import Classes from '../components/Classes'
import Summary from '../components/Summary'
export default {
  name: 'MenuBar',
  components: { Classes, Summary }
}
</script>

<style scoped>
  .title {
    color: #35495e;
    letter-spacing: 1px;
    width: 100vw;
    height: 100vh;
    grid-column-start: 1;
    grid-column-end: 3;
  }
</style>
