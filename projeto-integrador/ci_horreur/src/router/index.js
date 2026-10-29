import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomeViews.vue'),
  },
  {
    path: '/movies',
    name: 'Movies',
    component: () => import('../views/MoviesView.vue'),
  },
  {
    path: '/equipe',
    name: 'Equeipe',
    component: () => import('../views/TeamView.vue'),
  },
  {
  path: '/movie/:movieId',
  name: 'MovieDetails',
  component: () => import('../views/MovieDetailsView.vue'),
  props: true,
},

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router;
