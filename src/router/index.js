import en from '../i18n/lang/en'
import Vue from 'vue'
import Router from 'vue-router'
import CommerViews from '@/views/commerViews'
import Login from '@/views/login/index'
import Layout from '@/views/layout/layout'
import HomeMain from '@/views/index/mainIndex'
import addNationalNews from '@/views/nationalNews/addNationalNews'
import upadteNationalNews from '@/views/nationalNews/upadteNationalNews'
import nationalNewsDraftBox from '@/views/nationalNews/nationalNewsDraftBox'

// 不是必须加载的组件使用懒加载

//const Upload = () => import('@/views/upload/upload')
//const Markdown = () => import('@/views/editor/markdownView')
//const WangeditorView = () => import('@/views/editor/wangeditorView')
const NotFound = () => import('@/page404')


const addInternationalNews = () => import('@/views/internationalNews/addInternationalNews')
const InternationalNewsDraftBox = () => import('@/views/internationalNews/InternationalNewsDraftBox')
const upadteInternationalNews = () => import('@/views/internationalNews/upadteInternationalNews')
const addMilitaryNews = () => import('@/views/militaryNews/addMilitaryNews')
const upadteMilitaryNews = () => import('@/views/militaryNews/upadteMilitaryNews')
const militaryNewsDraftBox = () => import('@/views/militaryNews/militaryNewsDraftBox')
const addScienceNews = () => import('@/views/scienceNews/addScienceNews')
const upadteScienceNews = () => import('@/views/scienceNews/upadteScienceNews')
const scienceNewsDraftBox = () => import('@/views/scienceNews/scienceNewsDraftBox')
const addFinancialNews = () => import('@/views/financialNews/addFinancialNews')
const upadteFinancialNews = () => import('@/views/financialNews/upadteFinancialNews')
const financialNewsDraftBox = () => import('@/views/financialNews/financialNewsDraftBox')
const addEducationNews = () => import('@/views/educationNews/addEducationNews')
const upadteEducationNews = () => import('@/views/educationNews/upadteEducationNews')
const educationNewsDraftBox = () => import('@/views/educationNews/educationNewsDraftBox')
const addSportsNews = () => import('@/views/sportsNews/addSportsNews')
const updateSportsNews = () => import('@/views/sportsNews/updateSportsNews')
const sportsNewsDraftBox = () => import('@/views/sportsNews/sportsNewsDraftBox')
const addautomotiveNews = () => import('@/views/automotiveNews/addautomotiveNews')
const updateautomotiveNews = () => import('@/views/automotiveNews/updateautomotiveNews')
const automotiveNewsDraftBox = () => import('@/views/automotiveNews/automotiveNewsDraftBox')
const addBackgroundUser = () => import('@/views/userManagement/addBackgroundUser')
const managementBackgroundUser = () => import('@/views/userManagement/managementBackgroundUser')
const addOrdinaryUser = () => import('@/views/userManagement/addOrdinaryUser')
const managementUser = () => import('@/views/userManagement/managementUser')


Vue.use(Router)
let routeName = en.routeName
let defaultRouter = [
  { path: '/',
    redirect: '/index',
    hidden: true,
    children: []
  },
  {
    path: '/login',
    component: Login,
    name: '',
    hidden: true,
    children: []
  },
  {
    path: '/index',
    iconCls: 'fa fa-dashboard', // 图标样式class
    name: routeName.home,
    component: Layout,
    alone: true,
    children: [
      {
        path: '/index',
        iconCls: 'fa fa-dashboard', // 图标样式class
        name: '首页',
        component: HomeMain,
        children: []
      }
    ]
  },
  {
    path: '/404',
    component: NotFound,
    name: '404',
    hidden: true,
    children: []
  },
]

