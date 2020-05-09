<template>
    <div>
      <div :id="id" :style="{width: width, height: height}"></div>
    </div>
</template>

<script>
  import echarts from 'echarts'
  import westeros from './theme/westeros'
  export default {
    name: 'lineEcharts',
    props: {
      id: {
        type: String,
        default: 'myChart'
      },
      width: {
        type: String,
        default: '100%'
      },
      height: {
        type: String,
        default: '100%'
      }
    },
    data() {
      return {
        chart: null
      }
    },
    mounted() {
      this.initChart()
    },
    methods: {
      initChart() {
        this.chart = echarts.init(document.getElementById(this.id),'westeros')

        this.chart.setOption({
          title: {
            text: '一周新闻访问量折线图'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data:['国际新闻','国内新闻','军事新闻','科技新闻','财经新闻','教育新闻','体育新闻','汽车新闻']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['周一','周二','周三','周四','周五','周六','周日']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name:'国际新闻',
              type:'line',  //pie->饼状图  line->折线图  bar->柱状图
              stack: '总量',
              data:[8200, 6320, 5010, 4340, 3400, 2300, 1100]
            },
            {
              name:'国内新闻',
              type:'line',
              stack: '总量',
              data:[2200, 3820, 1910, 2340, 4900, 3300, 1100]
            },
            {
              name:'军事新闻',
              type:'line',
              stack: '总量',
              data:[2500, 4302, 5010, 2540, 6900, 5300, 6410]
            },
            {
              name:'科技新闻',
              type:'line',
              stack: '总量',
              data:[5320, 7332, 9301, 6334, 5390, 4330, 1320]
            },
            {
              name:'财经新闻',
              type:'line',
              stack: '总量',
              data:[8820, 1932, 5901, 7304, 2900, 3300, 8200]
            },
            {
              name:'教育新闻',
              type:'line',
              stack: '总量',
              data:[3304, 4754, 2753, 5323, 6252, 8356, 2425]
            },
            {
              name:'体育新闻',
              type:'line',
              stack: '总量',
              data:[6234, 2361, 7344, 6142, 4131, 2863, 1534]
            },
            {
              name:'汽车新闻',
              type:'line',
              stack: '总量',
              data:[2523, 4157, 5742, 3751, 1532, 3452, 6532]
            }
          ]
        })
      }
    }
  }
</script>

<style scoped>

</style>
