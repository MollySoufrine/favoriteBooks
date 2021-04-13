<template>
<div class="bookList" >
<div v-for="book in books" :key="book.id">
  <SingleBook :book="book"/>
</div>


</div>
</template>


<script>
export default {

props: ['books'],
components: {SingleBook},
setup(props){
console.llog(props)
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
    background: #ff9ed2;
    color: white;
  }
  .books img{
  width:5.5rem;
  height:5.5rem;

  }
.dark li.fav{
    background: rgb(37, 35, 35);
  }
</style>