let addRouter = [
  //国际新闻
  {
    path: '/',
    iconCls: 'el-icon-tickets', // 图标样式class
    name: "InternationalNews",
    component: Layout,
    children: [
      {
        path: '/addInternationalNews',
        iconCls: 'el-icon-edit-outline', // 图标样式class
        name: "addInternationalNews",
        component: addInternationalNews,
        children: []
      },
      {
        path: '/upadteInternationalNews',
        iconCls: 'el-icon-edit-outline', // 图标样式class
        name: "upadteInternationalNews",
        component: upadteInternationalNews,
        children: []
      },
      {
        path: '/InternationalNewsDraftBox',
        iconCls: 'el-icon-edit-outline', // 图标样式class
        name: "InternationalNewsDraftBox",
        component: InternationalNewsDraftBox,
        children: []
      }
    ]
  },
  //国内新闻
  {
    path: '/',
    iconCls: 'fa fa-paw', // 图标样式class
    name: "nationalNews",
    component: Layout,
    children: [
      {
        path: '/addNationalNews',
        iconCls: 'fa fa-life-ring', // 图标样式class
        name: "addNationalNews",
        component: addNationalNews,
        children: []
      },
      {
        path: '/upadteNationalNews',
        iconCls: 'fa fa-life-ring', // 图标样式class
        name: "upadteNationalNews",
        component: upadteNationalNews,
        children: []
      },
      {
        path: '/nationalNewsDraftBox',
        iconCls: 'fa fa-life-ring', // 图标样式class
        name: "nationalNewsDraftBox",
        component: nationalNewsDraftBox,
        children: []
      }
    ]
  },
  //军事新闻
  {
    path: '/',
    iconCls: 'fa fa-exchange', // 图标样式class
    name: "militaryNews",
    component: Layout,
    children: [
      {
        path: '/addMilitaryNews',
        iconCls: 'fa fa-life-ring', // 图标样式class
        name: "addMilitaryNews",
        component: addMilitaryNews,
        children: []
      },
      {
        path: '/upadteMilitaryNews',
        iconCls: 'fa fa-life-ring', // 图标样式class
        name: "upadteMilitaryNews",
        component: upadteMilitaryNews,
        children: []
      },
      {
        path: '/militaryNewsDraftBox',
        iconCls: 'fa fa-life-ring', // 图标样式class
        name: "militaryNewsDraftBox",
        component: militaryNewsDraftBox,
        children: []
      }
    ]
  },
  //科技新闻
  {
    path: '/',
    iconCls: 'fa fa-universal-access', // 图标样式class
    name: "scienceNews",
    component: Layout,
    children: [
      {
        path: '/addScienceNews',
        iconCls: 'fa fa-life-ring', // 图标样式class
        name: "addScienceNews",
        component: addScienceNews,
        children: []
      },
      {
        path: '/upadteScienceNews',
        iconCls: 'fa fa-life-ring', // 图标样式class
        name: "upadteScienceNews",
        component: upadteScienceNews,
        children: []
      },
      {
        path: '/scienceNewsDraftBox',
        iconCls: 'fa fa-life-ring', // 图标样式class
        name: "scienceNewsDraftBox",
        component: scienceNewsDraftBox,
        children: []
      }
    ]
  },
  //财经新闻
  {
    path: '/',
    iconCls: 'fa fa-newspaper-o', // 图标样式class
    name: "financialNews",
    component: Layout,
    children: [
      {
        path: '/addFinancialNews',
        iconCls: 'fa fa-life-ring', // 图标样式class
        name: "addFinancialNews",
        component: addFinancialNews,
        children: []
      },
      {
        path: '/upadteFinancialNews',
        iconCls: 'fa fa-life-ring', // 图标样式class
        name: "upadteFinancialNews",
        component: upadteFinancialNews,
        children: []
      },
      {
        path: '/financialNewsDraftBox',
        iconCls: 'fa fa-life-ring', // 图标样式class
        name: "financialNewsDraftBox",
        component: financialNewsDraftBox,
        children: []
      }
    ]
  },
  //教育新闻
  {
    path: '/',
    iconCls: 'fa fa-server', // 图标样式class
    name: "educationNews",
    component: Layout,
    children: [
      {
        path: '/addEducationNews',
        iconCls: 'fa fa-life-ring', // 图标样式class
        name: "addEducationNews",
        component: addEducationNews,
        children: []
      },
      {
        path: '/upadteEducationNews',
        iconCls: 'fa fa-life-ring', // 图标样式class
        name: "upadteEducationNews",
        component: upadteEducationNews,
        children: []
      },
      {
        path: '/educationNewsDraftBox',
        iconCls: 'fa fa-life-ring', // 图标样式class
        name: "educationNewsDraftBox",
        component: educationNewsDraftBox,
        children: []
      }
    ]
  },
  //体育新闻
  {
    path: '/',
    iconCls: 'fa fa-cloud-upload', // 图标样式class
    name: "sportsNews",
    component: Layout,
    children: [
      {
        path: '/addSportsNews',
        iconCls: 'fa fa-life-ring', // 图标样式class
        name: "addSportsNews",
        component: addSportsNews,
        children: []
      },
      {
        path: '/updateSportsNews',
        iconCls: 'fa fa-life-ring', // 图标样式class
        name: "updateSportsNews",
        component: updateSportsNews,
        children: []
      },
      {
        path: '/sportsNewsDraftBox',
        iconCls: 'fa fa-life-ring', // 图标样式class
        name: "sportsNewsDraftBox",
        component: sportsNewsDraftBox,
        children: []
      }
    ]
  },
  //汽车新闻
  {
    path: '/',
    iconCls: 'el-icon-edit', // 图标样式class
    name: "automotiveNews",
    component: Layout,
    children: [
      {
        path: '/addautomotiveNews',
        iconCls: 'fa fa-life-ring', // 图标样式class
        name: "addautomotiveNews",
        component: addautomotiveNews,
        children: []
      },
      {
        path: '/updateautomotiveNews',
        iconCls: 'fa fa-life-ring', // 图标样式class
        name: "updateautomotiveNews",
        component: updateautomotiveNews,
        children: []
      },
      {
        path: '/automotiveNewsDraftBox',
        iconCls: 'fa fa-life-ring', // 图标样式class
        name: "automotiveNewsDraftBox",
        component: automotiveNewsDraftBox,
        children: []
      }
    ]
  },
  //用户管理
  {
    path: '/',
    iconCls: 'el-icon-setting', // 图标样式class
    name: "userManagement",
    component: Layout,
    children: [
      {
        path: '/addBackgroundUser',
        iconCls: 'fa fa-life-ring', // 图标样式class
        name: "addBackgroundUser",
        component: addBackgroundUser,
        children: []
      },
      {
        path: '/managementBackgroundUser',
        iconCls: 'fa fa-life-ring', // 图标样式class
        name: "managementBackgroundUser",
        component: managementBackgroundUser,
        children: []
      },
      {
        path: '/addOrdinaryUser',
        iconCls: 'fa fa-life-ring', // 图标样式class
        name: "addOrdinaryUser",
        component: addOrdinaryUser,
        children: []
      },
      {
        path: '/managementUser',
        iconCls: 'fa fa-life-ring', // 图标样式class
        name: "managementUser",
        component: managementUser,
        children: []
      },
    ]
  },
  /*{
    path: '/',
    iconCls: 'el-icon-setting', // 图标样式class
    name: routeName.systemSettings,
    component: Layout,
    meta: {role: ['superAdmin']},
    children: [
      {
        path: '/navClassifies',
        iconCls: 'el-icon-menu', // 图标样式class
        name: routeName.navMenu,
        component: NavClassify,
        children: []
      }
    ]
  },*/
  { path: '*',
    redirect: '/404',
    hidden: true,
    children: []
  },

]
export default new Router({
  routes: defaultRouter
})
export {defaultRouter, addRouter}
