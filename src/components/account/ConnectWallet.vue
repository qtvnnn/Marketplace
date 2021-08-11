<template>
  <v-container class="connectWallet">
    <v-row>
      <v-col>
        <p class="connect-context mb-12">Sign in to your MetaMask Wallet.</p>
        <v-img
          class="img-metamask mb-16"
          src="../../assets/img/metamask-alternative.png"
        ></v-img>
        <v-btn elevation="5" x-large color="primary" @click="connectWeb3"
          >Sign in</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import getWeb3 from "../../getWeb3";
import getContract from "../../getContract";
export default {
  name: "connectWallet",
  data() {
    return {};
  },
  methods: {
    connectWeb3() {
      if (window.ethereum) {
        getWeb3().then((result) => {
          result.eth.getAccounts().then((res) => {
            console.log(res[0]);
            this.$store.commit("SET_ACCOUNT", res[0]);
          });
          const contract = getContract(result);
          this.$store.commit("SET_CONTRACT", contract);
        });
      } else {
        alert(
          "You need to have the Metamask extension first. Please set up or login to your Metamask account and connect it to continue."
        );
      }
    },
    shortAddress(context) {
      return context
        ? context.slice(0, 5) + "..." + context.slice(context.length - 5)
        : "";
    },
  },
  components: {},
};
</script>

<style lang="scss" scoped>
.connectWallet {
  text-align: center;
  .connect-context {
    font-size: 27px;
    color: #353840;
  }
  .img-metamask {
    width: 150px;
    height: 150px;
    margin: auto;
  }
}
</style>
