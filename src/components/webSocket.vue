<template>
    <div class="webSocket">
        <h1>{{ msg }}</h1>
      <a @click="openWebSocket(href)">链接到websocket测试</a>
      <ul>
        <li v-for="data in arr" v-html="data"></li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: 'webSocket',
        data() {
            return {
                msg: 'Welcome webSocket',
                href:'http://localhost:3008',
                arr:[]
            }
        },
      methods:{
          openWebSocket:(url)=>{
            window.open(url)
          }
      }
        /*created:function(){
          const url = 'ws://192.168.0.86:3008';
          const ws = new WebSocket(url);
          let arr = [];
          const _this = this;
          ws.onopen = function (e) {
            console.log('链接打开');
            //e  Event 对象
            console.info(e);
            //e.target  --- 当前事件触发对象，也就是 new的WebSocket 对象
            ws.send('hello ws,当前协议：' + e.target.protocol);
          };
          ws.onmessage = function (e) {
            //e MessageEvent 对象
            //e.data 从服务器发送过来的数据
            console.info(e);
            arr.push(e.data);
            _this.arr = arr;
            console.log(_this);
            /!*console.info('接受到数据：' + e.data);*!/
          };
          ws.onclose = function (e) {
            console.info(e);
            console.log('closed');
          };
          ws.onerror = function (e) {
            console.info(e);
            console.log('发生异常');
          }
        }*/
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }
</style>

