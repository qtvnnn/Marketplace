<template>
  <div class="nft-detail" style="padding-top: 50px">
    <h1 class="mb-12" style="text-align: center">Item details</h1>
    <NFT />
  </div>
</template>

<script>
import NFT from "../components/nft/index.vue";

export default {
  name: "NFTDetail",

  components: {
    NFT,
  },
};
</script>

<style lang="scss" scoped></style>
