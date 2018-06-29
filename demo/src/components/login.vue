<template>
  <div>
      <form id="box" >
        <div id="login" :model="formdata">登陆</div>
        <div>用户名：<input type="text" placeholder="输入用户名" v-model="formdata.username"></div>
        <div>密  码：<input type="password" placeholder="输入密码" v-model="formdata.userpass"></div>
        <button @click="submit('formdata')">提交</button>
      </form>
      <!-- <div @click="submit1">点击</div> -->
  </div>
</template>
<script>
export default {
  data(){
      return{
        formdata:{
            username:"",
            userpass:"",
        }
      }
  },
  methods:{
      submit:function(){      
          this.$axios.post("/api/check/checklogin.php",
           this.formdata
          ).then(
              (res)=>{
                  console.log(res)
              }
          ).catch(
              (err)=>{
                  console.log(err)
              }
          )
      },
    //   submit1:function(){
    //       this.$axios.get("/api/check/manage.php").then(
    //           (res)=>{
    //               console.log(res)
    //           }
    //       ).catch(
    //           (err)=>{
    //               console.log(err)
    //           }
    //       )
    //   }
  }

}
</script>
<style scoped>
*{
    margin: 0;
    padding: 0;
}
  #box{
      width: 300px;
      height: 256px;
      background:seagreen;
      position: absolute;
      left: 50%;
      top:50%;
      margin-left: -150px;
      margin-top: -128px;
      display: flex;
      flex-direction:column;
      justify-content: space-around;
  }
  input{
      width: 100px;
      height: 20px;  
      margin-left: 10px;
  }
  button{
      width:60px;
      height:20px;
      background: violet;
      margin:0 auto;
  }
</style>

