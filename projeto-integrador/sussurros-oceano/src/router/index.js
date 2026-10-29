import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/equipe',
    name: 'Team',
    component: () => import('@/views/TeamView.vue'),
  },
  {
    path: '/Fauna-Marinha',
    name: 'Fauna-Marinha',
    component: () => import('@/views/FaunaMarinhaView.vue'),
  },
  {
    path: '/poluicao',
    name: 'Poluicao',
    component: () => import('@/views/PoluicaoView.vue'),
  },
  {
    path: '/Contribuicao',
    name: 'Contribuicao',
    component: () => import('@/views/ContribuicaoView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
