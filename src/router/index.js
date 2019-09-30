import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home/Home'
  import Main from '../components/Home/Main/Main'
    import Nav1 from '../components/Home/Main/Nav1/Nav1'
    import Nav2 from '../components/Home/Main/Nav2/Nav2'
import News from '../components/News/News'
import Somes from '../components/Somes/Somes'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',component:Home,
      redirect: '/home/nav1',
      children:[
        {path:'/home/nav1',component:Nav1},
        {path:'/home/nav2',component:Nav2}
      ]
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
