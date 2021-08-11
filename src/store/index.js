import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    contract: {},
    quan: {},
    ngin: {},
    account: "",
  },
  getters: {
    getContract: (state) => state.contract,
    getQuan: (state) => state.quan,
    getNghin: (state) => state.ngin,
    getAccount: (state) => state.account,
  },
  mutations: {
    SET_CONTRACT: (state, contract) => {
      state.contract = contract;
    },
    SET_QUAN: (state, quan) => {
      state.quan = quan;
    },
    SET_NGIN: (state, ngin) => {
      state.ngin = ngin;
    },
    SET_ACCOUNT: (state, account) => {
      console.log(account);
      state.account = account;
    },
  },
  actions: {
    changeCurrentAddress({ commit }, address) {
      commit("SET_ACCOUNT", address);
    },
  },
});
