import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import PokemonView from '../views/PokemonView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/:pokemon',
    name: 'pokemon',
    component: PokemonView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
