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
  return {
    data: ['a','b','qweqw','qwe']
  }
})
