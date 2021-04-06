<template>
<h1>Add to the list of favorite books!</h1>

    <Books />

</template>

<script>
import Books from './components/Books'

export default {
  name: 'App',
  components: {
    Books
  },
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
