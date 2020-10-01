import Vue from 'vue';
import Vuex from 'vuex';

import root from './modules/root';
import pharmacylist from './modules/PharmacyList';
import pharmacymap from './modules/PharmacyMap';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    root,
    pharmacylist,
    pharmacymap,
  },

  strict: true,
});
