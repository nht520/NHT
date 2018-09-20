import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/Layout'
import Header from '@/components/Header'
import Sideshow from '@/components/Sideshow'
import Sidebar from '@/components/Sidebar'
import Bottom from '@/components/Bottom'
// 组件库
import zujianmn from '@/library/zujiamn'
import News from '@/components/News/News'
//
import Home from '@/pages/Home'
import List from '@/pages/List'
import Carret from '@/pages/Carret'
import About from '@/pages/About'
//购物车
import Comment from '@/pages/carretdts/Comment'
import Commodity from '@/pages/carretdts/Commodity'
import Merchant from '@/pages/carretdts/Merchant'
import Shopping from '@/pages/Shopping'
import Particulars from '@/Particulars/Particulars'
// 商品
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      redirect:'/Home',
      children:[
        {
          path: 'Home',
          name: 'home',
          component: Home
        },
        {
          path: 'List',
          name: 'List',
          component: List
        },
        {
          path:'/Shopping',
          name:'Shopping',
          component:Shopping
        },
        {
          path: 'About',
          name: 'About',
          component: About
        },
      ]
    },
    {
      path: '/Carret',
      name: 'Carret',
      component: Carret,
      redirect:'/Carret/Commodity',
      children:[
        {
          path: 'Comment',
          name: 'Commenta',
          component: Comment
        },
        {
          path: 'Commodity',
          name:'Commoditya',
          component: Commodity
        },
        {
          path: 'Merchant',
          name:'Merchanta',
          component: Merchant
        },
      ]
    },
    {
      path: '/Header',
      name: 'Header',
      component: Header
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/News',
      name: 'News',
      component: News,
    },
    {
      path:'/Sidebar',
      name:'Sidebar',
      component:Sidebar
    },
    {
      path:'/Sideshow',
      name:'Sideshow',
      component:Sideshow
    },
    {
      path:'/Bottom',
      name:'Bottom',
      component:Bottom
    },
    //商品详情
    {
      path:'/Particulars',
      name:'Particulars',
      component:Particulars
    },
    //组件库
    {
      path:'/zujianmn',
      name:'zujianmn',
      component:zujianmn
    }
    // {
    //   path:'/Bottom',
    //   name:'Bottom',
    //   component:Bottom,
    //   redirect:'/Home',
    //   children:[
    //     {
    //       path: 'Home',
    //       component: Home
    //     },
    //     {
    //       path: 'List',
    //       component: List
    //     },
    //     {
    //       path: 'Carret',
    //       component: Carret
    //     },
    //     {
    //       path: 'About',
    //       component: About
    //     }
    //   ]
    // }
  ]
})
