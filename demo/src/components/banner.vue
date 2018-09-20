<template>
  <div>
    <button @click="addlist()">添加</button>
    <transition name='fade'>
      <addlist v-show="addpop" :addlistname="addlistname" :listdatas='listdatas' @sure='sure'></addlist>
    </transition>
    <transition name='fades'>
      <warnning :warnword='warnword' v-show="alertwarn" @warnningsure='warnningsure'></warnning>
    </transition>
  </div>
</template>
<script>
import addlist from '../common/addlist.vue'
import warnning from '../common/warnning.vue'
export default {
  components: {addlist, warnning},
  data() {
    return {
      addpop: false,
      alertwarn: false,
      addlistname: '添加用户',
      warnword: '确定执行操作吗',
      listdatas: [
        {title: '用户名:'}, 
        {title: '英文名:'},
        {title: '英文名:'},
        {title: '英文名:'},
        {title: '用户名:'}, 
        {title: '英文名:'},
        {title: '英文名:'},
        {title: '英文名:'},
        {title: '用户名:'}, 
        {title: '英文名:'},
        {title: '英文名:'},
        {title: '英文名:'},
        {title: '描述:'}
      ]
    }
  },
  methods: {
    addlist() {
      this.addpop = true
    },
    sure(data) {
      if (data === 'ok') {
        this.addpop = false
        this.alertwarn = true
      } else {
        this.addpop = false
        this.alertwarn = true
      }
    },
    warnningsure(data) {
      if (data === 'ok') {
        this.alertwarn = false
        // alert('执行成功')
      } else {
        this.alertwarn = false
        this.addpop = true
        // alert('取消执行')
      }
    },
  } 
}
</script>
<style lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: all .5s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.fades-enter-active, .fades-leave-active {
  transition: all .5s ease;
}
.fades-enter, .fades-leave-to {
  opacity: 0;
}
</style>


