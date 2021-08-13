<template>
  <div class="auction-detail" style="padding-top: 50px">
    <h1 class="mb-12" style="text-align: center">Item details</h1>
    <Auction />
  </div>
</template>

<script>
import Auction from "../components/auction/index.vue";

export default {
  name: "AuctionDetail",

  components: {
    Auction,
  },
};
</script>

<style lang="scss" scoped></style>
