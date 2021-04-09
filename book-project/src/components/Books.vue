<template>
<div class="books" >
        <ul id="bookList" >
        <li v-for="book in books" :key="book.title" :class="{fav: book.isFav}" @click="toggleIsFav(book)">
            <img :src="book.src" :alt="book.title">
      <h3>     {{book.title}} </h3>
      <p> {{book.author}}</p>
        </li>
    </ul>

</div>
</template>


<script>
export default {

    data()
    {
        return{
       

      books: [
        {
          title: "The Iron Druid Chronicles",
          author: "Kevin Hearne",
          isFav: true,
          src: require("../assets/images/druid.jpg")
        },
        {
          title: "The Inheritance Cycle",
          author: "Christopher Paolini",
          isFav: true,
          src: require("../assets/images/eragon.jpg")
        },
        {
          title: "Enders Game",
          author: "Orson Scott Card",
          isFav: true,
            src: require("../assets/images/ender.jpg")
        },
                {
          title: "The Lies of Locke Lamora",
          author: "Scott Lynch",
          isFav: true,
            src: require("../assets/images/locke.jpg")
        },
    
      ],
 
    }
    },
    methods:{
 
    toggleIsFav(book) {
      book.isFav = !book.isFav;
    },
  },


}
</script>
<style scoped src="../assets/books.css">  </style>