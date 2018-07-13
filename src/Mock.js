/**
 * Created by chenjie on 2018/4/12.
 */
require.config({
  paths: {
    mock: 'http://www.cjvalue.cn'
  }
});
const Mock = require('mockjs')
// 使用mockjs模拟数据
Mock.mock('/api/data', (req, res) => {
  return Mock.mock({
    "array|10": [
      {
        'id|+1': 1,
        'name': '@cname',
        "phoneNumber_1": "1",
        "phoneNumber_2|1": [31,32,33,34,35,36,37,38,39,47,50,51,52,53,55,56,57,58,59,82,83,87,88,89],
        'birthday': '@date("yyyy-MM-dd")',
        'city': '@city(true)'
      }
    ]
  })
});
