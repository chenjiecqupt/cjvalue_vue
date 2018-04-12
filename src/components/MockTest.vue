<template>
    <div class="hello">
        <h1>{{ data }}</h1>
    </div>
</template>

<script>
    export default {
      name: 'hello',
      data() {
          return {
              data:[]
          }
      },
      mounted: function () {
        this.$axios.get('/api/data').then(res=>{
          this.data = res.data.data;
          console.log(res);
        })
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }
</style>

