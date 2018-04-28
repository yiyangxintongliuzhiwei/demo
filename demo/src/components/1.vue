<template>
<div>
    <button @click="change">点击</button>
    <div id="box">{{message}}</div>
    <form>
        <input type="text" placeholder="请输入你的用户名" v-model="message1">
        <input type="password" placeholder="请输入你的密码" v-model="message2">
        <button @click="check">提交</button>
    </form>
</div>
</template>
<script>
export default {
  data(){
      return{
          message:"这是axios文件",
          message1:"liu",
          message2:"123456"
      }
  },
  methods:{
      change:function(){
          this.$axios.get("/api/manage.php").then(
              (res)=>{
                  this.message = res.data
              }
          ).catch(
              (err)=>{
                  console.log(err)
              }
          )
      },
      check:function(){
          this.$axios.post("/api/checklogin.php",   
          {
             name:this.message1,
             password:this.message2,
          }
          ).then(
              (res)=>{
                //   if(res.data = "ok"){
                //      this.$router.push("/kong2")
                //   }     
                console.log(res)        
              }).catch(
                  (err)=>{
                      console.log(err)
                  }
              )
             
          
      }
  }
}
</script>
<style>
     #box{
         width: 200px;
         height: 200px;
         border: 1px solid black;
         font-size: 16px;
         color:black;
         line-height: 50px;
         text-align: center;
     }
</style>

