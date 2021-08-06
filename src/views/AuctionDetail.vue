<template>
  <div class="auction-detail" style="padding-top: 50px">
    <h1 class="mb-12" style="text-align: center">Chi tiết sản phẩm đấu giá</h1>
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
