import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Detail from "../views/Detail.vue"
import Create from "../views/Create.vue"
import Tag from "../views/Tag.vue"
import RealTime from "../views/RealTime"

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/posts/:id',
    name:"Detail",
    component:Detail,
    props:true
  },
  {
    path:'/Create',
    name:'Create',
    component:Create
  },
  {
    path:'/tags/:tag',
    name:'Tag',
    component:Tag,
    props:true
  },
  {
    path:'/realtime',
    component:RealTime
  }
  
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
