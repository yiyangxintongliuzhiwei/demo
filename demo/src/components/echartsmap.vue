<template>
  <div>
    <div id="map"></div>
  </div>
</template>
<script>
import options from './options.js'
import echarts from 'echarts';
export default {
  data() {
    return {
    }
  },
  mounted() {
    this.init()
    this.loaddata()
  },
  methods: {
    init() {
      this.echarts = echarts.init(document.getElementById('map'));
    },
    loaddata() {
      this.echarts.setOption(options.option1)
    }
  }
}
</script>
<style lang="scss">
#map{
  width: 1025px;
  height: 690px;
  border: 1px solid #000;
  background: #08183c
}
</style>


