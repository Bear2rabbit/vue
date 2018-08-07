import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/tabbar/Home'
import member from '@/components/tabbar/member'
import shopCar from '@/components/tabbar/shopCar'
import search from '@/components/tabbar/search'
import category from '@/components/views/category'
import bijia from '@/components/views/bijia'
import categoryList from '@/components/views/categoryList'

Vue.use(Router)
  
export default new Router({
  linkActiveClass: "mui-active",//将激活的路由添加一个mui-active类名称
  scrollBehavior (to, from, savedPosition) {
    return { y: 0 }
    console.log(savedPosition);
    
    // if (savedPosition) {
    //   return savedPosition
    // } else {
    //   return { x: 0, y: 0 }
    // }
  },
  routes: [
    { path: '/', redirect: '/home', component: Home },//重定向
    { path: '/home',component: Home},
    { path: '/member', component: member },
    { path: '/shopCar', component: shopCar},
    { path: '/search', component: search },
    { path: '/views/category', component: category },
    { path: '/views/category/:id', component: bijia },
    { path: '/views/cateInfo/:id', component: categoryList }


  ]
  
})
