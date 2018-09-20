<template>
<div>
    <div class="zhezhao" ref="zhezhaos">
      <div class="warnning"></div>     
    </div>
</div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    mounted() {
      var w =  document.body.clientWidth
      this.$refs.zhezhaos.style.width = w + 'px'
    }
}
</script>
<style>
.zhezhao{
    margin: 0;
    padding: 0;
    height: 658px;
    background: #000;
    /* opacity: 0.4; */
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1000;
}
.warnning{
    width: 600px;
    height: 200px;
    /* background: salmon; */
    background: #ffffff;
    opacity: 0.6;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -300px;
    margin-top: -100px;
    /* color: yellow;
    font-size: 50px; */
}
</style>


