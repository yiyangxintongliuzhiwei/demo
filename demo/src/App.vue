<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <heads msg="第一个项目" @messages="resive"> 
    </heads> -->
    <!-- <p>{{childword}}</p> -->
    <!-- <echars></echars> -->   
    <!-- <increment></increment>
    <display></display> -->
    <router-view/>
  </div>
</template>
<script>  
import heads from "./components/heads.vue"
import display from "./components/display.vue"
import increment from "./components/increment.vue"
// import echars from "./components/echars.vue"
export default {
  name: 'App',
  data(){
    return{
       childword:"你好",
    }
  },
 components:{heads,display,increment},
 methods:{
  resive:function(){
     this.childword = "子组件像父组件通信";
  }
 }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
