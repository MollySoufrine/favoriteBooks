<template>
  <div class="home">
    <div v-if="error">{{error}}</div>
    <div v-if="books.length" class="layout">
<Books :books="books"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { ref } from 'vue'

export default {
  name: 'Home',
  components: {
    Books
  },
  setup(){
    const {books} = getBooks()
    load()
    return{books, error}
  }
}
</script>
