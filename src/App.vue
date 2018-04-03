<template>
  <div>
    <section class="left">
      <ul>
        <li v-for="router in routerArr" v-bind:title=router.component @click="clickRouter(router.path)">
          {{router.name}}
        </li>
      </ul>
    </section>
    <div id="app" class="main">
      <router-view/>
    </div>
  </div>
</template>

<script>
import routerArr from './assets/RouterObj';
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
  width: 24%;
  position: relative;
  top: 100px;
}
.left>ul>li{
  width: 60%;
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
.main{
  width: 72%;
  float: left;
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
