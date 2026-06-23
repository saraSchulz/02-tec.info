import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/components/layout/HomeView.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/equipe',
    name: 'Team',
    component: () => import('@/components/layout/TeamView.vue'),
  },
  {
    path: '/livro/:id',
    name: 'book-detail',
    component: () => import('@/components/layout/BookDetailView.vue'),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
