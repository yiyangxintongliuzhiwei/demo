import china from '../../static/data/china.js'
import echarts from 'echarts';
// echarts.registerMap('china', china);
import chinaPosition from '../../static/data/chinaPosition.js'
export default {
  option1: {
    geo: {
      map: 'china',
      roam: true,
      zoom: 1,
      label: {
        show: true,
        position: ['50%', '50%'],
        color: '#fff',
        fontSize: 14
      },
      itemStyle: {
        areaColor: '#0b1b41',
        borderColor: '#738ec3'
      },
      silent:false,
    },
    series: [
      {
        type: 'effectScatter',
        coordinateSystem: 'geo',
        progressiveThreshold: 2,
        data: [
          {value: [116.46, 39.92]},
          {value: [121.48, 31.22]}
        ],
        symbol: 'circle',
        symbolSize: 15,
        itemStyle: {
            color: '#2EFFD5'
        }
      },
      {
        type: 'scatter',
        coordinateSystem: 'geo',
        progressiveThreshold: 2,
        data: [
          {value: [112.53, 37.87]},
          {value: [123.38, 41.8]},
          {value: [103.49, 36.03]},
          {value: [108.93, 34.27]},
          {value: [110.98, 35.02]}
        ],
        symbol: 'circle',
        symbolSize: 10,
        itemStyle: {
            color: '#2EFFD5'
        }
      }
    ]
  }
}