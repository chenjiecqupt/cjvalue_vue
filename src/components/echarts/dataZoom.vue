<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
      <div id="dataZoom" :style="style"></div>
    </div>
</template>

<script>
  import echarts from 'echarts'
    export default {
        name: 'hello',
        data() {
            return {
                msg: 'dataZoom组件演示',
                style:{
                  width: "800px",
                  height: "800px"
                }
            }
        },
        mounted:function () {
          const myCharts = echarts.init(document.getElementById('dataZoom'));
          let randomData= function(length){
            let data = [];
            if(length == undefined || length<=0 || isNaN(length)){
              alert('randomData()需要一个大于0的数字作为参数');
              return;
            }
            for(let i=0;i< length;i++){
              data.push([Math.random().toFixed(2)*100,Math.random().toFixed(2)*100,Math.random().toFixed(2)*2+0.2])
            }
            return data;
          };
          let data = randomData(50);
          let option = {
            legend: {
              data: ['scatter']
            },
            xAxis:{
              type: 'value'
            },
            yAxis:{
              type: 'value'
            },
            tooltip : {
              trigger: 'item',//是否节点触发
              padding: 5,
              position: 'inner',
              formatter: function(data){
                return (data.seriesName+
                '<br>'+JSON.stringify(data.data)
                );
              },
            },
            dataZoom: [
              {
                type: 'slider',
                start: 0,
                end: 100
              }
            ],
            series:[
              {
                name:'scatter',
                type:'scatter',
                itemStyle:{
                  position: 'inner',
                  normal: {
                    opacity: 0.8
                  }
                },
                symbolSize: function (val) {
                  return val[2]*40
                },
                data:randomData(20)
              }
            ]
          };
          myCharts.setOption(option);
          let enlarge = true;
          setInterval(function () {
            let scale = enlarge? 0.8:1.25;
            enlarge = !enlarge;
            for(let i =0;i<option.series[0].data.length;i++){
              if(i%3==0){
                option.series[0].data[i][2] = option.series[0].data[i][2]*scale;
              }else if(i%3==1){
                option.series[0].data[i][2] = option.series[0].data[i][2]/scale;
              }
            }
            myCharts.setOption(option);
          },500)
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }
</style>

