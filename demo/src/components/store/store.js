import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const Store = new Vuex.Store({
    state: {
        num: 0
    },
    mutations: {
        add (state) {
            state.num ++ 
        },
        del (state) {
            state.num --
        }
    }
})
export default Store;