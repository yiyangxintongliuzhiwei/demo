<template>
  <div>
    <div class="protectview">
      <sonmenu :onemenulists='onemenulists' 
          @nosonmenu='nosonmenu' 
          @nosanjimenu='nosanjimenu'
          @endmenu='endmenu'>
      </sonmenu>
    </div>
    <component :is="currentView" class="viewtem"></component>   
  </div>
</template>
<script>
import sonmenu from './sonmenu'
import zhengchang from './protect/zhengchang'
export default {
  data() {
    return {
      currentView: '',
      onemenulists: [
        {
          name: '退服故障监控',
          twomenu: [
            {
              name: 'GSM基站',
              thirdmenu: [
                {name: '正常基站', tem: zhengchang},
                {name: '停电基站', tem: zhengchang},
                {name: '退服基站', tem: zhengchang}
              ]
            },
            {
              name: 'LTE基站',
              thirdmenu: [
                {name: '正常基站', tem: zhengchang},
                {name: '停电基站', tem: zhengchang},
                {name: '退服基站', tem: zhengchang}
              ] 
            }
          ]
        },
        {
          name: '应急信息呈现',
          twomenu: [
            {
              name: '应急资源',
              thirdmenu: [
                {
                  name: '通信车',
                  tem: zhengchang
                },
                {
                  name: '油机',
                   tem: zhengchang
                }
              ]
            },
            {
              name: '应急人员',
              thirdmenu: [
                {
                  name: '无线人员',
                  tem: zhengchang
                },
                {
                  name: '传输人员',
                   tem: zhengchang
                }
              ]
            }
          ]
        }
      ]
    }
  },
  methods: {
    nosonmenu(index) {
      this.currentView = this.onemenulists[index].tem
    },
    nosanjimenu(data) {
      this.currentView = data[0][data[1]].tem
    },
    endmenu(data) {
      this.currentView = data[0][data[1]].tem
    } 
  },
  components: {sonmenu}
}
</script>
<style lang="scss">
.protectview{
  width: 20%;
  height: 100%;
  background: gray;
  position: absolute;
  left: 0;
  top: 0;
}
</style>

