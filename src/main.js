// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from './btnPermission'
import ElementUI from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'
import './assets/iconfont/iconfont.css'
import 'font-awesome/css/font-awesome.css'

import App from './App.vue'
import router from './router'
import store from './vuex'
import i18n from './i18n/i18n'

import api from './api/index'
import { get, post, patch, put, drop} from './api/auto/request'

import '../static/UEditor/ueditor.config'
import '../static/UEditor/ueditor.all'
import VueUeditorWrap from 'vue-ueditor-wrap' // ES6 Module
Vue.component('vue-ueditor-wrap', VueUeditorWrap)


Vue.config.productionTip = false
Vue.use(ElementUI)


Vue.prototype.$api = api // 封装了直接用
// 定义全局变量
Vue.prototype.$post = post
Vue.prototype.$drop = drop
Vue.prototype.$get = get
Vue.prototype.$patch = patch
Vue.prototype.$put = put


Vue.prototype.setCookie = function(c_name,value,expiredays) {
  var exdate=new Date()
  exdate.setDate(exdate.getDate()+expiredays)
  document.cookie=c_name+ "=" +escape(value)+
    ((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
};
Vue.prototype.getCookie=function(c_name) {
  if (document.cookie.length>0)
  {
    var  c_start=document.cookie.indexOf(c_name + "=")
    if (c_start!=-1)
    {
      c_start=c_start + c_name.length+1
      var c_end=document.cookie.indexOf(";",c_start)
      if (c_end==-1) c_end=document.cookie.length
      return unescape(document.cookie.substring(c_start,c_end))
    }
  }
  return ""
};


//  获取角色信息，根据用户权限动态加载路由
router.beforeEach((to, from, next) => {
  console.log(store.getters.token)
  // debugger

  if (store.getters.token) {
    store.dispatch('setToken', store.getters.token)
    if (to.path === '/login') {
      next({path: '/'})
    } else {
      if (!store.getters.info.role) {
        // const role = ['/markdown', '/erji', '/erji2', '/siji', '/wuji']
        !async function getAddRouters () {
          // 省略 axios 请求代码 通过 token 向后台请求用户权限等信息，这里用假数据赋值
          await store.dispatch('getInfo', {
            role: 'superAdmin',
            permissions: '超级管理员'
          })
          await store.dispatch('newRoutes', store.getters.info.role)
          console.log(store.getters.addRouters)
          await router.addRoutes(store.getters.addRouters)
          next({path: '/index'})
        }()
      } else {
        let is404 = to.matched.some(record => {
          if(record.meta.role){
            return record.meta.role.indexOf(store.getters.info.role) === -1
          }
        })
        if(is404){
          next({path: '/404'})
          return false
        }
        next()
      }
    }
  } else {
    if (to.path === '/login') {
      next()
    }
    next({path: '/login'})

  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App),
  components: {App},
  template: '<App/>'
})
