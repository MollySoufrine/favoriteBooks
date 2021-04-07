<template>
<h1>Add to the list of favorite books!</h1>

    <Books />
    <Modal/>
   
</template>

<script>
import Books from './components/Books'
import Modal from "./components/Modal"

export default {
  name: 'App',
  components: {
    //registering that we want to use our components inside App.vue
    Modal,
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
