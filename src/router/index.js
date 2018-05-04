import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/index'
import CptCounter from '@/components/CptCounter'
import CptTable from '@/components/CptTable'
import FlrDate from '@/components/FlrDate'
import mockTest from '@/components/MockTest'
import store1 from '@/components/store1'
import store2 from '@/components/store2'
import webSocket from '@/components/websocket'
import test from '@/components/test'
import echarts from '@/components/echarts/index'
import dailyData from '@/components/echarts/dailyData'
import dataZoom from '@/components/echarts/dataZoom'

console.log(webSocket,test);
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/index',
      name: 'Index',
      component: Index
    },{
      path:'/cptCounter',
      name:'cpt-counter',
      component: CptCounter
    },{
      path:'/CptTable',
      name:'cpt-table',
      component:CptTable
    },{
      path:'/flrDate',
      name:'flr-date',
      component:FlrDate
    },{
      path:'/mockTest',
      name:'mock-test',
      component:mockTest
    },{
      path:'/store1',
      name:'store1',
      component:store1
    },{
      path:'/store2',
      name:'store2',
      component:store2
    },{
      path:'/webSocket',
      name:'webSocket',
      component:webSocket
    },{
      path:'/echarts',
      name:'echarts',
      component:echarts,
      children:[
        {
          path:'',
          component:dailyData
        },
        {
          path:'index',
          component:dailyData
        },
        {
          path:'dataZoom',
          component:dataZoom
        }
      ]
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ x: 0, y: 0 })
      }, 5000)
    })
  }
})
