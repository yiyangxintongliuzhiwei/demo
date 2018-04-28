// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import echarts from 'echarts'
import store from './store.js'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Swiper from './components/Swiper.vue';
import SwiperSlider from './components/SwiperSlide.vue';

Vue.use(VueAwesomeSwiper)
Vue.use(router)
Vue.prototype.$axios = axios;
Vue.prototype.$echarts = echarts 


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data:{
      bus:new Vue()
  },
  router,
  store,
  components: { App },
  template: '<App/>'
})
