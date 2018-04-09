<template>
    <div class="hello">
      <ul>
        <h1>实时时间:自动更新</h1>
        <li>{{time | customDateFormat}} <span>{{description}}customDateFormat</span></li>
        <li>{{time | customHMSFormat}} <span>{{description}}customHMSFormat</span></li>
        <li>{{time | customYMDFormat}} <span>{{description}}customYMDFormat</span></li>
        <li>{{time | customHMTime}} <span>{{description}}customHMTime</span></li>
        <li>{{time | customMDHMTime}} <span>{{description}}customMDHMTime</span></li>
        <li>{{time | customMonthTime}} <span>{{description}}customMonthTime</span></li>
        <li>{{time | customWeekTime}} <span>{{description}}customWeekTime</span></li>
      </ul>
      <ul>
        <h1>固定时间 ：Mon Apr 09 2018 17:32:51 GMT+0800 </h1>
        <li>{{new Date('Mon Apr 09 2018 17:32:51 GMT+0800 ') | customDateFormat}}</li>
        <li>{{new Date('Mon Apr 09 2018 17:32:51 GMT+0800 ') | customHMSFormat}}</li>
        <li>{{new Date('Mon Apr 09 2018 17:32:51 GMT+0800 ') | customYMDFormat}}</li>
        <li>{{new Date('Mon Apr 09 2018 17:32:51 GMT+0800 ') | customHMTime}}</li>
        <li>{{new Date('Mon Apr 09 2018 17:32:51 GMT+0800 ') | customMDHMTime}}</li>
        <li>{{new Date('Mon Apr 09 2018 17:32:51 GMT+0800 ') | customMonthTime}}</li>
        <li>{{new Date('Mon Apr 09 2018 17:32:51 GMT+0800 ') | customWeekTime}}</li>
      </ul>
      <div><span v-bind:style='style'>*</span>{{code}}</div>
      <ul>
        <h1>提供以下方法：</h1>
        <li>customDateFormat：yyyy-MM-dd HH:mm:ss</li>
        <li>customHMSFormat：HH:mm:ss</li>
        <li>customYMDFormat：yyyy-MM-dd</li>
        <li>customHMTime：HH:mm</li>
        <li>customMDHMTime：MM-dd HH:mm</li>
        <li>customMonthTime：一月，...</li>
        <li>customWeekTime：星期一,...</li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: 'hello',
        data() {
            return {
              time: new Date(),
              description:'过滤器方法名：',
              code:"使用方法{{new Date(arg) | 方法名}}",
              style:{"color":"red","font-size":"20px"}
            }
        },
        computed:{
        },
        methods:{

        },
        created:function () {
          let _this = this;
          this.timer = setInterval(function () {
            _this.time = new Date();
          },1000)
        },
      beforeDestroy:function(){
        if(this.timer)clearInterval(this.timer);
      }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  div{
    text-align: left;
  }
    ul>h1{
      font-size: 24px;
      text-align: left;
      color: #444;
    }
    ul>li{
      font-size: 16px;
      text-align: left;
      position: relative;
      font-weight: 500;
    }
  ul>li>span{
    position: absolute;
    left: 300px;
    color: #42b983;
  }
</style>

