import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import store from "@/store";
import HomeView from '@/views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: '',
        component: () => import('@/views/HomeMain.vue')
      }
    ]
  },
  {
    // 找不到路由重定向到404页面
    path: "/:pathMatch(.*)",
    redirect: '/404'
  }
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});

//0.1.1版本使用生命周期函数来获取
// router.beforeEach((to, from, next) => {
//   if (to.path == '/404') {
//     var path = `${location.host}/404`;
//     if (typeof to.redirectedFrom?.fullPath != 'undefined') path = `${location.host}${to.redirectedFrom?.fullPath}`
//     store.commit('saveValue', {name: 'location', value: path})
//     next(true)
//   }
// })


export default router;
