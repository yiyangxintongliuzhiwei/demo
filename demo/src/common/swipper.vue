<template>
  <div>
    <div class="bannerbox">
      <ul class="boxlist">
        <li></li>
        <li></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss">
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
  .bannerbox{
    width: 600px;
    height: 300px;
    border: 1px solid #000;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -300px;
    margin-top: -150px;
    .boxlist{
       width: 600px;
       height: 300px;
       position: absolute;
       left: 0;
       top: 0;
       li{
         width: 600px;
         height: 300px;
         background: skyblue;
         position: absolute;
         left: 0;
         top: 0;
       }
    } 
  }
</style>
