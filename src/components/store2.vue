<template>
  <div class="store2">
    <h1>{{msg}}</h1>
    <h1>{{ count }}</h1>
    <button @click="add">+</button>
    <button @click="reduce">-</button>
    <p>
      vuex测试2使用计算属性，count(){return this.$store.state.count;}，当触发this.$store.commit()方法时，
      计算属性会自动计算this.$store.state的数据，不需手动请求state数据，但无法进行双向数据绑定
    </p>
  </div>
</template>

<script>
export default {
  name: 'store2',
  data() {
    return {
      msg: 'vuex测试2   计算属性'
    }
  },
  computed:{
    count(){
      return this.$store.state.count;
    }
  },
  methods:{
    add:function () {
      this.$store.commit('increment')
    },
    reduce:function () {
      this.$store.commit('decrement')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
</style>

