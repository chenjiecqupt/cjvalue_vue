<template>
    <div id="CptCounter">
      <cpt-counter :counter=1></cpt-counter>
      <cpt-counter :counter=10></cpt-counter>
      <cpt-counter></cpt-counter>
    </div>
</template>

<script>
  export default ({
    /*name:'#cpt-counter',*/
    data:function () {
      return {
        counter:2
      }
    }
  })
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

