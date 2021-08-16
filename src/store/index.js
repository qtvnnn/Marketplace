import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    contractMarketplace: {},
    contractQuan: {},
    contractNginNFT: {},
    account: "",
  },
  getters: {
    getContractMarketplace: (state) => state.contractMarketplace,
    getContractQuan: (state) => state.contractQuan,
    getContractNginNFT: (state) => state.contractNginNFT,
    getAccount: (state) => state.account,
  },
  mutations: {
    SET_CONTRACT_MARKETPLACE: (state, contractMarketplace) => {
      state.contractMarketplace = contractMarketplace;
    },
    SET_CONTRACT_QUAN: (state, contractQuan) => {
      state.contractQuan = contractQuan;
    },
    SET_CONTRACT_NGINNFT: (state, contractNginNFT) => {
      state.contractNginNFT = contractNginNFT;
    },
    SET_ACCOUNT: (state, account) => {
      state.account = account;
    },
  },
  actions: {
    changeCurrentAddress({ commit }, address) {
      commit("SET_ACCOUNT", address);
    },
  },
});
