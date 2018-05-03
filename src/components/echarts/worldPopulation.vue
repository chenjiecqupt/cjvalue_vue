<template>
    <div class="hello">
        <h1>{{msg}}</h1>
        <div id="worldPopulation" style="width: 1132px; height: 828px;"></div>
    </div>
</template>

<script>
  import echarts from 'echarts'
  import worldPopOption from '@/components/echarts/worldpop'
    export default {
        name: 'hello',
        data() {
            return {
                msg: '地图数据来自http://esa.un.org/wpp  ！'
            }
        },
      mounted:function () {
        echarts.init(document.getElementById('worldPopulation')).setOption(worldPopOption);
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }
</style>

