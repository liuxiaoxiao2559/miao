export default [
    {
        path: '/index',
        name: 'Home',
        component: () => import('./Home.vue')
    },
    //砍价页面
    {
        path: '/bargaining',
        name: 'bargaining',
        component: () => import('./bargaining.vue')
    },
    //礼券页面
    {
        path: '/lq',
        name: 'lq',
        component: () => import('./lq.vue')
    },
    //签到页面
    {
        path: '/signin',
        name: 'signin',
        component: () => import('./signin.vue')
    },
    //专栏页面
    {
        path: '/specialized',
        name: 'specialized',
        component: () => import('./specialized.vue')
    },
    //人气推荐
    {
        path: '/rqtj',
        name: 'rqtj',
        component: () => import('./rqtj.vue')
    },
    //电影专栏详情页
    {
        path: '/dydetail',
        name: 'dydetail',
        component: () => import('./dydetail.vue')
    },  
    //全民砍价详情页
    {
        path: '/spDetail',
        name: 'spDetail',
        component: () => import('./spDetail.vue')
    }
]