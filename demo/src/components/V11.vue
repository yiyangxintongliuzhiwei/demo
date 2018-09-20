<template>
  <div>
     <div @click="change">{{msg}}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: ''
    }
  },
  methods:{
    change() {
      let arr = [];
      arr.push({
        1: '第一',
        2: '第二'
      },
      {
        3: '第三',
        4: '第四'
      },
      [
        5, 6
      ])
      console.log(arr)
    }
  }
}
</script>
<style>
div {
  background: black;
  width: 10px;
  height: 10px;
}
</style>

