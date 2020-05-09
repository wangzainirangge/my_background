<template>
  <div>
    <div id="main" ref="chart"></div>
  </div>
</template>

<script>
  var echarts = require("echarts");
  export default {
    name: "newEcharts",
    data() {
      return {
        data: {
          title: {
            text: "新闻访问总量折线图"
          },
          tooltip: {},
          xAxis: {
            data: ['国际新闻','国内新闻','军事新闻','科技新闻','财经新闻','教育新闻','体育新闻','汽车新闻']
          },
          yAxis: {},
          series: [
            {
              name: "销量",
              type: "bar",
              data: [32424, 39242, 43445, 54343, 67355, 24435,53675,76543]
            }
          ]
        }
      }
    },
    mounted() {
      echarts.init(this.$refs.chart).setOption(this.data);
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #main {
    width: 100%;
    height: 600px;
    background-color:#ddede0;
  }
</style>
