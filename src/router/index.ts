import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/components/AppBarComponent.vue"),
    children: [
      {
        path: "/alive",
        component: () => import("@/pages/AliveAnimal.vue"),
      },
      {
        path: "/none-alive",
        component: () => import("@/pages/NoneAliveAnimal.vue"),
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
