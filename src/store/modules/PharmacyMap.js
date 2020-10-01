/* eslint-disable no-console */
/* eslint-disable no-shadow */
import * as types from '../mutation_types';

const state = {
  opandata2: null,
};

const getters = {
  getOpenData2: (state) => {
    if (state.opandata2 === null) {
      return [];
    }

    console.log('getOpenData2');

    const opendatatmp = state.opandata2.features;

    return opendatatmp;
  },
};

const actions = {
  fetchOpenData2({ commit }) {
    console.log('fetchOpenData2');

    commit(types.LOADING, true);

    fetch('https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json')
      .then((response) => {
        if (response.ok) {
          return response.json();
        }

        console.error(response);
        commit(types.LOADING, false);
        return [];
      })
      .then((data) => {
        commit(types.FETCHOPENDATA2, data);
        commit(types.LOADING, false);
      })
      .catch((err) => {
        console.error(err);
        commit(types.LOADING, false);
      });
  },
};

const mutations = {
  [types.FETCHOPENDATA2](state, data) {
    state.opandata2 = data;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
