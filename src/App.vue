<template>
  <div>
    <section class="left">
      <ul>
        <li v-for="router in routerArr" v-bind:title=router.component @click="clickRouter(router.path)">
          {{router.name}}
        </li>
      </ul>
    </section>
    <div id="app">
      <router-view/>
    </div>
  </div>
</template>

<script>
import routerArr from './assets/RouterObj';
console.log(routerArr);
export default {
  name: 'App',
  data:function(){
    return {
      routerArr:routerArr
    }
  },
  methods:{
    clickRouter:function (str) {
      window.location.hash = '#'+str;
    }
  }
}
</script>

<style>
.left{
  float: left;
}
.left>ul>li{
  width: 300px;
  list-style: none;
  background-color: #1abc9c;
  border-top: 2px solid #999;
  border-left: 2px solid #999;
  border-right: 2px solid #999;
  height: 40px;
  line-height: 40px;
  text-align: left;
  text-indent: 50px;
  color: #fff;
}
.left>ul>li:last-child{
  border-bottom: 2px solid #999;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
