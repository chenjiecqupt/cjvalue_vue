<template>
    <div id="CptCounter">
      <cpt-counter :counter=1></cpt-counter>
      <cpt-counter :counter=10></cpt-counter>
      <cpt-counter></cpt-counter>
      <p>
        vue组件内部双向绑定，组件之间单向绑定，所以props里面的数据为只读属性，和react一样，不能直接改变props里面的数据，否则报错
      </p>
      <pre>
        可在:
        data:function(){
          return{
            counter_cope:this.counter
          }
        }
        然后操作cope的值
      </pre>
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

