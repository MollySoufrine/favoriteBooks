<template>
    <div class="backdrop" @click="closeModal">
        <div class="modal" >
            <h1>{{header}}</h1>
            <button>{{text}}</button>
         </div>
    </div>

</template>

<script>


export default {
  props: ['header', 'text'],
  methods:{
closeModal(){
  this.$emit('close')
}
  }
}

</script>



<style src="../assets/modal.css">

</style>
