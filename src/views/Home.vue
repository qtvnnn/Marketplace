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

export default {
  name: "Home",

  components: {
    Banner,
    NFTList,
    AuctionList,
  },
};
</script>

<style lang="scss">
* {
  font-family: Avenir Next, Avenir, Avenir Next Local, sans-serif !important;
}
</style>
