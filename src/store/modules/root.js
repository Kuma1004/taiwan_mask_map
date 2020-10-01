/* eslint-disable no-console */
/* eslint-disable no-shadow */
import * as types from '../mutation_types';

const state = {
  loading: false,
};

const getters = {
  getLoading: state => state.loading,
};

const actions = {
  toggleLoading({ commit }, isLoading) {
    console.log('toggleLoading');
    commit(types.LOADING, isLoading);
  },
};

const mutations = {
  [types.LOADING](state, isLoading) {
    state.loading = isLoading;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
