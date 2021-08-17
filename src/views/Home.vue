<template>
  <v-app id="inspire">
    <Banner />
    <v-main>
      <NFTList />
      <AuctionList :auctionList="auctionList" />
    </v-main>
  </v-app>
</template>

<script>
import Banner from "../components/home/banner/Banner.vue";
import NFTList from "../components/home/nft/NFTList.vue";
import AuctionList from "../components/home/auction/AuctionList.vue";
import * as ListFunction from "../Function/ListFunction";
import { mapGetters } from "vuex";
export default {
  name: "Home",
  data() {
    return {
      nftList: [],
      auctionList: [],
    };
  },
  components: {
    Banner,
    NFTList,
    AuctionList,
  },
  // created() {
  //   this.layDanhSachPhienDauGia();
  // },
  computed: {
    ...mapGetters({ contractMarketplace: "getContractMarketplace" }),
    ...mapGetters({ contractNginNFT: "getContractNginNFT" }),
    ...mapGetters({ account: "getAccount" }),
  },
  mounted() {
    setTimeout(() => {
      this.LayDanhSachHopDongMuaBan(), this.layDanhSachPhienDauGia();
    }, 1000);
  },
  methods: {
    LayDanhSachHopDongMuaBan() {
      ListFunction.LayTatCaDanhSachNFTMuaBan(
        this.contractMarketplace,
        this.contractNginNFT,
        0
      ).then((res) => {
        console.log(res);
      });
    },
    layDanhSachPhienDauGia() {
      ListFunction.LayTatCaDanhSachNFTDauGia(
        this.contractMarketplace,
        this.contractNginNFT,
        0
      ).then((res) => {
        this.auctionList = res;
      });
    },
  },
};
</script>

<style lang="scss">
* {
  font-family: Avenir Next, Avenir, Avenir Next Local, sans-serif !important;
}
</style>
