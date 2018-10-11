<template>
  <div>
    <div class="view" v-if="flag > 2"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      flag: 3
    }
  }
}
</script>
<style lang="scss">
.view{
  background: skyblue;
  width: 20px;
  height: 20px;
}
</style>


