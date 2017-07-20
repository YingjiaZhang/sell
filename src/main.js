// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import goods from './components/goods/goods';
import seller from './components/seller/seller';
import ratings from './components/ratings/ratings';

import './common/stylus/icon.styl';

Vue.use(VueRouter);
Vue.config.productionTip = false;

let routes = [
  { path: '/goods', component: goods },
  { path: '/ratings', component: ratings },
  { path: '/seller', component: seller }
];

Vue.use(VueRouter); // This makes all the magic hapen and Vue recognizes the router-view and router-link

let router = new VueRouter({
  routes
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});

router.push('/goods');
