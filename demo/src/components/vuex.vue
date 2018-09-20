<template>
    <div>
        <button @click="add">增加</button>
        <button @click="del">减少</button>
        <div class="box">{{msg}}</div>
    </div>
</template>
<script>
import store from './store/store.js'
export default {
    data() {
        return {
            msg: ''
        }
    },
    methods: {
        add () {
            store.commit('add')
            console.log(this.$store.state.num)
        },
        del () {
            store.commit('del')
        }
    }
}
</script>
<style scoped>
.box{
    width: 100px;
    height: 100px;
    border: 1px solid #000000
}
</style>
