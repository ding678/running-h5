import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/components/layout/layout'
import userCenter from '@/components/userCenter/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: layout,
      children: [
        {
          path: '/',
          component: () => import('@/components/layout/components/content'),
          name:'首页'
        },
        {
          path: 'articles',
          component: () => import('@/components/article/list'),
          name: '心得交流'
        },
        {
          path: '/articles/:id',
          component: () => import('@/components/article/detail'),
          name:'心得交流'
        },
        {
          path: 'event',
          component: () => import('@/components/event/list'),
          name:'赛事信息'
        },
        {
          path: '/event/:id',
          component: () => import('@/components/event/detail'),
          name:'赛事信息'
        },
        {
          path: 'enrolls',
          component: () => import('@/components/event/enrolls'),
          name:'赛事报名'
        },
        {
          path:'/user',
          component:userCenter,
          name:'用户中心'
        },
        {
          path:'/mycomment',
          component: ()=> import('@/components/userCenter/myComment'),
          name:'我的评论'
        },
        {
          path:'/myenrolls',
          component: ()=> import('@/components/userCenter/myEnrolls'),
          name:'我的报名'
        },
        {
          path:'/myarticle',
          component: ()=> import('@/components/userCenter/myArticle'),
          name:'我的发布'
        },
        {
          path:'/mymessage',
          component: ()=> import('@/components/userCenter/myMessage'),
          name:'我的通知'
        },
        {
          path:'/login',
          component:()=>import('@/components/login/login'),
          name:'登陆'
        },
        {
          path:'/register',
          component:()=>import('@/components/login/register'),
          name:'注册'
        }
      ]
    }

  ]
})
