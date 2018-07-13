/* create by chenjie  new Data() */
import axios from 'axios';

axios.defaults.timeout = 5000;
axios.defaults.baseURL = '';
//interceptor 拦截器;
axios.interceptors.request.use(
  config => {
    config.data = JSON.stringify(config.data);
    config.headers = {
      'Content-Type':'application/x-www-form-urlencoded'
    };
    return config;
  },
  error => {
    return Promis.reject(err)
  }
);
var httpServer = {};

export function fetch(url,params={}) {
  return new Promise((resolve,reject) =>{
    axios.get(url,{
      params:params
    })
      .then(response => {
        resolve(response.data);
      })
      .catch(err =>{
        reject(err);
        console.error(err);
      })
  });
}
export function post(url,params={}) {
  return new Promise((resolve,reject) =>{
    axios.post(url,{
      params:params
    })
      .then(response => {
        resolve(response.data);
      })
      .catch(err =>{
        reject(err);
        console.error(err);
      })
  });
}
