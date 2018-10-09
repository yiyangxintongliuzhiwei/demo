<template>
  <div>
    <div id="box"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {    
    }
  },
  mounted () {
    this.creat()
  },
  methods: {
    creat: function() {
      var newdiv = document.createElement('div')
      newdiv.className = 'box'
      var divs = document.getElementById('box')
      divs.appendChild(newdiv)  
    }
  }
}
</script>
<style lang="scss">
#box {
  width: 100px;
  height: 100px;
  background: yellow;
}
.box {
  width: 20px;
  height: 20px;
  background: skyblue
}
</style>


