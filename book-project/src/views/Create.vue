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

</style>