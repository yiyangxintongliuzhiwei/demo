<template>
  <div>
      <!-- 弹框组件 -->
    <div class="cover">
      <div class="cover-warn">
        <div>{{warnword}}</div>
        <button @click="back()">取消</button>
        <button @click="yes()">确定</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    props: ['warnword'], //父组件传过来的值,上面显示的内容
    methods:{
      yes() {
        this.$emit('warnningsure', 'ok')//点击确定后会给父组件返回ok
      },
      back() {
        this.$emit('warnningsure', 'no')//点击取消后会给父组件返回no
      }
    }
}
</script>

<style lang="scss">
  .cover{
      margin: 0;
      padding: 0;
      width: 380px;
      height: 180px;
      background: skyblue;
      border-radius: 8px;
      position: absolute;
      left: 50%;
      top: 50%;
      margin-left: -235px;
      margin-top: -110px;
      z-index: 1000;
    .cover-warn{
      width: 360px;
      height: 160px;
      background: -webkit-linear-gradient(#BCE00F, #B5CEA8);
      position: absolute;
      left: 50%;
      top: 50%;
      margin-left: -180px;
      margin-top: -80px;
      font-size: 20px;
      text-align: center;
      line-height: 160px;
      color: #ffffff;
      button:nth-of-type(1){
        position: absolute;
        left: 220px;
        bottom: 20px;
        background: mediumspringgreen
      }
      button:nth-of-type(2){
        position: absolute;
        left: 280px;
        bottom: 20px;
        background: mediumspringgreen;
        outline: none; 
      }
    }
  }
</style>

