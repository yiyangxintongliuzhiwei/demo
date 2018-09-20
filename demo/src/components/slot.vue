<template>
    <div>
        <!-- 调用弹框组件 -->
      <button @click="warn()">点击</button>
      <transition name='fade'>
        <warnning :warnword='warnword' v-show="alertwarn" @warnningsure='warnningsure'></warnning>
      </transition>
    </div>
</template>
<script>
import warnning from '../common/warnning.vue'
export default {
  data() {
      return{
        warnword: '确定执行此操作吗？',
        alertwarn: false
      }
  },
  components: {warnning},
  methods: {
    warn() {
      this.alertwarn = true
    },
    warnningsure(data) {
      if (data === 'ok') {
        this.alertwarn = false
        alert('执行成功')
      } else {
        this.alertwarn = false
        alert('取消执行')
      }
    },
  }
}
</script>
<style lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: all 1s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>


