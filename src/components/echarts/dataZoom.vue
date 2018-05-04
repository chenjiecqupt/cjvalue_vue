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
          let option = {
            xAxis:{
              type: 'value'
            },
            yAxis:{
              type: 'value'
            },
            dataZoom: [
              {
                type: 'slider',
                start: 1,
                end: 35
              }
            ],
            series:[
              {
                name:'scatter',
                type:'scatter',
                itemStyle:{
                  normal: {
                    opacity: 0.8
                  }
                },
                symbolSize: function (val) {
                  return val[2]*40
                },
                data: [["14.616","7.241","0.896"],["3.958","5.701","0.955"],["2.768","8.971","0.669"]]
              }
            ]
          };
          myCharts.setOption(option);
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }
</style>

