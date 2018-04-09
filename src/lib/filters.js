/**
 * Created by chenjie on 2018/4/8.
 */
import Vue from 'vue';
Vue.filter('customDateFormat',function (date) {
  return getDateObj(date,'yyyy-MM-dd HH:mm:ss');
});
Vue.filter('customYMDFormat',function (date) {
  return getDateObj(date,'yyyy-MM-dd');
});
Vue.filter('customDateTime',function (date) {
  return getDateObj(date,'HH:mm');
});
Vue.filter('customDateMonth',function (date) {
  return getDateObj(date,'MM-dd HH:mm');
});
Vue.filter('customDateMonthX',function (date) {
  let mouthArr = ["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"];
  return mouthArr[new Date(date).getMonth()];
});
Vue.filter('customDateWeek',function (date) {
  let weekArr = ["星期一","星期二","星期三","星期四","星期五","星期六","星期日"];
  return weekArr[new Date(date).getDay()-1];
});
function getDateObj( date,fmt) {
  let DateStr = fmt;
  let DateObj ={
    "yyyy": new Date(date).getFullYear(),
    "yy": new Date(date).getYear(),
    "MM": doubleNumber(new Date(date).getMonth()+1),
    "dd": doubleNumber(new Date(date).getDate()),
    "HH": doubleNumber(new Date(date).getHours()),
    "mm": doubleNumber(new Date(date).getMinutes()),
    "ss": doubleNumber(new Date(date).getSeconds()),
  };
  /*for(let key in DateObj){
    let str = '/'+key+'/ig'
    DateStr = DateStr.replace('/'+key+'/ig',DateObj[key]);
    console.log(key,DateStr,DateObj[key])
  }*/
  for(let key in DateObj){
    DateStr = DateStr.split(key).join(DateObj[key]);
  }
  return DateStr;
}
function doubleNumber(val) {
  let number = val<10?'0'+val:val;
  return number;
}
export default Vue;
