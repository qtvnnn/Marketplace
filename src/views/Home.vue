<template>
  <v-app id="inspire">
    <Banner />
    <v-main>
      <NFTList />
      <AuctionList />
    </v-main>
  </v-app>
</template>

<script>
import Banner from "../components/home/banner/Banner.vue";
import NFTList from "../components/home/nft/NFTList.vue";
import AuctionList from "../components/home/auction/AuctionList.vue";
import * as ListFunction from '../Function/ListFunction';
import { mapGetters } from 'vuex';
export default {
  name: "Home",
  components: {
    Banner,
    NFTList,
    AuctionList,
  },
  computed:{
    ...mapGetters({contractMarketplace: "getContractMarketplace"}),
    ...mapGetters({contractNginNFT: "getContractNginNFT"}),
    ...mapGetters({account: "getAccount"}),
  },
  mounted(){
    setTimeout(() => {
      this.LayDanhSachHopDongMuaBan(),
      this.LayDanhSachPhienDauGia()
    }, 1000);    
  },
  methods:{
    LayDanhSachHopDongMuaBan(){
      ListFunction.LayTatCaDanhSachNFTMuaBan(this.contractMarketplace,this.contractNginNFT,0).then(res=>{
        console.log(res);
      });
    },
    LayDanhSachPhienDauGia(){
      ListFunction.LayTatCaDanhSachNFTDauGia(this.contractMarketplace,this.contractNginNFT,0).then(res=>{
        console.log(res);
      });
    }}
};
</script>

<style lang="scss">
* {
  font-family: Avenir Next, Avenir, Avenir Next Local, sans-serif !important;
}
</style>
