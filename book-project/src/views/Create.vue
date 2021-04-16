<template>
    <div class="create">
        <form @submit.prevent="handleSubmit">
            <label>Title: </label>
            <input v-model="title" type="title" required>
            <label>Author: </label>
            <input v-model="author" type="author" required>
            <label>Description</label>
            <textarea v-model="body" required></textarea>
            <button>Add Book</button>
        </form>
    </div>
</template>
<script>
import { ref } from "vue"
import { useRouter } from "vue-router"
import { projectFirestone } from "../firebase/config"

export default {
    setup() {
        const title = ref('')
        const author = ref('')
        const body = ref('')


        const handleSubmit = async () => {
         const book = {
            title: title.value,
            author: author.value,
            body: body.value
            }
            const res = await projectFirestore.collection('books').add(book)
            router.push({name: "Home"})
        }


 

        return {body, title, author, handleSubmit}

    },

}

</script>

<style>
form{
    max-width:100%;
    margin: 0 auto;
    text-align: left;
}
input, textarea{
    display:block;
    margin: 1.5rem 0 ;
    min-width:100%;
    box-sizing: border-box;
    padding:1rem;
    border:.2rem solid #eee;
}
textarea{
    min-height: 10rem;
}
label{
    display:inline-block;
    margin-top: 1.5rem;
    position: relative;
font-size: 1.3rem;
color:rgb(71, 68, 68);
margin-bottom:.5rem;
}
  label::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: #fd0388;
    position: absolute;
    z-index: -1;
    padding-right: 2rem;
    left: -1rem;
    transform: rotateZ(-1.5deg);
  }
  button{

      display:inline-block;
      margin:1.5rem;
      border:none;
      background: #888887;
    color: white;
    padding: 1rem 2rem;
    font-size: 1rem;
    border-radius:.4rem;
  }
  button:hover{
box-shadow: #fd0388 .2rem .2rem .3rem .3rem;
  }
</style>