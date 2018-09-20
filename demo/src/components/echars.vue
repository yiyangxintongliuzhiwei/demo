<template>
  <div class="box">
    <zidingyizujian :name='name' @sontransport="getsondata()"></zidingyizujian>
  </div>
</template>
<script>
import zidingyizujian from './zidingyizujian.vue'
import Hub from './option.js'
export default {
  components: {
    zidingyizujian
  },
  data() {
    return {
      name: '中国'
    }
  },
  mounted() {
    Hub.$on('bromessage', (data)=>{
      cosnole.log(data)
    })
  },
  methods: {
    getsondata: function(data) {
      console.log(data)
    }
  }
}
</script>
<style>
.box {
  width: 500px;
  height: 500px;
  background: skyblue;
  position: relative;  
}
</style>


