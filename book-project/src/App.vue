<template>

<Navbar/>
  <router-view />

</template>
<script>

import Navbar from "./components/Navbar"

export default {
  components:{ Navbar }
    
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #ff9ed2;
}

</style>
