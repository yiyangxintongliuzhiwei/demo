<template>
  <div>
     <div class="box1" :class="{'active':isactive}" @click="change1()" v-show="ok">1</div>
     <div class="box2" :class="{'active1':isactive1}" @click="change2()">2</div>
     <!-- :class="{'active1':isactive1}" @click="change2() -->
     <router-view></router-view>
  </div>
</template>
<script>
export default {
  data(){
      return{
          isactive:false,
          ok:true,
          isactive1:false,
      }
  },
  methods:{
      change1:function(){
            this.isactive = !this.isactive;
            this.$router.push("/kong1")
      },
    //   change2:function(){
    //         this.isactive1= !this.isactive1;
    //         this.ok = false;
    //         this.$router.push("/kong2")
    //   }
    change2:function(){
        this.isactive1 = !this.isactive1;
        this.$router.push("/kong2")
    }
  }
}
</script>
<style>
   .box1{
       width: 50px;
       height: 50px;
       background: yellow;
       line-height: 50px;
       text-align: center;
       float: left;

   }
   .box2{
        width: 50px;
        height: 50px;
        background: yellow;
        line-height: 50px;
        text-align: center;
        float: left;
   }
   .active{
       background: darkcyan
   }
   .active1{
       background: skyblue
    }
</style>


