/**
 * Created by chenjie on 2018/4/2.
 */
import Vue from 'vue'
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
  '<table border="1" cellspacing="0" cellpadding="0" :class="tableClass" class="cpt-table">' +
    '<thead :class="tHeadClass">' +
      '<th v-for="th in tHeads" v-bind:title="th" :class="thClass">{{th}}</th>'+
    '</thead>'+
    '<tbody :class="tBodyClass">' +
      '<tr v-for="trs in tBody" v-bind:index="trs" :class="trClass">' +
        '<td v-for="td in trs.tds" :title="td" :class="tdClass">{{td}}</td>'+
      '</tr>'+
    '</tbody>'+
  '</table>',
  props: {
    tHeads: {
      type: Array,
      /*require:true,*/
      default: function () {
        return ['表头1', '表头2', '表头3', '表头4']
      }
    },
    tableClass:{
      deFault:'cpt-table'
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
      /*require:true*/
      default: function () {
        return [
          {
            tds: ['列表1', '列表2', '列表3', '列表4']
          },
          {
            tds: ['列表1', '列表2', '列表3', '列表4']
          }
        ]

      }
    }
  },
  data:function () {
    return {
      /*tHead:{},
      th:''*/
    }
  }
});
export default Vue;
