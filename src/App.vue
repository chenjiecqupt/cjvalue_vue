<template>
  <div>
    <section class="left">
      <ul>
        <li v-for="router in routerArr" v-bind:title=router.component @click="clickRouter(router.path)">
          {{router.name}}
        </li>
      </ul>
    </section>
    <div id="app" class="main" ref="app">
      <transition :name="transitionName">
        <router-view/>
      </transition>
    </div>
    <div class="scrollTop" ref="scrollTop">
      <button @click="scrollTop">返回顶部</button>
    </div>
  </div>
</template>

<script>
import routerArr from './assets/RouterObj';
export default {
  name: 'App',
  data:function(){
    return {
      routerArr:routerArr,
      transitionName: ''
    }
  },
  methods:{
    clickRouter:(str)=> window.location.hash = '#'+str,
    scrollTop:()=>window.scrollTo(0,0)
  },
  computed:{
    /*transitionName:()=>{
      return 'slide-left'
    }*/
  },
  updated:function () {
    const _this = this;
    this.$nextTick(function () {
      setTimeout(function () {
        let box = _this.$refs.app;
        let style = window.getComputedStyle ? window.getComputedStyle(box,null) : null || box.currentStyle;
      },1000);
    })
  },
  mounted:function () {
  },
  watch:{
    '$route'(to,from){
      this.transitionName = 'slide-left'
    }
  }
}
</script>

<style>
  .scrollTop{
    position: fixed;
    bottom: 20px;
    right: 100px;
  }
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
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
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
.slide-left-enter-active, .slide-left-leave-active {
  height: 0;
  transition-timing-function: ease;
  transition: transform .5s;
  transform-origin: left;
}
.slide-left-enter, .slide-left-leave-active {
  height: 0;
  transition-timing-function: ease;
  transform: scale(0,1);
}
.slide-right-enter-active, .slide-right-leave-active {
  transition: transform .5s;
  transform-origin: right;
}
.slide-right-enter, .slide-right-leave-active {
  transform: scale(0,1);
}
</style>
