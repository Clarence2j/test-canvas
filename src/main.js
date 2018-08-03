// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { post , get , fetch } from './axios/api'

Vue.config.productionTip = false
require('./../static/scss/index.scss')
Vue.prototype.$post = post;
Vue.prototype.$get = get;
Vue.prototype.$fetch = fetch;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
