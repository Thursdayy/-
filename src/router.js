import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/home.vue'
import Me from './views/my/my.vue'
import Find from './views/find/find.vue'
import Order from './views/order/order.vue'
import goodsinfo from './views/home/goodsInfo.vue'
import login from '@/components/login'
import food from './views/home/gridItem.vue'
import search from './views/home/search.vue'
import checkout from '@/components/checkout'

Vue.use(Router)
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/me',
      name: 'me',
      component: Me
    },
    {
      path: '/find',
      name: 'find',
      component: Find
    },
    {
      path: '/order',
      name: 'order',
      component: Order
    },
    {
      path:'/goodsinfo',
      component:goodsinfo,
      name: 'goodsinfo'
    },
    {
      path:'/login',
      component:login,
      name:'login'
    },
    {
      path:'/food',
      component:food,
      name:'food'
    },
    {
      path:'/search',
      component:search,
      name:'search'
    },
    {
      path:'/checkout',
      component:checkout,
      name:'checkout'
    }
    
  ]
})
