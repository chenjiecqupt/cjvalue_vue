/**
 * Created by chenjie on 2018/4/16.
 */
import Vue from 'vue'
import Vuex from 'vuex'
/*import mutations from './mutations'
import plugins from './plugins'*/

Vue.use(Vuex);
const store = new Vuex.Store({
  state:{
    count:1221
  },
  mutations:{
    increment: state => state.count++,
    decrement: state => state.count--,
    setCount:(state,payload)=>state.count = payload.count

  }
});
console.log(store);
export default store;
