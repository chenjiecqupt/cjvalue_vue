<template>
    <div class="Index">
        <img src="../assets/logo.png" alt="">
        <h1>{{ msg }}</h1>
        <h2 v-once>{{xx}}</h2>
        <input type="text" v-focus v-model = "show" v-on:keyup.left="testClick(show)" v-on:keyup.enter="testClick(show)">
        <p  v-on:keyup.left="testClick(show)">{{show}}</p>
        <div>
          <p v-html="html"></p>
        </div>
      {{number}}+computed :"{{xxx}}"
      <div v-bind:id="number" v-show="number%2 == 0? true : false">
        {{number}}
      </div>
      <img src="../assets/BUG_747_747.png" alt="">
    </div>
</template>

<script>
    var data = {
      msg:'Welcome to Your Vue.js',
      xx:'1222222222',
      html:'',
      number:0,
      show: ''
    };
    export default {
        name: 'Index',
        data: function () {
          return data;
        },
        methods:{
          testClick:function (val) {
            alert(val);
          }
        },
        computed:{
            xxx: function(){
              console.log(this);
              var str = 'asda'+this.xx;
              return str;
            }
        }
    }

    console.log(this.xx)
    /*setTimeout(function () {
      data.msg = '3000ms';
      data.xx = 'qweqwe';
      data.html= '<span style="color: rebeccapurple;font-weight: bold">三秒了</span>';
      console.log(data)
    },3000);*/
    /*setInterval(function(){
      data.number++;
    },1000)*/
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    h1, h2 {
        font-weight: normal;
        opacity: 0.6;
        /*transform: rotate(70deg);*/
    }
</style>

