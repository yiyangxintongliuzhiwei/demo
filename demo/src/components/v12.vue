<template>
   <el-carousel :interval="5000" arrow="always" height="400">
    <el-carousel-item v-for="item in imgdata" :key="item">
      <!-- <h3>{{ item }}</h3> -->
      <h3><img :src="item"></h3>
    </el-carousel-item>
  </el-carousel>
</template>
<script>
export default {
    data(){
        return{
            imgdata:[
                require('../assets/1.png'),
                require('../assets/2.jpg'),
                require('../assets/3.jpg'),
            ] 
        }
    } 
}
</script>
<style>
img{
    width: 800px;
    height: 400px;
}
.el-carousel{
    width: 800px;
}

/* .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  } */
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>


