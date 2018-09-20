<template>
  <div>
    <!-- <swipper></swipper> -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../assets/1.png" alt="">
        </div>
        <div class="swiper-slide">
          <img src="../assets/2.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="../assets/3.jpg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from 'swiper'; 
import 'swiper/dist/css/swiper.min.css';
// import swipper from '../common/swipper.vue'
export default {
  // components: {swipper}
  mounted() {
    var mySwiper = new Swiper('.swiper-container', {
     direction: 'horizontal',
     autoplay: true,
     loop: true
    })
  }
}
</script>
<style lang="scss">
.swiper-container {
    width: 600px;
    height: 300px;
} 
</style>


