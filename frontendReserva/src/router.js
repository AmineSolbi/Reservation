import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {  
    name: 'home',
    path: '/', 
    component: () => import('@/pages/home.vue'),
  },
  {  
    name: 'details',
    path: '/detail/:id', 
    component: () => import('@/pages/detail.vue'),
  },
    {  
    name: 'results',
    path: '/results',
    component: () => import('@/pages/result.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    }
    return { top: 0 };
  },
});

export default router;
