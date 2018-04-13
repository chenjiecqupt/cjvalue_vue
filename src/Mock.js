/**
 * Created by chenjie on 2018/4/12.
 */
require.config({
  paths:{
    mock:'http://www.cjvalue.cn'
  }
});
const Mock = require('mockjs')
//使用mockjs模拟数据
Mock.mock('/api/data', (req, res) => {
  return Mock.mock({
    "array|10": [
      {
        'name': '@cname',
        /*'age|18-80':100,*/
        "phoneNumber_1":"1",
        "phoneNumber_2|+1":[31,32,33,34,35,36,37,38,39,47,50,82,83,87,88,89],
       /* "phoneNumber_3|10000000-99999999":"1",*/
       /* "identityCard_1|100000-999999":"1",
        "identityCard_2|1000-9999":"1",*/
        'birthday':'@date("yyyy-MM-dd")',
        'city':'@city(true)'
      }
    ]
  })
  /*return {
    "list|1-10":[{
    'name': '@cname',
    'age|18-80':100,
    'birthday':'@date("yyyy-MM-dd")',
    'city':'@city(true)'
  }]
  }*/
})
