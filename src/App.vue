<template>
  <v-app>
    <Header />
    <v-main>
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Header from "@/components/common/Header.vue";
import Footer from "@/components/common/Footer.vue";
import Web3 from "web3";
import getContractMarketplace from "./Get_Contract/getContractMarketplace";
import getContractQuan from "./Get_Contract/getContractQuan";
import getContractNginNFT from "./Get_Contract/getContractNginNFT";
import { mapGetters } from "vuex";
export default {
  name: "App",
  components: {
    Footer,
    Header,
  },
  data: () => ({}),
  computed: {
    ...mapGetters({ account: "getAccount" }),
    ...mapGetters({ contractMarketplace: "getContractMarketplace" }),
  },
  mounted() {
    this.checkConnect();
  },
  methods: {
    checkConnect() {
      let web31;
        if (window.web3.currentProvider) {
          web31 = new Web3(window.web3.currentProvider);
          web31.eth.getAccounts().then((res) => {
            this.$store.commit("SET_ACCOUNT", res[0]);
          });
          const contract = getContractMarketplace(web31);
          this.$store.commit("SET_CONTRACT_MARKETPLACE", contract);
          const quan = getContractQuan(web31);
          this.$store.commit("SET_CONTRACT_QUAN", quan);
          const ngin = getContractNginNFT(web31);
          this.$store.commit("SET_CONTRACT_NGINNFT", ngin);
          console.log(ngin);
        }
    },
  },
};
</script>
