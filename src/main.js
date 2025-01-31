import Vue from 'vue'

import Cookies from 'js-cookie'
import 'normalize.css/normalize.css' // a modern alternative to CSS resets
import Element from 'element-ui'
import './styles/element-variables.scss'
// import enLang from 'element-ui/lib/locale/lang/en'// 如果使用中文语言包请默认支持，无需额外引入，请删除该依赖
import '@/styles/index.scss' // global css
import App from './App'
import store from './store'
import router from './router'

import './icons' // icon
import './permission' // permission control
import './utils/error-log' // error log

import * as filters from './filters' // global filters
import moment from 'moment'
// 引入自定义的
import { addDateRange, selectDictLabel, handleTree, getAge, getCurrentTimeType } from '@/utils/his-utils'
import { getDataByType } from '@/api/system/dict/data'
// 全局方法挂载
Vue.prototype.addDateRange = addDateRange
Vue.prototype.selectDictLabel = selectDictLabel
Vue.prototype.getDataByType = getDataByType // 加载全局的查询 根据字典类型查询字典数据[基本每个页面都要使用]
Vue.prototype.handleTree = handleTree // 加载全局的查询 加载全局构造数方法
Vue.prototype.getAge = getAge // 加载全局的查询 加载全局构造数方法
Vue.prototype.getCurrentTimeType = getCurrentTimeType
Vue.prototype.moment = moment
// 全局挂载消息框
Vue.prototype.msgSuccess = function(msg) {
  this.$message({ showClose: true, message: msg, type: 'success' })
}
Vue.prototype.msgError = function(msg) {
  this.$message({ showClose: true, message: msg, type: 'error' })
}
Vue.prototype.msgInfo = function(msg) {
  this.$message.info(msg)
}
Vue.use(Element, {
  size: Cookies.get('size') || 'medium' // set element-ui default size
  // locale: enLang // 如果使用中文，无需设置，请删除
})
// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
