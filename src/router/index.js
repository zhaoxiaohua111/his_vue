import Vue from 'vue'
import Router from 'vue-router'
import First from '@/components/First'
import login from '@/components/Login'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(Router)
Vue.use(VueAxios, axios)
export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/first',
      name: 'First',
      component: First
    },
    {path:"",redirect:"/login"}
  ],
  mode: 'history'
})
