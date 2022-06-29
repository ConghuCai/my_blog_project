<template>
  <div style="margin-inline: 12%;">
    <div class="site-count">
      <el-card
        shadow="hover"
        v-for="item in countData"
        :key="item.name"
        :body-style="{ display: 'flex', padding: 0 }"
      >
        <i
          class="icon"
          :class="`el-icon-${item.icon}`"
          :style="{ background: item.color }"
        ></i>
        <div class="detail">
          <p class="num">{{ item.value }}</p>
          <p class="txt">{{ item.name }}</p>
        </div>
      </el-card>
    </div>
    <el-row
      :getter="20"
      class="site-stat"
    >
      <el-col
        :span="14"
        class="pie"
      >
        <div
          id="echart-pie"
          style="width:100% ;height:100%;"
        ></div>
        <el-divider class="divider"></el-divider>
        <div
          id="echart-line"
          style="width:100% ;height:100%;"
        ></div>
        <el-divider class="divider"></el-divider>
        <div
          id="echart-bar"
          style="width:100% ;height:100%;"
        ></div>
      </el-col>
      <el-col
        :span="10"
        class="stat-list"
      >
        <el-card shadow="hover">
          <p style="front-size:14px; color: #999999;">热门文章</p>
          <el-divider></el-divider>
          <el-table :data="articleTableData">
            <el-table-column
              show-overflow-tooltip
              v-for="(val, key) in articleTableLabel"
              :key="key"
              :prop="key"
              :label="val"
            >
            </el-table-column>
          </el-table>
        </el-card>
        <el-card shadow="hover">
          <p style="front-size:14px; color: #999999;">热门专栏</p>
          <el-divider>
          </el-divider>
          <el-table :data="kindTableData">
            <el-table-column
              show-overflow-tooltip
              v-for="(val, key) in kindTableLabel"
              :key="key"
              :prop="key"
              :label="val"
            >
            </el-table-column>
          </el-table>
        </el-card>
        <el-card shadow="hover">
          <p style="front-size:14px; color: #999999;">热门标签</p>
          <el-divider>
          </el-divider>
          <el-table :data="tagTableData">
            <el-table-column
              show-overflow-tooltip
              v-for="(val, key) in tagTableLabel"
              :key="key"
              :prop="key"
              :label="val"
            >
            </el-table-column>
          </el-table>
        </el-card>
        <el-card shadow="hover">
          <p style="front-size:14px; color: #999999;">活跃用户</p>
          <el-divider>
          </el-divider>
          <el-table :data="userTableData">
            <el-table-column
              show-overflow-tooltip
              v-for="(val, key) in userTableLabel"
              :key="key"
              :prop="key"
              :label="val"
            >
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>
    <my-icp></my-icp>
  </div>
</template>

<style lang="scss" scoped>
.site-count {
  margin-top: 4%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .el-card {
    width: 32%;
    margin-bottom: 20px;
  }
  .icon {
    font-size: 30px;
    width: 80px;
    height: 80px;
    text-align: center;
    line-height: 80px;
    color: #fff;
  }
  .detail {
    margin-left: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .num {
      font-size: 30px;
      margin-bottom: 10px;
    }
    .txt {
      font-size: 14px;
      text-align: center;
      color: #999999;
    }
  }
}

.site-stat {
  margin-top: 20px;
  .pie {
    height: 500px;
    margin-bottom: 15px;
    padding-right: 10px;
    .divider {
      margin-top: 10%;
      margin-bottom: 10%;
    }
  }
  .stat-list {
    padding-left: 10px;
    margin-bottom: 20vh;
    .el-card {
      margin-bottom: 15px;
    }
  }
}
</style>

<script>
import * as echarts from 'echarts'
import { getArticleTableDataApi, getBarDataApi, getKindTableDataApi, getLineDataApi, getPieDataApi, getStatDataApi, getTagTableDataApi, getUserTableDataApi } from '../api/data'

