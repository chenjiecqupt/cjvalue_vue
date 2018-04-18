<template>
  <div class="store1">
    <h1>{{msg}}</h1>
    <h1>{{ count }}</h1>
    <h1><input type="number" v-model="count"><button @click="setCount">设置count为{{count}}</button></h1>
    <button @click="add">+</button>
    <button @click="reduce">-</button>
    <p class="red-start">
      vuex测试1使用data数据，
      methods使用箭头函数时，在函数里面的this指向组件本身而不是Vue实例，故不能使用Vue实例上的全局变量或方法，如
      axios，vuex等；使用常规函数如：fn:function（）{}时,函数里面this指向Vue实例，可以使用全局变量或方法；
      如坚持使用箭头函数可用cmd模块方法引入对应的模块！（Vue版本：2.5.2，vuex版本：3.0.1）
    </p>
    <p class="red-start">
      在使用v-model时，若绑定计算属性，双向数据绑定没有生效；若将this.$store.state的数据放在data方法里，则在触发
      this.$store.commit('functionName')时，需要手动重新请求this.$store.state里的数据
    </p>
  </div>
</template>

<script>
  export default {
    name: 'store1',
    data() {
      return {
        msg: 'vuex测试1 data数据，双向数据绑定',
        count:this.$store.state.count
      }
    },
    computed: {
      /*count() {
        return this.$store.state.count;
      }*/
    },
    created:function () {
    },
    watch:{

    },
    methods: {
      setCount: function () {
        console.log({"count":parseInt(this.count)});
        this.$store.commit('setCount',{"count":parseInt(this.count)})
      },
      add: function () {
        this.$store.commit('increment');
        this.count = this.$store.state.count
      },
      reduce:function () {
        this.$store.commit('decrement');
        this.count = this.$store.state.count;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  p{
    text-align: left;
  }
  h1, h2 {
    font-weight: normal;
  }
</style>

