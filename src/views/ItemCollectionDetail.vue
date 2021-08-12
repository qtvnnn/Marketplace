<template>
  <div class="nft-detail" style="padding-top: 50px">
    <h1 class="mb-12" style="text-align: center">Item Detail</h1>
    <Detail />
  </div>
</template>

<script>
import Detail from "../components/collection/Detail.vue";

export default {
  name: "ItemCollectionDetail",

  components: {
    Detail,
  },
};
</script>

<style lang="scss" scoped></style>
