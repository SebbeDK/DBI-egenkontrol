import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Schedules from '../views/Schedules.vue'

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/skemaer",
    name: "Schedules",
    component: () => import("../views/Schedules.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
