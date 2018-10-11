<template>
  <div>
    <div class="content" :style="{width: mywidth, height: myheight}">
      <ul class="menu">
        <li v-for="(item, index) in menulist" @click="changearea(index)" :class="{'active': isactive == index}">{{item}}</li>
      </ul>
      <component :is="currentView" class="view"></component> 
    </div>
  </div>
</template>
<script>
import protect from './mofangah/protect'
import preture from './mofangah/preture'
import datamanage from './mofangah/datamanage'
import usermanage from './mofangah/usermanage'
import ordermanage from './mofangah/ordermanage'
export default {
  data() {
    return {
      mywidth: document.documentElement.clientWidth + 'px',
      myheight: document.documentElement.clientHeight + 'px',
      menulist: ['重点区域保障', '时候评估', '数据管理', '用户管理', '权限管理'],
      isactive: 0,
      currentView: protect,
      viewlist: [protect, preture, datamanage, usermanage, ordermanage]
    }
  },
  mounted() {
  },
  methods: {
    changearea(index) {
      this.isactive = index
      this.currentView = this.viewlist[index]
    } 
  },
  components: {protect, preture, datamanage, usermanage, ordermanage}
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
.content{
  background: skyblue;
  .menu{
    width: 80%;
    height: 40px;
    // background: yellowgreen;
    position: absolute;
    left: 50%;
    top: 0%;
    margin-left: -40%;
    margin-top: 10px;
    display: flex;
    justify-content: space-around;
    // flex-direction: column;
    align-items: center;
    li{
      width: auto;
      height: 40px;
      background: mediumaquamarine;
      cursor: pointer;
    }
    .active {
        background: orange
    } 
  };
  .view{
    width: 100%;
    height: 100%;
    background: tan;
    position: absolute;
    left: 0;
    top: 40px;
  }
}
</style>

