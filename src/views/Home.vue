<template>
  <v-app id="inspire">
    <Banner />
    <v-main>
      <NFTList
        :nftList="nftList"
        :isLoad="isLoad"
        :getAllNFT="LayDanhSachHopDongMuaBan"
        :lengthPagingNFT="lengthPagingNFT"
      />
      <AuctionList
        :auctionList="auctionList"
        :isLoad="isLoad"
        :getAllAuction="layDanhSachPhienDauGia"
        :lengthPagingAuction="lengthPagingAuction"
      />
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
      isLoad: true,
      nftList: [],
      lengthPagingNFT: 0,
      auctionList: [],
      lengthPagingAuction: 0,
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
      this.LayDanhSachHopDongMuaBan(0), this.layDanhSachPhienDauGia(0);
    }, 1000);
  },
  methods: {
    LayDanhSachHopDongMuaBan(pageIndex) {
      ListFunction.LayTatCaDanhSachNFTMuaBan(
        this.contractMarketplace,
        this.contractNginNFT,
        pageIndex
      ).then((res) => {
        console.log(res, "nft");
        this.lengthPagingNFT = Math.ceil(res[0].Length / 8);
        this.nftList = res;
        this.isLoad = false;
      });
    },
    layDanhSachPhienDauGia(pageIndex) {
      ListFunction.LayTatCaDanhSachNFTDauGia(
        this.contractMarketplace,
        this.contractNginNFT,
        pageIndex
      ).then((res) => {
        console.log(res, "auction");
        this.auctionList = res;
        this.lengthPagingAuction = Math.ceil(res[0].Length / 8);
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
