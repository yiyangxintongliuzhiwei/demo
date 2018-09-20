<template>
  <div>
     <button v-for="tab in tabs" :key="tab" v-on:click="currentTab = tab">{{tab.name}}</button>
       <keep-alive>
       <component v-bind:is="currentTab.component"></component>
       <!-- 
      1.http协议每一部分是什么（端口号……）
      2.如何给sessionstorage设置过期时间（加一个时间戳）
      3.跨域如何解决
      4.es6中数组的新方法（reduce   some      every    findindex）
     -->
       </keep-alive>       
  </div>
</template>
<script>
 var tabs = [
               {
                   name:"first",
                   component:{
                       template:'<div>THIS IS A FIRST</div>'
                   }
               },
               {
                    name:"SECOND",
                    component:{
                       template:'<div>THIS IS A SECOND</div>'
                   }
               },
                {
                     name:"THIRD",
                     component:{
                       template:'<div>THIS IS A THIRD</div>'
                   }
                }
           ]
export default {
  data(){
      return{
          tabs:tabs,
          currentTab:tabs[0]
      }
  },
  
}
</script>


