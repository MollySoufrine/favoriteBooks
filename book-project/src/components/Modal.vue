<template>
    <div class="backdrop" @click.self="closeModal">
      <!-- restrict close toggle to just backdrop and not child, can add
      a modifier toan event -->
        <div class="modal" >
          <slot></slot>
          <!-- //slots are used for passing templates to reusable components -->
         
         </div>
    </div>

</template>

<script>


export default {

  methods:{
closeModal(){
  this.$emit('close')
}
  }
}

</script>



<style src="../assets/modal.css">

</style>
