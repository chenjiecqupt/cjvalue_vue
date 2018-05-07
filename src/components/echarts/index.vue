<template>
    <div class="echarts">
      <p>{{ msg }}</p>
      <div id="pie" :style="style"></div>
      <div id="line" :style="style"></div>
      <div>
        <button>
          <CJLink to="echarts/index" linkName="index" :CJstyle="CJstyle"></CJLink>
        </button>
        <button>
          <CJLink to="echarts/dataZoom" linkName="dataZoom" :CJstyle="CJstyle"></CJLink>
        </button>
      </div>
      <router-view></router-view>
    </div>
</template>

<script>
  import echarts from 'echarts'
    export default {
        name: 'echarts',
        data() {
            return {
                msg: 'ECharts，一个使用 JavaScript 实现的开源可视化库，可以流畅的运行在 PC 和移动设备上，' +
                '兼容当前绝大部分浏览器（IE8/9/10/11，Chrome，Firefox，Safari等），底层依赖轻量级的矢量图形库' +
                ' ZRender，提供直观，交互丰富，可高度个性化定制的数据可视化图表。',
                CJstyle:{
                  color: "#1abc9c"
                }
            }
        },
        computed:{
          style:function () {
            return {
              width: "400px",
              height: "400px",
              display: "inline-block"
            }
          }
        },
        mounted:function () {
          echarts.init(document.getElementById('pie')).setOption({
            title:{text:'随机饼状图（html,css,js）'},
            legend:{
              orient: 'vertical',
              x: 'right',
              data: ['html', 'css', 'js']
            },
            series : {
              type : "pie",
              name: '前端基础',
              data:[
                {
                  name:'html',value : parseInt(Math.random()*1000+100)
                },
                {
                  name:'css',value : parseInt(Math.random()*1000+100)
                },
                {
                  name:'js',value : parseInt(Math.random()*1000+1000)
                }
              ],
              itemStyle: {
                normal: {
                  label: {
                    show: true,
                    position: 'inner',
                    formatter: '{c} ({d}%)'
                  },
                  labelLine:{
                    show: false
                  }
                }
              }
            },
          });
          echarts.init(document.getElementById('line')).setOption({
            title:{text: '曲线图'},
            tooltip:{},
            toolbox:{
              feature:{
                dataView:{},
                saveAsImage:{
                  pixelRatio:2
                },
                restore:{}
              }
            },
            xAxis:{
              /*data: ['2012', '2013', '2014', '2015', '2016', '2017']*/
            },
            yAxis:{},
            series:[{
              type:'line',
              smooth: true,
              data:[[12,10],[24,20],[36,36],[45,54],[60,10],[72,20]]
            }]
          })
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }
</style>

