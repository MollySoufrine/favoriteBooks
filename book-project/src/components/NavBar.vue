<template>
<header>
    <h1>The Book List</h1>
      <nav>
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <router-link :to="{ name: 'Create' }">Create Post</router-link>
    </nav>

</header>
</template>

<script>


export default {

}
</script>
<style>

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 100%;
    margin: 0 auto;
    padding: .5rem;
  }
  header h1 {
    color: #fff;
    font-size: 3rem;

  }
  header a {
    color: rgb(80, 78, 78);
    text-decoration: none;
    margin-left: 1.5rem;
  }
  header a.router-link-active {
       color: #fff;
    font-weight: bold;
  }
</style>
