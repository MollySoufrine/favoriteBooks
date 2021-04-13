<template>
  <div v-if="error">
   {{error}}
  </div>
  <div v-if="book" class="book">
    <h3>{{book.title}}</h3>
    <p class="pre">{{book.body}}</p>
  </div>
</template>
<script>
import getBook from "@/composables/getBook"
import {useRoute} from 'vue-router'

export default ({
  props:['id'],

  setup(props) {
    const route = useRoute()

    const {error, book} = getBook(route.params.id)
    
    load()

    return {error, book}
  },
})
</script>
