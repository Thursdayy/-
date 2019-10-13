import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/home.vue'
import Me from './views/my/my.vue'
import Find from './views/find/find.vue'
import Order from './views/order/order.vue'
import goodsinfo from './views/home/goodsInfo.vue';

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
      path:'/goodsinfo/:id',
      component:goodsinfo,
      name: 'goodsinfo'
    }
  ]
})
