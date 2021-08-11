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
import getContract from "./getContract";
import getContractQuan from "./getContractQuan";
import getContractNgin from "./getContractNGIN";
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
    ...mapGetters({ contract: "getContract" }),
  },
  mounted() {
    this.checkConnect();
  },
  methods: {
    checkConnect() {
      let web31;
      if (window.ethereum && window.ethereum.isMetaMask) {
        if (window.web3.currentProvider) {
          web31 = new Web3(window.web3.currentProvider);
          web31.eth.getAccounts().then((res) => {
            this.$store.commit("SET_ACCOUNT", res[0]);
          });
          const contract = getContract(web31);
          this.$store.commit("SET_CONTRACT", contract);
          const quan = getContractQuan(web31);
          this.$store.commit("SET_QUAN", quan);
          const ngin = getContractNgin(web31);
          this.$store.commit("SET_NGIN", ngin);
          console.log(contract);
        } else {
          alert(
            "You need to have the Metamask extension first. Please set up or login to your Metamask account and connect it to continue."
          );
        }
      }
    },
  },
};
</script>
