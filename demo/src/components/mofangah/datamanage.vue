<template>
  <div>
    <div class="caidan">
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
import wuxianrenyuan from './datamanage/wuxianrenyuan'
import qing from './datamanage/qing'
import daqing from './datamanage/daqing'
import daqing1 from './datamanage/daqing1'
export default {
  data() {
    return {
      currentView: '',
      onemenulists: [
        {
          name: '一级菜单1',
          twomenu: [
            {
              name: '二级菜单1-1',
              thirdmenu: [
                {
                  name: '三级菜单1-1',
                  tem: daqing
                },
                {
                  name: '三级菜单1-2',
                  tem: daqing1
                }
              ]
            },
            {
              name: '二级菜单1-2',
              tem: qing
            },
          ]
        },
        {
          name: '一级菜单2',
          tem: wuxianrenyuan
        },
        {
          name: '一级菜单3',
          tem: daqing
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
  components: {sonmenu, qing, daqing, daqing1, wuxianrenyuan}
}
</script>
<style lang="scss">
.caidan{
  width: 20%;
  height: 100%;
  background: gray;
  position: absolute;
  left: 0;
  top: 0;
}
.viewtem{
  width: 80%;
  height: 100%;
  background: floralwhite;
  position: absolute;
  left: 20%;
  top: 0;
}
</style>

