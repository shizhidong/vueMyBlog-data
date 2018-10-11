import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/view/'
import MyIndex from '@/view/myIndex/'//首页
import ResumeCenter from '@/view/myResumeCenter/'//简历中心
import MyPhoto from '@/view/myPhoto/'//我的相册
import MyWorkFragment from '@/view/myWorkFragment/'//我的工作片段
import MyAbout from '@/view/MyAbout/'//关于我
import Detail from '@/view/detail/'//详情页面
import Login from '@/view/Login'//登录页面

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/Login",
      name:"Login",
      component:Login
    },
    {
      path: '/',
      name: 'Index',
      component: Index,
      children:[
        {
          path:'',
          name:"MyIndex",
          component:MyIndex
        },
        {
          path:'/MyAbout',
          name:'MyAbout',
          component:MyAbout
        },
        {
          path:'/ResumeCenter',
          name:'ResumeCenter',
          component:ResumeCenter
        },
        {
          path:'/MyPhoto',
          name:'MyPhoto',
          component:MyPhoto,
          meta:{
            requireAuth: true
          }
        },
        {
          path:'/MyWorkFragment',
          name:'MyWorkFragment',
          component:MyWorkFragment
        },
        {
          path:'/Detail',
          name:'Detail',
          component:Detail 
        }
      ]
    },
   

  ]
})

