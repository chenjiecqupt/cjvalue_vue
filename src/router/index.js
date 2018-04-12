import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/index'
import CptCounter from '@/components/CptCounter'
import CptTable from '@/components/CptTable'
import FlrDate from '@/components/FlrDate'
import mockTest from '@/components/MockTest'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
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
    }
  ]
})
