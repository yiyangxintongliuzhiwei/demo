<template>
    <div>
        <div class="box">
            <!-- <button v-for="item in buttonlist" class="button" :key="item" @click="change(item)">{{item}}</button>
            <component v-bind:is="currentView" class="view"></component> -->
            <button @click="changes">点击</button>
            <alertwarn v-show="alert"></alertwarn>
        </div>
    </div>
</template>
<script>
import yizujian from './yizujian'
import erzujian from './erzujian'
import sanzujian from './sanzujian'
import alertwarn from '../common/alertwarn.vue'
export default {
    data () {
      return {
          alert: false,
          buttonlist: [
              '第一', '第二', '第三'
          ],
          currentView: ''
      }
    },
    components:{yizujian,erzujian,sanzujian,alertwarn},
    methods: {
        change(data) {
            if (data == '第三') {
                this.currentView = 'sanzujian'
            }
            if (data == '第二') {
                this.currentView = 'erzujian'
            }
            if (data == '第一') {
                this.currentView = 'yizujian'
            }
        },
        changes() {
            this.alert = true
        }
    }
}
</script>
<style scoped>
.box{
    width: 600px;
    height: 200px;
    /* background: violet */
    border: 1px solid black
}
.button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}
.view{
    width: 500px;
    height: 100px;
    border: 1px solid yellow
}
</style>

