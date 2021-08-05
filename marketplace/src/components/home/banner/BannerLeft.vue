<template>
  <v-col align="center" class="banner-left">
    <p class="title-banner">Chào mừng bạn đã đến với <br />chợ đồ cũ BDA !!!</p>
    <p class="mb-6" style="font-size: 24px">
      thị trường NFT đầu tiên và lớp nhất Việt Nam
    </p>

    <router-link style="text-decoration: none; color: inherit" to="/create-NFT">
      <v-btn class="mr-2" color="primary" height="50"
        >Tạo sản phẩm
      </v-btn></router-link
    >

    <router-link
      style="text-decoration: none; color: inherit"
      to="/create-auction"
    >
      <v-btn outlined color="indigo" height="50"
        >Tạo đấu giá
      </v-btn></router-link
    >
  </v-col>
</template>

<script>
export default {
  name: "BannerLeft",

  components: {},
};
</script>

<style lang="scss" scoped>
.banner-left {
  text-align: left;

  .title-banner {
    font-size: 45px;
    font-weight: 500;
    font-family: Roboto, sans-serif;
    font-style: normal;
  }
}
</style>
