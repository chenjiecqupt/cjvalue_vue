// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import componentsX from './lib/components'
import directivesX from './lib/directives'
import filtersX from  './lib/filters'
import Mock from './Mock'
import axios from 'axios'
import store from './lib/store.js'
import echarts from 'echarts'

import animate from  './assets/animate.min.css'
import initCss from './assets/init.css'

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.prototype.$echarts = echarts;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  componentsX,
  directivesX,
  filtersX,
  Mock,
  store,
  components: { App },
  template: '<App/>'
});
