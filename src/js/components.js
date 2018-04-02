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
  /*props:['counter'],*/
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
    /*counterX:function () {
      return this.counter;
    }*/
  },
  mounted:function () {
    /*this.counter = this.counter || 0;*/
  }

});
export default Vue;
