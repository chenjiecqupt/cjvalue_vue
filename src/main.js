// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import componentsX from './lib/components'
import directivesX from './lib/directives'
import filtersX from  './lib/filters'
import initCss from './assets/init.css'
import Mock from './Mock'
import axios from 'axios'

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  componentsX,
  directivesX,
  filtersX,
  Mock,
  components: { App },
  template: '<App/>'
});
