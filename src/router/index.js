import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import First from '@/components/First'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(Router)
Vue.use(VueAxios, axios)
export default new Router({
  routes: [
    {
      path:'/',
      name:'Login',
      component:Login
    },
    {
      path:'/first',
      name:'First',
      component: First
    }
  ]
})
