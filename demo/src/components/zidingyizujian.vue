<template>
  <div>
    <div v-changecolor='{background,width}'  class="boxs">{{name}}</div>
    <button @click="transport()">点击</button>
  </div>
</template>
<script>
  import Vue from 'vue'
  Vue.directive('changecolor', function(el,binding) {
    el.style = 'background:'+ binding.value.background + ';' + 'width:' + binding.value.width
    console.log(el)
  })
  export default {
    props: ['name'],
    data () {
      return {
        background: 'yellow',
        width: 200 + 'px',
        sonmessage: '这是子组件传信息到父组件'
      }
    },
    methods: {
      transport(){
        this.$emit('sontransport',this.sonmessage)
        console.log(this.sonmessage)
      }
    }
  }
</script>
<style>
.boxs{
  /* width: 100px; */
  height: 100px;
  position: absolute;
  left: 25%;
  top: 30%;
}
</style>


