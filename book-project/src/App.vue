<template>
<h1>Welcome! Looking for a good book to read?</h1>
   <button @click="toggleModal">open modal</button>

    <Books  />
  <div v-if="showModal"> 
      <Modal :header="header" :text="text" @close="toggleModal"/>
  </div>

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
    //why pass props?...makes components more reusable because messages wont be hard coded inside modal
  },
  data(){
    return{
       addBook: true,
       header:"Add your favorite book to the list!",
       text:"Click here to add a book!",
      showModal:false,


    }
  },
  methods:{
    addBook(){
this.addBook = !this.addBook
    },
   
 toggleModal(){
   this.showModal = !this.showModal
 },

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
