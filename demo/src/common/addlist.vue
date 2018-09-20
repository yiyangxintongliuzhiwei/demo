<template>
    <div>
        <!-- 添加用户组件 -->
        <div class="content">
          <div class="content-box">
            <span class="title">{{addlistname}}</span>
            <div class="listcopy">
            <ul class="list">
              <li class="list-1" v-for="item in listdata">
                <span>{{item.title}}</span>
                <input type="text" placeholder="请输入用户名">
              </li>
              <button @click="sure()">确定</button>
            </ul>
            </div>
          </div>
          <div class="close" @click="close()">X</div>
        </div>
    </div>
</template>
<script>
export default {
  props: ['addlistname','listdatas'],//listdatas是父组件传回来的数组
  data () {
    return {
      listdata:[{title: ''}]
    }
  },
  mounted() {
    this.listdata = this.listdatas
  },
  methods: {
    close() {
      this.$emit('sure', 'no') //给父组件传一个值 no
    },
    sure() {
      this.$emit('sure', 'ok') //给父组件传一个值 ok
    }
  }
}
</script>

<style lang="scss">
*{
    margin: 0;
    padding: 0;
    list-style: none;
    outline: none;
}
.content{
    width: 310px;
    height: 450px;
    border: 1px solid #000;
    border-radius: 8px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -155px;
    margin-top: -225px;
    background: #958181;
    .content-box{
      width: 300px;
      height: 440px;
      background: skyblue;
      position: absolute;
      left: 50%;
      top: 50%;
      margin-left: -150px;
      margin-top: -220px;
      border: 1px solid #000;
      border-radius: 6px;
      overflow: hidden;
      .title{
        position: absolute;
        left: 50%;
        top: 10px;
        margin-left: -50px;
        width: 100px;
        height: 25px;
        font-size: 20px;
        line-height: 25px;
        text-align: center;
        color: #000;
      }
      .listcopy{
        width: 290px;
        height: 400px;
        border-radius: 10px;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -145px;
        margin-top: -184px;
        overflow: hidden;
      .list{
        width: 308px;
        height: 400px;
        border-radius: 10px;
        position: absolute;
        left: 0%;
        top: 0%;
        overflow-y: auto;
        button{
         width: 50px;
         height: 30px;
         background: mediumseagreen;
         line-height: 30px;
         font-size: 14px;
         color: #310D0D;
         text-align: center;
         margin-left: -16px; 
         outline: none;
        }
        .list-1{
          width: 280px;
          height: 60px;
          margin-left: 5px;
          margin-bottom: 5px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
        span{
            width: 100%;
            height: 28px;
            line-height: 28px;
            font-size: 16px;
            color: #310D0D;
            text-align: left;
        }
        input{
            width: 96%;
            height: 28px;
            outline: none;
            box-sizing: border-box;
            padding-left: 10px;
            border-radius: 6px;
            font-size: 14px;
            color: #000
        }
        } 
       }
      }
    }
    .close{
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: #ffffff;
      border: 1px solid #000;
      line-height: 20px;
      text-align: center;
      font-size: 18px;
      color: #000;
      position: absolute;
      right: -5px;
      top: -5px;
      cursor: pointer;
    }
}
</style>

