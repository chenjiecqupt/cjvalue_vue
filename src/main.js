// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import componentsX from './js/components.js'
import directivesX from './js/directives.js'
import initCss from './assets/init.css'

Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  componentsX,
  directivesX,
  components: { App },
  template: '<App/>'
});
