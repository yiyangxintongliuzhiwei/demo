<template>
<div>
     <!-- <div id="myChart" :style="{width: '1200px', height: '1200px'}"></div> -->
          <div id="num" :style="{width: '1200px', height: '1200px'}">
            <!-- <counter :data="num1" :config="config3"></counter> -->
          </div>
        
</div>
</template>
<script>
// import options from "./option.js"
export default {
  data() {
    return {
      
    };
  },
  mounted(){
    this.drawline();
    
  },
  methods:{
    drawline:function(){
      let myChart = this.$echarts.init(document.getElementById('num'))   
      
      var demo = myChart.setOption({
     xAxis: {
       type: 'category',
       data: ["AAA","AA",'A','普通'],
       axisLabel:{
            show: true,
            textStyle:{
                color: '#222',
                fontSize:'17'
            }
       },
       axisLine:{
            lineStyle:{
               color:"#c2d0ff",
               width:4,
            }
        }
       },
      yAxis: {
        type: 'value',
        data: [0,3,6,9,12],
        axisLabel:{
            show:true,
            textStyle:{
                color:"#99c2ff",
                fontSize:'20'
            }
        },
        yxisLine:{
            lineStyle:{
               color:"#163a68",
               width:4,
            }
        }
      },
      series: [{
        data: [3, 2, 3, 6],
        type: 'bar',
        barWidth:48,
        label:{
             normal: {
                       show: true,
                       position: 'top',
                       fontSize:"20"
                    }
        }
      }]   
      })
      console.log(demo)
    }
 
  }
 
};
</script>
