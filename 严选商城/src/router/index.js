import Vue from 'vue'
import VueRouter from 'vue-router'


import HomeRoutes from '../views/home/router'
import TypeRoutes from '../views/type/router'


import Main from '../views/home/main'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    redirect: '/index',
    // 上：import HomeRoutes from '../views/home/router'
    //children嵌套他的子路由
    children: [
      ...HomeRoutes,
    ]
  },
  {
    path: '/type',
    name: 'typesMain',
    component: () => import('../views/type/main.vue'),
    redirect: '/type/index',
    children: [
      ...TypeRoutes
    ],
  }
]

const router = new VueRouter({
  routes
})

export default router
