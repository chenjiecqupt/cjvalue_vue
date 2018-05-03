<template>
    <div class="hello">
        <h1>{{msg}}</h1>
        <div id="worldPopulation" style="width: 600px; height: 500px;"></div>
    </div>
</template>

<script>
  import echarts from 'echarts'
    export default {
        name: 'hello',
        data() {
            return {
                msg: '该数据为随机生成 ！'
            }
        },
      mounted:function () {
        const myChart =  echarts.init(document.getElementById('worldPopulation'));
        let base = +new Date(2018, 4, 3);//由于getMouth()方法获取的月份为0到11，
        // 所以new Date(2018, 4, 3)实际为2017/05/03日
        let oneDay = 24 * 3600 * 1000;
        let date = [];

        let data = [Math.random() * 100];
        let now = new Date(base);

        function addData(shift) {
          now = [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/');
          date.push(now);
          data.push((Math.random()) * 100 );

          if (shift) {
            date.shift();
            data.shift();
          }

          now = new Date(+new Date(now) + oneDay);
        }

        for (var i = 1; i < 10; i++) {
          addData();
        }

        let option = {
          title:{
            text:'每日数据展示',
            textStyle:{
              color:'#1abc9c'
            }
          },
          xAxis: {
            type: 'category',
           /* boundaryGap: false,*/
            data: date
          },
          yAxis: {
            /*boundaryGap: [0, '50%'],*/
            type: 'value'
          },
          series: [
            {
              name:'这是标题啊',
              type:'bar',
              smooth:true,
              symbol: 'none',
              stack: 'a',
              areaStyle: {
                normal: {color:'#2FA749'}
              },
              data: data
            }
          ]
        };
        myChart.setOption(option);
        setInterval(function () {
          addData(true);
          myChart.setOption({
            xAxis: {
              data: date
            },
            series: [{
              name:'这是标题啊！',
              data: data,
              type: 'bar'
            }]
          });
        }, 1000);
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }
</style>

