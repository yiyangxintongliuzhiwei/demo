// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
// import echarts from 'echarts'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Swiper from 'swiper'; 
import 'swiper/dist/css/swiper.min.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import alertwarn from "./common/alertwarn.vue"
Vue.use(router)
Vue.use(ElementUI)
Vue.use(Vuex)
// Vue.use(Swiper)
Vue.prototype.$axios = axios;
// Vue.prototype.$echarts = echarts 
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data:{
    bus:new Vue()
  },
  router,
  components: { App },
  template: '<App/>'
})