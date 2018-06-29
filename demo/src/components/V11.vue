<template>
  <view-template class="a2-v11" :interval="30" @interval="loadData">
    <swiper :options="swiperOption" class="a2-v11-swiper">
      <swiper-slide class="a2-v11-swiper-slide">
        <div class="title">话务量</div>
        <div class="word">
          <div class="word1">1</div>
          <div class="word2">2}</div>
        </div>
        <div class="list">
          <div class="list-1" v-for="(item, index) in listData1" :key="index">
            <div class="name">{{item.name}}</div>
            <div class="yesterday">
              <counter :data="item.KPI_VALUE1" :config="config1"></counter>
            </div>
            <div class="today">
              <counter :data="item.KPI_VALUE2" :config="config2"></counter>
            </div>
          </div>
        </div>
        <div id="a2-v11-charts1"></div>
        <div class="a2-v11-charts1-word">
          <div class="num">
            <counter :data="num1" :config="config3"></counter>
          </div>
          <div class="index-name">掉话率</div>
        </div>
        <div id="a2-v11-charts2"></div>
        <div class="a2-v11-charts2-word">
          <div class="num">
            <counter :data="num2" :config="config3"></counter>
          </div>
          <div class="index-name">接通率</div>
        </div>
      </swiper-slide>
      <swiper-slide class="a2-v11-swiper-slide">
        <div class="title">流量</div>
        <div class="word">
          <div class="word1">{{flowName[dataType - 1][0]}}</div>
          <div class="word2">{{flowName[dataType - 1][1]}}</div>
        </div>
        <div class="list">
          <div class="list-1" v-for="(item, index) in listData2" :key="index">
            <div class="name">{{item.name}}</div>
            <div class="yesterday">
              <counter :data="item.KPI_VALUE1" :config="config1"></counter>
            </div>
            <div class="today">
              <counter :data="item.KPI_VALUE2" :config="config2"></counter>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <span class="a2-v11-swiper-roam"></span>
  </view-template>
</template>
<script>
export default {

}
</script>
