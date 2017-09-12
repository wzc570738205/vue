<template>
  <div id="app">
    <v-header></v-header>
    <img src="./assets/logo.png">
   
  </div>
</template>

<script>
import Header from "./components/header.vue";

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    "v-header":Header
  }
}
</script>

<style>

</style>
