// record some system variables.
export default {
  namespaced: true,
  state: {
    modelType: '0'
  },
  mutations: {
    setModelType(state, modelType) {
      state.modelType = modelType;
    }
  },
  actions: {
    setModelType({ state, commit, dispatch }, modelType) {
      commit('setModelType', modelType);
    },
  }
};
