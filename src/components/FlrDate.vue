<template>
    <div class="hello">
        <h1>{{time | customDateFormat}}</h1>
        <h2>{{time | customYMDFormat}}</h2>
        <h2>{{time | customDateTime}}</h2>
        <h3>{{time | customDateMonth}}</h3>
        <h3>{{time | customDateWeek}}</h3>
        <h4>{{time | customDateMonthX}}</h4>
    </div>
</template>

<script>
    export default {
        name: 'hello',
        data() {
            return {
                time: new Date()
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
    h1, h2 {
        font-weight: normal;
    }
</style>

