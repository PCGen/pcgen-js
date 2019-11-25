<template>
  <div class="wrapper">
    <nuxt />
  </div>
</template>

<style>
/*html {*/
/*  display: grid;*/
/*  width: 100vw;*/
/*  height: 100vh;*/
/*  padding: 0;*/
/*  margin: 0;*/
/*  grid-template-columns: auto;*/
/*}*/

/*html {*/
/*  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',*/
/*    Roboto, 'Helvetica Neue', Arial, sans-serif;*/
/*  font-size: 16px;*/
/*  word-spacing: 1px;*/
/*  !*-ms-text-size-adjust: 100%;*!*/
/*  !*-webkit-text-size-adjust: 100%;*!*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  box-sizing: border-box;*/
/*}*/

/**,*/
/**:before,*/
/**:after {*/
/*  box-sizing: border-box;*/
/*  margin: 0;*/
/*}*/

/*.button--green {*/
/*  display: inline-block;*/
/*  border-radius: 4px;*/
/*  border: 1px solid #3b8070;*/
/*  color: #3b8070;*/
/*  text-decoration: none;*/
/*  padding: 10px 30px;*/
/*}*/

/*.button--green:hover {*/
/*  color: #fff;*/
/*  background-color: #3b8070;*/
/*}*/

/*.button--grey {*/
/*  display: inline-block;*/
/*  border-radius: 4px;*/
/*  border: 1px solid #35495e;*/
/*  color: #35495e;*/
/*  text-decoration: none;*/
/*  padding: 10px 30px;*/
/*  margin-left: 15px;*/
/*}*/

/*.button--grey:hover {*/
/*  color: #fff;*/
/*  background-color: #35495e;*/
/*}*/

.wrapper {
  display: grid;
  border-style: solid;
  border-color: red;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 10px;
  width: 100vw;
  height: 100vh;
  background-color: whitesmoke;
}
</style>
