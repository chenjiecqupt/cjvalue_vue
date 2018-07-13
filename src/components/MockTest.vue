<template>
    <div class="hello">
      <h1>下列数据由Mock和随机函数生成，并非真实数据</h1>
      <div>
        <table class="cpt-table">
          <thead class="cpt-thead">
            <th class="cpt-th" width="12%">姓名</th>
            <th class="cpt-th" width="12%">年龄</th>
            <th class="cpt-th" width="12%">手机</th>
            <th class="cpt-th" width="12%">出生年月日</th>
            <th class="cpt-th" width="26%">城市</th>
            <th class="cpt-th" width="26%">证件号码</th>
          </thead>
          <tbody class="cpt-tbody">
            <tr class="cpt-tr" :Oid="person.id" v-for="person in data" :key="person" @click="select(person.id)">
              <td class="cpt-td">{{person.name}}</td>
              <td class="cpt-td">{{person.age}}</td>
              <td class="cpt-td">{{person.phoneNumber}}</td>
              <td class="cpt-td">{{person.birthday}}</td>
              <td class="cpt-td">{{person.city}}</td>
              <td class="cpt-td">{{person.identityCard}}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h1 class="red-start">Mock数据调用：{{code}}</h1>
    </div>
</template>

<script>
    export default {
      name: 'hello',
      data() {
          return {
              data:[],
              code:'this.$axios.get("/api/data").then(res=>{console.log(res)}',
              thisYear:new Date().getFullYear()
          }
      },
      methods:{
        randomNumber:(n)=>{
          if(!Number.isInteger(n) && n==0){
            console.error('randomNumber(n),n请输入大于0的整数!');
            return;
          }
          let num = '';
          for(var i=0;i<n;i++){
            let str = null;
            str = Math.floor(Math.random()*10);
            if(i == 0&&str==0){
              str =1
            }
            num += str;
          }
          return num;
        },
        select:(id)=>{
          console.log('this is mock!');
          console.log(this);
          alert('你选择了第'+id+'条！');
        },
        alertX:(str,time)=>{

        }
      },
      beforeCreate:function () {
        let _this = this;
        this.$axios.get('/api/data').then(res=>{
          for(let index in res.data.array){
            res.data.array[index].age =  _this.thisYear - res.data.array[index].birthday.split('-')[0];
            res.data.array[index].phoneNumber = res.data.array[index].phoneNumber_1+res.data.array[index].phoneNumber_2 + _this.randomNumber(8);
            res.data.array[index].identityCard = _this.randomNumber(6)+ res.data.array[index].birthday.split('-').join('') + _this.randomNumber(4);
          }
          console.log(res.data.array);
          this.data = res.data.array;
        })
      },
      created: function () {
        let _this = this;
        this.timer = setInterval(function () {
          _this.$axios.get('/api/data').then(res=>{
            for(let index in res.data.array){
              res.data.array[index].age =  _this.thisYear - res.data.array[index].birthday.split('-')[0];
              res.data.array[index].phoneNumber = res.data.array[index].phoneNumber_1 + res.data.array[index].phoneNumber_2 + _this.randomNumber(8);
              res.data.array[index].identityCard = _this.randomNumber(6) + res.data.array[index].birthday.split('-').join('') + _this.randomNumber(4);
            }
            _this.data = res.data.array;
          })
        },6000);
      },
      beforeDestroy:function () {
        if(this.timer)clearInterval(this.timer);
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }
    tr:nth-of-type(odd){
      background: #f5f9fc;
      color: #000002;
    }
    tr:hover{
      color: #1abc9c;
    }
</style>

