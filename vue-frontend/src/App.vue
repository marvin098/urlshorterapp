<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <b-container>
        <UrlField/>
    </b-container>
  </div>
</template>

<script>
import UrlField from './components/UrlField/UrlField.vue'

export default {
  name: 'App',
  components: {
    UrlField
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
