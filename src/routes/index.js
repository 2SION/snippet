import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Snippet',
      component: () => import('@/views/snippet'),
    }
  ]
});