import vueRouter from 'vue-router'
import Home from '../components/Home/Home'
    import Nav1 from '../components/Home/Main/Nav1/Nav1'
    import Nav2 from '../components/Home/Main/Nav2/Nav2'
import News from '../components/News/News'
import Somes from '../components/Somes/Somes'



export default new vueRouter({
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
