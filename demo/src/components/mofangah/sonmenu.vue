<template>
  <div class="page">
    <ul>
      <li class="onemenu" v-for="(item,index) in onemenulist" @click="changetwomenu(index)">
        {{item.name}}
      </li>
      <li class="onemenu" v-for="(item,index) in twomenulist" v-show="erjicaidan" @click="changethirdmenu(index)">
        {{item.name}}
      </li>
      <li class="onemenu" v-for="(item,index) in thirdmenulist" v-show="sanjicaidan" @click="changeendmenu(index)">
        {{item.name}}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ['onemenulists'],
  data() {
    return {
      onemenulist: ['一级菜单'],
      twomenulist: [{name: ''}],
      thirdmenulist: [{name: ''}],
      erjicaidan: false,
      sanjicaidan: false
    }
  },
  mounted() {
    this.loaddata()
  },
  methods: {
    loaddata() {
      this.onemenulist = this.onemenulists
    },
    changetwomenu(index) {
      this.erjicaidan = ! this.erjicaidan
      this.twomenulist = this.onemenulists[index].twomenu
      if (!this.onemenulists[index].hasOwnProperty('twomenu')) {
        this.$emit('nosonmenu', index)
      }
    },
    changethirdmenu(index) {
      this.sanjicaidan = ! this.sanjicaidan
      this.thirdmenulist =  this.twomenulist[index].thirdmenu
      var list = [this.twomenulist, index]
      if (!this.twomenulist[index].hasOwnProperty('thirdmenu')) {
        this.$emit('nosanjimenu', list)
      }
    },
    changeendmenu(index) {
      var lists = [this.thirdmenulist, index]
      this.$emit('endmenu', lists)
    }
  }
}
</script>
<style lang="scss">
.page{
  width: 100%;
  height: 100%;
  background: gray;
  position: absolute;
  left: 0;
  top: 0;
  ul{
    width: 100%;
    height: 100%;
    background: gray;
    position: absolute;
    left: 0;
    top: 0;
    .onemenu {
      width: 100%;
      height: 10%;
      background: turquoise;
      margin-bottom: 2px;
      cursor: pointer;
    }
  }
}
</style>

