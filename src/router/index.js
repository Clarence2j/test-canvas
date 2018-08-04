import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import { resolve } from 'uri-js';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      redirect : '/login',
      component: HelloWorld
    },
    {
      path : '/index',
      name : 'index',
      component : resolve => require(['@/view/index'] , resolve)
    },
    {
      path : '/canvas',
      name : 'canvas',
      component : resolve => require(['@/components/cm/cm-canvas'] , resolve)
    },
    {
      path : '/teach',
      name : 'teach',
      component : resolve => require(['@/components/cm/cm-teach'] , resolve)
    },
    {
      path : '/login',
      name : 'login',
      component : resolve => require(['@/components/login/login'] , resolve)
    }
  ]
})
