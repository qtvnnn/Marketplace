<template>
  <div class="banner">
    <v-row class="banner-row">
      <v-col align="center" class="banner-left">
        <p class="title-banner">Chào mừng bạn đã đến với chợ đồ cũ BDA !!!</p>

        <router-link
          style="text-decoration: none; color: inherit"
          to="/create-NFT"
        >
          <v-btn class="mr-2" color="primary">Tạo sản phẩm </v-btn></router-link
        >

        <router-link
          style="text-decoration: none; color: inherit"
          to="/create-auction"
        >
          <v-btn outlined color="indigo">Tạo đấu giá </v-btn></router-link
        >
      </v-col>
      <v-col class="banner-right">
        <v-img
          max-height="419"
          max-width="549"
          src="https://lh3.googleusercontent.com/06DG0Jq_0OUOp0cqfaQh2KyywUMNeeQBrrim1JtNcs6jf0t1e6fuEmO8EOA-eHiR7sHdgqvjjh7wnxgMzeoIIea6lnXTmUx6fEn7FQ=s550"
        ></v-img>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Banner",

  components: {},
};
</script>

<style lang="scss" scoped>
.banner {
  height: 500px;
  background: rgb(245, 243, 226);
  padding: 12px;
  .banner-row {
    height: 100%;
    align-items: center;
    .title-banner {
      font-size: 20px;
      font-weight: 600;
      font-family: "Avenir Next", Avenir, "Avenir Next Local", sans-serif;
      font-style: normal;
    }
  }
}
</style>
