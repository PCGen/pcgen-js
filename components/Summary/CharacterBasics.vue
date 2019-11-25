<template>
  <div class="cards">

    <div class="card">
      <h6>Character Basics</h6>
      <label>Name:</label><button>Random</button> <b-form-input class="data"></b-form-input>
      <label>Type:</label> <b-form-input class="data"></b-form-input>
      <label>Player:</label> <b-form-input class="data"></b-form-input>
      <label>Tab Label:</label><b-form-input class="data"></b-form-input>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CharacterBasics'
}
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 120px auto;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
}

.main_title {
  grid-column: 1;
}
.titl {
  justify-self: start;
}
label {
  float: left;
  width: 200px;
  padding-right: 24px;
}

input {
  float: left;
  width: calc(100% - 200px);
}

button {
  float: right;
  width: calc(100% - 200px);
}

.cards {
  display: grid;
  /*grid-template-columns: repeat(3, 1fr);*/
  grid-template-columns: 400px 400px auto;
  grid-auto-rows: auto;
  grid-gap: 1rem;
}

.card {
  border-color: orangered;
  border: 2px solid #e7e7e7;
  border-radius: 4px;
  padding: .5rem;
}

.data {
  grid-column: -1
}
</style>
