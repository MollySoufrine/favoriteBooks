<template>
    <div class="backdrop">
        <div class="modal">
            <p>modal content</p>
         </div>
    </div>

</template>

<style>
.modal{
width:10rem;
padding:2rem;
margin:2rem auto;
background: white;
border-radius: .5rem;
}
.backdrop{
    top:0;
    position:fixed;
    width:100%;
    height:100%;
    background: rgba(0,0,0,0.5);
}
</style>
