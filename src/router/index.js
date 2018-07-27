import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/tabbar/Home'
import member from '@/components/tabbar/member'
import shopCar from '@/components/tabbar/shopCar'
import search from '@/components/tabbar/search'
import newList from '@/components/navbar/newList'

Vue.use(Router)
  
export default new Router({
  linkActiveClass: "mui-active",//将激活的路由添加一个mui-active类名称
  routes: [
    { path: '/', redirect: '/home', component: Home },//重定向
    { path: '/home',component: Home},
    { path: '/member', component: member },
    { path: '/shopCar', component: shopCar},
    { path: '/search', component: search },
    { path: '/news/newList', component: newList },

  ]
  
})
