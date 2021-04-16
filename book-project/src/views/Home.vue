<template>
  <div class="home">
    <div v-if="error">{{error}}</div>
    <div v-if="books" class="layout">
<Books :books="books"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { ref } from 'vue'
import getBooks from "../composables/getBooks"

import Books from "../components/Books"

export default {
  name: 'Home',
  components: {
    Books
  },
  setup(){
    const {books, error, load} = getBooks()

    load()

    return {books, error}
  }
}
</script>
<style>
  .home {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
  }
  .layout {
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 20px;
  }
</style>