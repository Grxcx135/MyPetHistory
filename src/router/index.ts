import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/components/AppBarComponent.vue"),
    children: [
      {
        path: "/home",
        component: () => import("@/pages/allAnimalType.vue"),
      },
    ],
  },
  // { path: "/", component: () => import("@/components/HelloWorld.vue") },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
