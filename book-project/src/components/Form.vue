<template>
  <form>
      <label>Title:</label>
      <input type="text" required>
  </form>
</template>

<script>
export default {

}
</script>

<style>
form{
    max-width:100%;
    margin:2rem auto;
    background: #eee;
    text-align: left;
    padding:2rem;
    border: rgb(206, 202, 202) solid .1rem;
    border-radius:.5rem;
}
label{
    color:#aaa;
    display: inline-block;
    margin:1rem 0 .5rem;
    font: .6em;
    text-transform: uppercase;
    letter-spacing: .5rem;
    font-weight:bold;
}
input{
    display:block;
    padding:.5rem 1rem;
    width:100%;
    box-sizing:border-box;
    border:none;
    border-bottom: .5rem solid #ddd;
    color:#555;

}
</style>
