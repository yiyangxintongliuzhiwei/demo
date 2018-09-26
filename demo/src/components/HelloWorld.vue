<template>
  <div>
    <div class="zhuomian">
      <div class="person1"></div>
      <div class="person1-box">
      <div v-if='checked[index]' v-for="(item,index) in arr1" class="puke" @click="select(index)" :class="{active:checked[index].flag}">
        <div>{{item.textContent.split(' ')[0]}}</div>
        <div>{{item.textContent.split(' ')[1]}}</div>
      </div>
      </div>
      <div class="person2"></div>
      <div class="person2-box">
      <div v-for="item in arr2" id="puke">
        <div>{{item.textContent.split(' ')[0]}}</div>
        <div>{{item.textContent.split(' ')[1]}}</div>
      </div>
      </div>
      <div class="person3"></div>
      <div class="person3-box">
      <div v-for="item in arr3" id="puke">
        <div>{{item.textContent.split(' ')[0]}}</div>
        <div>{{item.textContent.split(' ')[1]}}</div>
      </div>
      </div>
      <div class="person4" v-show="!pukelist">底牌</div>
      <div class="person4-box">
      <div v-for="item in arr4" id="puke">
        <div>{{item.textContent.split(' ')[0]}}</div>
        <div>{{item.textContent.split(' ')[1]}}</div>
      </div>
      </div>
      <div class="zhezhao" v-show="pukelist"></div>
      <div class="pukelist" v-show="pukelist">
        <div v-for="item in puke" id="puke">
          <div>{{item.color}}</div>
          <div>{{item.value}}</div>
        </div>
      </div>
      <div class="chuledepai" v-show="chulaidepai">
        <div v-for="item in zhuangpai" class="puke">
          <div>{{item.textContent.split(' ')[0]}}</div>
          <div>{{item.textContent.split(' ')[1]}}</div>
        </div>
      </div>
      <div class="chuledepai1" v-show="chulaidepai1">
        <div v-for="item in zhuangpai1" class="puke">
          <div>{{item.textContent.split(' ')[0]}}</div>
          <div>{{item.textContent.split(' ')[1]}}</div>
        </div>
      </div>
      <div class="chuledepai2" v-show="chulaidepai2">
        <div v-for="item in zhuangpai2" class="puke">
          <div>{{item.textContent.split(' ')[0]}}</div>
          <div>{{item.textContent.split(' ')[1]}}</div>
        </div>
      </div>
      <button class="start" @click="start()" v-show="pukelist">发牌</button>
      <button class="start" @click='jiaodizhu()' v-show="jiaodizhus">叫地主</button>
      <button class="buchu" v-show="buchu">不出</button>
      <button class="chupai" v-show="buchu" @click="chupaizou">出牌</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arr1: [],
      checked: [{ flag: false }],
      buchu: false,
      pukelist: true,
      jiaodizhus: false,
      chulaidepai: false,
      chulaidepai1: false,
      chulaidepai2: false,
      zhuangpai: [],
      zhuangpai1: [],
      zhuangpai2: [],
      zhuangpaideshuzi: [],
      arr2: [],
      arr3: [],
      arr4: [],
      flag: 0,
      puke:[
        {color:'hong', value: '1'},
        {color:'hong', value: '2'},
        {color:'hong', value: '3'},
        {color:'hong', value: '4'},
        {color:'hong', value: '5'},
        {color:'hong', value: '6'},
        {color:'hong', value: '7'},
        {color:'hong', value: '8'},
        {color:'hong', value: '9'},
        {color:'hong', value: '10'},
        {color:'hong', value: '11'},
        {color:'hong', value: '12'},
        {color:'hong', value: '13'}
      ]
    }
  },
  methods: {
    // 发牌
    start() {
      var puke = document.querySelectorAll('#puke')
      var arr1in = []
      var arr2in = []
      var arr3in = []
      var arr4in = []
      var newpuke = []
      //每个人的牌和底牌分别放在四个数组里
      for (let i = 0; i < 4; i++) {
        arr1in.push(Math.floor(Math.random()*puke.length))
        arr2in.push(Math.floor(Math.random()*puke.length))
        arr3in.push(Math.floor(Math.random()*puke.length))
      }
      arr4in.push(Math.floor(Math.random()*puke.length))
      for (let j = 0; j < arr1in.length; j++) {
        this.arr1.push(puke[arr1in[j]])
      }
      this.arr1.forEach(element => {
        this.checked.push({ flag: false })
      })
      for (let j = 0; j < arr2in.length; j++) {
        this.arr2.push(puke[arr2in[j]])
      }
      for (let j = 0; j < arr1in.length; j++) {
        this.arr3.push(puke[arr3in[j]])
      }
      this.arr4.push(puke[arr4in[0]])
      this.pukelist = false
      this.jiaodizhus = true
    },
    //本方选择牌
    select(index) {
      this.checked[index].flag = !this.checked[index].flag
    },
    //叫地主
    jiaodizhu() {
      this.jiaodizhus = false
      this.arr1.push(this.arr4[0])
      this.buchu = true
    },
    //本方出牌
    chupaizou() {
      this.zhuangpai = []
      this.zhuangpaideshuzi = []
      this.chulaidepai = true
      for (let i = 0; i < this.checked.length; i++) {
        if (this.checked[i].flag) {
          this.zhuangpai.push(this.arr1[i])
        }
      }
      this.zhuangpai.forEach(element => {
        this.zhuangpaideshuzi.push(element.textContent.split(' ')[1])
      })
      this.zhuangpaideshuzi.forEach((element) => {
        this.arr1 = this.arr1.filter((ele,index) => {
           return ele.textContent.split(' ')[1] !== element  
        })
      })
      //判断下手是否能出牌
      var obj = {
        x: () => {
          this.chupaizou1()
        }
      }
      setTimeout(function() {
        obj.x();
      }, 3000)    
    },
    //下手出牌
    chupaizou1() {
      this.zhuangpai1 = []
      this.chulaidepai1 = true
      this.zhuangpai1.push(this.arr3[Math.floor(Math.random()*4)])
      //判断下下手是否能出牌
      var objs = {
        x: () => {
          this.chupaizou2()
        }
      }
      setTimeout(function() {
        objs.x();
      }, 2000) 
    },
    //下下手出牌
    chupaizou2() {
      this.zhuangpai2 = []
      this.chulaidepai2 = true
      this.zhuangpai2.push(this.arr2[Math.floor(Math.random()*4)])
    }
  }
}
</script>

