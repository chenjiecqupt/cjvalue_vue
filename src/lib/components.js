/**
 * Created by chenjie on 2018/4/2.
 */
import Vue from 'vue';
import html2canvas from 'html2canvas';
Vue.component('cpt-counter',{
  template:'<button @click="addCounter">按钮{{counterX}}</button>',
  props:{
    counter:{
      type: Number,
      default:-3
    }
  },
  data:function(){
    return {
      counterX:this.counter
    }
  },
  methods:{
    addCounter:function(){
      this.counterX++
    }
  },
  computed:{
  },
  mounted:function () {
    /*this.counter = this.counter || 0;*/
  }
});
Vue.component('cpt-table',{
  template:
  '<div class="clear">' +
    '<div v-show="saveTable" style="text-align: left;"><button @click="saveTableEvent" class="cpt-table-save">保存表格</button></div>'+
    '<div class="cpt-table-wrap">' +
      '<table :class="tableClass" class="cpt-table">' +
        '<thead :class="tHeadClass">' +
          '<th v-for="th in tHeads" :colspan="th.col||1" :style="th.style" v-bind:title="th.name" :class="thClass">{{th.name}}</th>'+
        '</thead>'+
      '<tbody :class="tBodyClass">' +
        '<tr v-for="trs in tBody" v-bind:index="trs" :class="trClass">' +
          '<td v-for="td in trs.tds" :colspan="td.col||1" :rowspan="td.row||1" :title="td.name" v-bind:style="td.style" :class="tdClass">{{td.name}}</td>'+
        '</tr>'+
      '</tbody>'+
      '</table>'+
    '</div>'+
  '</div>'
  ,
  props: {
    tHeads: {
      type: Array,
    },
    saveTable:{
      type:Boolean,
      default: true
    },
    tableClass:{
      default:'cpt-table'
    },
    tHeadClass: {
      default: 'cpt-tHead'
    },
    thClass:{
      default:'cpt-th'
    },
    tBodyClass: {
      default: 'cpt-tBody'
    },
    trClass: {
      default: 'cpt-tr'
    },
    tdClass: {
      default: 'cpt-td'
    },
    tBody: {
      type: Array,
      require:true,
      default: function () {
        return [
          {
            tds: [
              {
                name:'列表1',
                row:2
              },
              {
                name:'列表2',
                col:2,
                style:{
                  background:'#eee'
                }
              },
              {
                name:'列表3',
              }
            ]
          },
          {
            tds: [{
              name:'列表1',
              col:1,
              row:1
            },
            {
              name:'列表2',
            },{
              name:'列表3',
            }
            ]
          }
        ]

      }
    }
  },
  data:function () {
    return {
      save:this.saveTable
    }
  },
  methods:{
    saveTableEvent:function () {
      html2canvas(document.querySelector('.cpt-table-wrap')).then(canvas=>{
        let url = canvas.toDataURL();
        let imgDownLoad = document.createElement('a');
        imgDownLoad.setAttribute('href',url);
        imgDownLoad.setAttribute('download','cpt_table_'+new Date().getTime()+'.jpg');
        document.body.appendChild(imgDownLoad);
        imgDownLoad.click();
        imgDownLoad.remove();
      })
    }
  }
});
Vue.component('CJLink',{
  template:'<a @click="linkTo" class="CJLink" :to="to" :style="CJstyle">{{linkName}}</a>',
  props:{
    to:{
      type: String ,
      default: ''
    },
    linkName:{
      type: String,
      default: ''
    },
    CJstyle:{
      type:Object,
      default: {
        color: '#444'
      }
    }
  },
  /*data(){
    /!*style:{
      textDecoration: "none"
    }*!/
  },*/
  methods:{
    linkTo:function () {
      if(this.to === ''){
        return true
      }else{
        window.location.hash = '#'+this.to;
        window.location.href = window.location.href.split('#')[0] +window.location.hash
        console.log(window.location.href)
      }
    }
  }

});
export default Vue;
