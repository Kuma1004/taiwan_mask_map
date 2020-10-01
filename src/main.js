/* eslint-disable global-require */
/* eslint-disable no-underscore-dangle */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import { LMap, LTileLayer, LMarker, LPopup, LIcon } from 'vue2-leaflet';
import { Icon } from 'leaflet';
import Vue2LeafletMarkerCluster from 'vue2-leaflet-markercluster';

import router from './router';
import store from './store';
import App from './App';

import '../node_modules/leaflet/dist/leaflet.css';
import '../node_modules/leaflet.markercluster/dist/MarkerCluster.css';
import '../node_modules/leaflet.markercluster/dist/MarkerCluster.Default.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap';

Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);
Vue.component('l-popup', LPopup);
Vue.component('l-icon', LIcon);
Vue.component('v-marker-cluster', Vue2LeafletMarkerCluster);

delete Icon.Default.prototype._getIconUrl;

Icon.Default.mergeOptions({
  iconRetinaUrl: require('../node_modules/leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('../node_modules/leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('../node_modules/leaflet/dist/images/marker-shadow.png'),
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
});