export default {
  data() {
    return {
      title: '首页',
      countData: [
        {
          name: '站点访问量',
          value: '4.83k',
          icon: 'success',
          color: '#2ec7c9'
        },
        {
          name: '博文阅读量',
          value: '2.32k',
          icon: 'star-on',
          color: '#ffb980'
        },
        {
          name: '评论',
          value: '163',
          icon: 's-goods',
          color: '#5ab1ef'
        },
        {
          name: '留言',
          value: '72',
          icon: 'success',
          color: '#2ec7c9'
        },
        {
          name: '博文总数',
          value: '99',
          icon: 'star-on',
          color: '#ffb980'
        },
        {
          name: '点赞转发',
          value: '519',
          icon: 's-goods',
          color: '#5ab1ef'
        }
      ],
      pieData: {
        // 标题
        title: {
          text: '博文分布',
          x: 'left', // 标题位置
          textStyle: { // 标题内容的样式
            color: '#000',
            fontStyle: 'normal',
            fontWeight: 100,
            fontSize: 16 // 主题文字字体大小，默认为18px
          }
        },
        // 工具箱
        // 保存图片
        toolbox: {
          show: true,
          feature: {
            saveAsImage: {
              show: true
            }
          }
        },
        // stillShowZeroSum: true,
        // 鼠标划过时饼状图上显示的数据
        tooltip: {
          trigger: 'item',
          formatter: '{b}:{c}篇 ({d}%)'
        },
        // 图例
        legend: { // 图例  标注各种颜色代表的模块
          // orient: 'vertical',//图例的显示方式  默认横向显示
          bottom: 10, // 控制图例出现的距离  默认左上角
          left: 'center', // 控制图例的位置
          // itemWidth: 16,//图例颜色块的宽度和高度
          // itemHeight: 12,
          textStyle: { // 图例中文字的样式
            color: '#000',
            fontSize: 16
          },
          data: ['Java', 'Golang', 'Vue', 'MySql', 'Redis', '数据结构和算法']// 图例上显示的饼图各模块上的名字
        },
        // 饼图中各模块的颜色
        // 饼图数据
        series: {
          // name: 'bug分布',
          type: 'pie', // echarts图的类型   pie代表饼图
          radius: '55%', // 饼图中饼状部分的大小所占整个父元素的百分比
          center: ['50%', '50%'], // 整个饼图在整个父元素中的位置
          // data:''               //饼图数据
          data: [ // 每个模块的名字和值
            { name: 'Java', value: 50 },
            { name: 'Golang', value: 20 },
            { name: 'Vue', value: 10 },
            { name: 'MySql', value: 2 },
            { name: 'Redis', value: 5 },
            { name: '数据结构和算法', value: 12 }
          ]
        }
      },
      lineData: {
        // 标题
        title: {
          text: '网站访问',
          x: 'left', // 标题位置
          textStyle: { // 标题内容的样式
            color: '#000',
            fontStyle: 'normal',
            fontWeight: 100,
            fontSize: 16 // 主题文字字体大小，默认为18px
          }
        },
        // 工具箱
        // 保存图片
        toolbox: {
          show: true,
          feature: {
            saveAsImage: {
              show: true
            }
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: '{b} ({c})'
        },
        // 图例
        legend: {
          data: ['访问量', '评论留言']
        },
        // x轴
        xAxis: {
          data: ['11-29', '11-30', '11-31', '12-01', '12-02', '12-03']
        },
        // y轴没有显式设置，根据值自动生成y轴
        yAxis: {},
        // 数据-data是最终要显示的数据
        series: [
          {
            name: '访问量',
            type: 'line',
            data: [40, 20, 35, 60, 55, 10]
          },
          {
            name: '评论留言',
            type: 'line',
            data: [10, 30, 40, 45, 35, 30]
          }]
      },

      barData: {
        title: {
          text: '专栏平均互动量',
          x: 'left', // 标题位置
          textStyle: { // 标题内容的样式
            color: '#000',
            fontStyle: 'normal',
            fontWeight: 100,
            fontSize: 16 // 主题文字字体大小，默认为18px
          }
        },
        // 工具箱
        // 保存图片
        toolbox: {
          show: true,
          feature: {
            saveAsImage: {
              show: true
            }
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: '{b}-{a} ({c})'
        },
        // 图例
        legend: {
          data: ['点击阅读', '点赞转发留言']
        },
        // x轴
        xAxis: {
          type: 'category',
          data: ['Java', 'Vue', 'Golang', 'Redis', '博主精选', 'MySql']
        },
        // y轴没有显式设置，根据值自动生成y轴
        yAxis: {},
        // 数据-data是最终要显示的数据
        series: [
          {
            name: '点击阅读',
            type: 'bar',
            data: [4.3, 20, 35, 60, 55, 10]
          },
          {
            name: '点赞转发留言',
            type: 'bar',
            data: [10, 30, 40, 45, 35, 30]
          }]
      },

      articleTableLabel: {
        id: 'ID',
        name: '标题',
        click: '点击量',
        likeShare: '点赞转发',
        comment: '评论'
      },
      articleTableData: [
        {
          id: '21ae2eb9fa484e84ae37a812700d2fa7',
          name: 'Linux安装nodejs+cnpm+vue+vue/cli，创建部署vue项目的步骤',
          click: 2135,
          likeShare: 137,
          comment: 7
        },
        {
          id: '53d15432772e4a39af1e21e71765b212',
          name: '2021-11-13 SpringBoot整合Dubbo的步骤',
          click: 1917,
          likeShare: 35,
          comment: 21
        },
        {
          id: '6fb53b2a9d2d4bd288f80f4dbb3360bd',
          name: '安装GO开发工具和配置Vscode开发环境的记录',
          click: 1627,
          likeShare: 10,
          comment: 2
        },
        {
          id: '724ba273e5ef4813af5b0d52dce196fa',
          name: '2021-10-27 SSM整合的开发思路',
          click: 991,
          likeShare: 16,
          comment: 13
        },
        {
          id: 'f2ab12575c774a778fd5f3063e6d5219',
          name: '2021-11-13 记录：Java连接远程Redis的报错信息和解决办法',
          click: 671,
          likeShare: 10,
          comment: 0
        }
      ],

      kindTableLabel: {
        name: '专栏',
        aClick: '平均点击',
        aInter: '点赞转发留言'
      },
      kindTableData: [
        {
          name: 'Java',
          aClick: 500.1,
          aInter: 35.3
        },
        {
          name: 'Redis',
          aClick: 121.1,
          aInter: 21.6
        },
        {
          name: '数据结构和算法',
          aClick: 100.9,
          aInter: 16.3
        },
        {
          name: 'Vue',
          aClick: 78.3,
          aInter: 10.2
        },
        {
          name: 'Golang',
          aClick: 14.7,
          aInter: 0.5
        }
      ],

      tagTableLabel: {
        name: '标签',
        aClick: '平均点击',
        aInter: '点赞转发留言'
      },
      tagTableData: [
        {
          name: 'SpringBoot',
          aClick: 1231.3,
          aInter: 53.1
        },
        {
          name: '建站相关',
          aClick: 1001.2,
          aInter: 14.4
        }, {
          name: '踩坑记录',
          aClick: 922,
          aInter: 12.1
        }
      ],

      userTableLabel: {
        login: 'Gitee账号',
        name: '昵称',
        inter: '互动量'
      },
      userTableData: [
        {
          login: 'Itarikun',
          name: '碇',
          inter: 210
        },
        {
          login: 'Ayanami',
          name: '绫波',
          inter: 101
        },
        {
          login: 'Asuka',
          name: '香',
          inter: 201
        }
      ]
    }
  },
  mounted() {
    this.getPie()
    this.getLine()
    this.getBar()

    this.pagePieDataInit()
    this.pageStatDataInit()
    this.pageLineDataInit()
    this.pageBarDataInit()

    this.pageArticleDataInit()
    this.pageKindDataInit()
    this.pageTagDataInit()
    this.pageUserDataInit()
  },
  methods: {
    getPie() {
      // 绘制图表
      const myChart = echarts.init(document.getElementById('echart-pie'))
      // 指定图表的配置项和数据
      var option = this.pieData
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option)
    },
    getLine() {
      // 初始化ehcharts实例
      var myChart = echarts.init(document.getElementById('echart-line'))
      // 指定图表的配置项和数据
      var option = this.lineData
      // 使用刚刚指定的配置项和数据项显示图表
      myChart.setOption(option)
    },

    getBar() {
      var myChart = echarts.init(document.getElementById('echart-bar'))
      var option = this.barData
      myChart.setOption(option)
    },

    pagePieDataInit() {
      // 非root用户，只展示前端的模拟数据
      getPieDataApi().then(res => {
        if (res.code === 403) {
          return
        }
        const length = res.data.legend.length
        const pieName = new Array(length)
        const pieValue = new Array(length)
        for (let i = 0; i < length; i++) {
          pieName[i] = res.data.legend[i]

          pieValue[i] = { name: pieName[i], value: res.data.value[i] }
        }

        this.pieData.legend.data = pieName
        this.pieData.series.data = pieValue
        this.getPie()
      })
    },

    pageStatDataInit() {
      getStatDataApi().then(res => {
        if (res.code === 403) {
          return
        }
        this.countData = res.data
      })
    },

    pageLineDataInit() {
      getLineDataApi().then(res => {
        if (res.code === 403) {
          return
        }
        const length = res.data.legend.length
        var series = new Array(length)
        for (let i = 0; i < length; i++) {
          series[i] = { name: res.data.legend[i], type: 'line', data: res.data.value[i] }
        }
        this.lineData.legend.data = res.data.legend
        this.lineData.series = series
        this.lineData.xAxis.data = res.data.axis
        this.getLine()
      })
    },

    pageBarDataInit() {
      getBarDataApi().then(res => {
        if (res.code === 403) {
          return
        }
        const length = res.data.legend.length
        const series = new Array(length)
        for (let i = 0; i < length; i++) {
          series[i] = { name: res.data.legend[i], type: 'bar', data: res.data.value[i] }
        }
        this.barData.legend.data = res.data.legend
        this.barData.series = series
        this.barData.xAxis.data = res.data.axis
        this.getBar()
      })
    },

    pageArticleDataInit() {
      getArticleTableDataApi().then(res => {
        if (res.code === 403) {
          return
        }
        this.articleTableData = res.data
      })
    },

    pageKindDataInit() {
      getKindTableDataApi().then(res => {
        if (res.code === 403) {
          return
        }
        this.kindTableData = res.data
      })
    },

    pageTagDataInit() {
      getTagTableDataApi().then(res => {
        if (res.code === 403) {
          return
        }
        this.tagTableData = res.data
      })
    },

    pageUserDataInit() {
      getUserTableDataApi().then(res => {
        if (res.code === 403) {
          return
        }
        this.userTableData = res.data
      })
    }
  },
  created() {
    this.$store.commit('getPageName', this.title)
  }
}
</script>
