<template>
  <div>
     <button v-for="tab in tabs" :key="tab" v-on:click="currentTab = tab">{{tab.name}}</button>
       <keep-alive>
       <component v-bind:is="currentTab.component"></component>
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


