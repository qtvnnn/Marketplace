<template>
  <v-app id="inspire" style="background: #82b1ff">
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
