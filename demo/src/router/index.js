import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import v11 from '@/components/V11.vue'
import v12 from '@/components/v12.vue'
import kong from "@/components/kong.vue"
import kong1 from "@/components/1.vue"
import kong2 from "@/components/2.vue"
import eacharts from "@/components/echars.vue"
import changes from "@/components/changes.vue"
import login from "@/components/login.vue"
import progress from "@/components/progress.vue"
import banner from "@/components/banner.vue"
import vuex from "@/components/vuex.vue"
import zujianqiehuan from "@/components/zujianqiehuan.vue"
import buzhoutiao from "@/components/buzhoutiao.vue"
import alertwarn from "@/common/alertwarn.vue"
import zidingyizujian from '@/components/zidingyizujian.vue'
import parent from '@/components/parent.vue'
import son from '@/components/son.vue'
import slot from '@/components/slot.vue'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/v11',
      component:v11
    },
    {
      path:'/v12',
      component:v12
    },
    {
      path:"/kong",
      component:kong,
      children:[
          {
            path:"/kong1",
            component:kong1
          },
          {
            path:"/kong2",
            component:kong2
          }
      ]
    },
    {
      path:"/echarts",
      component:eacharts
    },
    {
      path:"/changes",
      component:changes
    },
    {
      path:"/login",
      component:login
    },
    {
      path:"/progress",
      component:progress
    },
    {
      path:"/banner",
      component:banner
    },
    {
      path:"/vuex",
      component:vuex
    },
    {
      path:"/zujianqiehuan",
      component:zujianqiehuan
    },
    {
      path:"/buzhoutiao",
      component:buzhoutiao
    },
    {
      path:"/alertwarn",
      component:alertwarn
    },
    {
      path:'/zidingyizujian',
      component: zidingyizujian
    },
    {
      path: '/parent',
      component: parent,
    },
    {
      path: '/slot',
      component: slot
    }
  ]
})
