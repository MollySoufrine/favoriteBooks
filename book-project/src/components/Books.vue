<template>
<div class="books">
        <ul id="bookList">
        <li v-for="book in books" :key="book.title">
           {{book.title}} - {{book.author}}
        </li>
    </ul>
</div>
</template>


<script>
export default {
   
    data()
    {
        return{
        showBooks: true,

      books: [
        {
          title: "name of the wind",
          author: "patrick rothfuss",
          isFav: true,
        },
        {
          title: "the way of kings",
          author: "brandon snaderson",
          isFav: false,
        },
        {
          title: "the final empire",
          author: "brandon snaderson",
          isFav: true,
        },
      ],
 
    }
    },
    methods:{
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    toggleIsFav(book) {
      book.isFav = !book.isFav;
    },
  }

}
</script>