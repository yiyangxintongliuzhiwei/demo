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
    }
  ]
})
