<template>
  <div>
    <son @son-transport='transport' :name='name'></son>
    <button @click="brotransport()">点击</button>
  </div>
</template>
<script>
import son from './son.vue'
import Hub from './option.js'
export default {
  components: {son},
  data() {
    return {
      name: '我是中国人'
    }
  },
  methods: {
    transport: function(data) {
      console.log(data)
    },
    brotransport: function(){
      Hub.$emit('bromessage', this.name)
    }
  }
}
</script>

