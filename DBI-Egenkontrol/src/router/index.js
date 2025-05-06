import { createRouter, createWebHistory } from 'vue-router';


const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: () => import('../views/HomeView.vue'),
  },
  {
    path: '/skemaer',
    name: 'SchedulesView',
    component: () => import('../views/SchedulesView.vue'),
  },
  {
    path: '/skemaer/skabeloner',
    name: 'TemplatesView',
    component: () => import('../views/TemplatesView.vue'),
  },
  {
    path: '/skemaer/skabeloner/opret',
    name: 'MakeTemplate',
    component: () => import('../views/MakeTemplate.vue'),
  },
  {
    path: '/skemaer/skema/opret',
    name: 'MakeSchedule',
    component: () => import('../views/MakeSchedule.vue'),
  },
  {
    path: '/skemaer/skema/skabelon',
    name: 'ScheduleTemplate',
    component: () => import('../views/ScheduleTemplate.vue'),
  },
  {
    path: '/skemaer/skema/skabelonskema',
    name: 'TemplateSchedule',
    component: () => import('../views/TemplateSchedule.vue'),
  },
  {
    path: '/skemaer/skema/widget',
    name: 'ScheduleWidgets',
    component: () => import('../views/ScheduleWidgets.vue'),
  },
  {
    path: '/skemaer/skema/start',
    name: 'StartSchedule',
    component: () => import('../views/StartSchedule.vue'),
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: () => import('../views/LoginPage.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
