<template>
<div class="bookList" >
<div v-for="book in books" :key="book.id">
  <SingleBook :book="book"/>
</div>


</div>
</template>


<script>
import SingleBook from "./SingleBook"

export default {

props: ['books'],
components: {SingleBook},
setup(props){
console.log(props)
}


}
</script>
<style> 
.books body{
    background: #eee;
    max-width: 960px;
    margin: 20px auto;
  }
.books h3, ul{
    margin: 0;
    padding: 0;
  }
  .books li{
    list-style-type: none;
    background: #fff;
    margin: 1.5rem auto;
    padding: .8rem 1.5rem;
    border-radius: .5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .books li.fav{
    background: #fd0388;
    color: white;
  }
 
.dark li.fav{
    background: rgb(37, 35, 35);
  }
</style>