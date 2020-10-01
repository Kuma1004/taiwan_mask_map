import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/views/Hello';
import PharmacyList from '@/views/PharmacyList';
import PharmacyMap from '@/views/PharmacyMap';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/list',
      name: 'PharmacyList',
      component: PharmacyList,
    },
    {
      path: '/map',
      name: 'PharmacyMap',
      component: PharmacyMap,
    },
  ],
});
