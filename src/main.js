// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import vueRouter from 'vue-router'
import router from './router'
import Axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '../theme/index.css' //主题
import Moment from 'moment'


//阻止启动时的生产提示，默认true
Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(vueRouter)

//将axios全局挂载到VUE原型上
Vue.prototype.$axios = Axios

// 绑定 moment 进行时间格式化 ✔
Vue.prototype.$moment = Moment;//赋值使用

Vue.prototype.HOST = '/api'


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
