<template>
<div>
  <div class="contents">{{name}}</div>
  <button class="dianji" @click="sontransport()">点击</button>
</div>
</template>
<script>
export default {
  props: ['name'],
  data() {
    return {
    }
  },
  methods: {
    sontransport() {
      this.$emit('son-transport', '子传父信息')
    }
  }
}
</script>
<style lang="scss">
</style>


