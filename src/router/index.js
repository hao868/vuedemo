import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home/Home'
import News from '../components/News/News'
import Somes from '../components/Somes/Somes'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',component:Home,
    },
    {
      path: '/news',component:News,
    },
    {
      path: '/somes',component:Somes,
    },
    {
      path: '*',redirect:'/home',
    }
  ]
})
