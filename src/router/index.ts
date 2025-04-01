import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/components/AppBarComponent.vue"),
    // children: [
    //   {
    //     path: '/merchants-detail-view',
    //     component: () => import('@/views/MerchantsDetailView.vue')
    //   },
    //   {
    //     path: '/my-merchants-view',
    //     component: () => import('@/views/MyMerchantsView.vue')
    //   },
    //   {
    //     path: '/setting-view',
    //     component: () => import('@/views/SettingView.vue')
    //   }
    // ]
  },
  // { path: "/", component: () => import("@/components/HelloWorld.vue") },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
