/**
 * Created by chenjie on 2018/4/2.
 */
import Vue from 'vue';
Vue.directive('focus',{
  inserted: function (el) {
    el.focus();
    el.value = 'this is v-focus';
  }
});
/*Vue.directive('CJLink',function (el,binding) {

});*/

export default Vue;