<style lang="scss">
  .zhuomian{
    width: 740px;
    height: 490px;
    background: skyblue;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -370px;
    margin-top: -245px;
    .start{
      width: 80px;
      height: 20px;
      position: absolute;
      left: 50%;
      top: 50%;
      margin-left: -25px;
      margin-top: -60px;
    }
    .buchu{
      width: 80px;
      height: 20px;
      position: absolute;
      left: 55%;
      top: 50%;
      // margin-left: -25px;
      // margin-top: -60px;
    }
    .chupai{
      width: 80px;
      height: 20px;
      position: absolute;
      left: 35%;
      top: 50%;
    }
    .zhezhao{
      width:50px;
      height: 80px;
      // border: 1px solid #000;
      background: mediumaquamarine;
      z-index: 2;
      position: absolute;
      left: 50%;
      top: 50%;
      margin-left: -25px;
      margin-top: -180px;
    }
    .pukelist{
      width:50px;
      height: 80px;
      // border: 1px solid #000;
      position: absolute;
      left: 50%;
      top: 50%;
      margin-left: -25px;
      margin-top: -180px;
      #puke{
        width:50px;
        height: 80px;
        // border: 1px solid #000;
        position: absolute;
        left: 0;
        top: 0;
        background: mediumaquamarine
      }
    }
    .chuledepai{
      width: 350px;
      height: 80px;
      // border: 1px solid #000;
      position: absolute;
      left: 230px;
      bottom: 90px;
      .puke{
        width:50px;
        height: 80px;
        border: 1px solid #000;
        cursor: pointer;
        // position: absolute;
        // left: 0;
        // top: 0;
        margin-right: -20px;
        float: left;
        background: mediumaquamarine
      }
    }
    .chuledepai1{
      width: 200px;
      height: 80px;
      // border: 1px solid #000;
      position: absolute;
      right: 100px;
      top: 120px;
      .puke{
        width:50px;
        height: 80px;
        border: 1px solid #000;
        cursor: pointer;
        // position: absolute;
        // left: 0;
        // top: 0;
        margin-right: -20px;
        float: left;
        background: mediumaquamarine
      }
    }
    .chuledepai2{
      width: 200px;
      height: 80px;
      // border: 1px solid #000;
      position: absolute;
      left: 100px;
      top: 120px;
      .puke{
        width:50px;
        height: 80px;
        border: 1px solid #000;
        cursor: pointer;
        // position: absolute;
        // left: 0;
        // top: 0;
        margin-right: -20px;
        float: left;
        background: mediumaquamarine
      }
    }
    .person1{
      width: 50px;
      height: 50px;
      border: 1px solid #000;
      position: absolute;
      left: 100px;
      bottom: 10px;
    }
    .person1-box{
      width: 500px;
      height: 80px;
      border: 1px solid #000;
      position: absolute;
      left: 160px;
      bottom: 10px;
      .puke{
        width:50px;
        height: 80px;
        border: 1px solid #000;
        cursor: pointer;
        // position: absolute;
        // left: 0;
        // top: 0;
        margin-right: -20px;
        float: left;
        background: mediumaquamarine
      }
       .active{
        transform: translateY(-10px);
      }
    }
    .person2{
      width: 50px;
      height: 50px;
      border: 1px solid #000;
      position: absolute;
      left: 10px;
      top: 100px;
    }
    .person2-box{
      width: 50px;
      height: 80px;
      border: 1px solid #000;
      position: absolute;
      left: 10px;
      top: 160px;
      #puke{
        width:50px;
        height: 80px;
        border: 1px solid #000;
        position: absolute;
        left: 0;
        top: 0;
        background: mediumaquamarine
      }
    }
    .person3{
      width: 50px;
      height: 50px;
      border: 1px solid #000;
      position: absolute;
      right: 10px;
      top: 100px;
    }
    .person3-box{
      width: 50px;
      height: 80px;
      border: 1px solid #000;
      position: absolute;
      right: 10px;
      top: 160px;
      #puke{
        width:50px;
        height: 80px;
        border: 1px solid #000;
        position: absolute;
        left: 0;
        top: 0;
        background: mediumaquamarine
      }
    }
    .person4{
      width: 35px;
      height: 30px;
      border: 1px solid #000;
      position: absolute;
      right: 280px;
      top: 20px;
    }
    .person4-box{
      width: 50px;
      height: 80px;
      // border: 1px solid #000;
      position: absolute;
      left: 346px;
      top: 20px;
      #puke{
        width:50px;
        height: 80px;
        // border: 1px solid #000;
        position: absolute;
        left: 0;
        top: 0;
        background: mediumaquamarine
      }
    }
  }
</style>

