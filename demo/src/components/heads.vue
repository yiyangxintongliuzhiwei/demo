<template>
 <div >
     <button @click="help()">
         {{msg}}
     </button> 
     <input type="button" value="点击1" @click="tongji1()">
     {{message1}}   
 </div>
</template>
<script>
export default {
   data(){
       return {
        message:"这是子组件给父组件传递",
        message1:"这是同级组件之间信息传递"
       }
   },
   props:[
       'msg',
   ],
   methods:{
      help:function(){
          this.$emit("messages",this.message)
      },
      tongji1:function(){
          this.$root.bus.$on("change",()=>{
              this.message1 = "haha"
          })
      }
   }
   
}
</script>
