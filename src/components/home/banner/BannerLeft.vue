<template>
  <v-col align="center" class="banner-left">
    <p class="title-banner">Welcome to Marketplace BDA !!!</p>
    <p class="mb-6" style="font-size: 24px">
      the Vietnam's first & largest NFT marketplace
    </p>

    <router-link
      style="text-decoration: none; color: inherit"
      to="/create-item-collection"
    >
      <v-btn class="mr-2" color="primary" height="50" elevation="5"
        >Create a NFT
      </v-btn></router-link
    >

    <router-link
      style="text-decoration: none; color: inherit"
      to="/create-item-collection"
    >
      <v-btn outlined color="indigo" height="50" elevation="5"
        >Create a auction
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
