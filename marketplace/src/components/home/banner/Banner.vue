<template>
  <div class="banner">
    <v-container>
      <v-row class="banner-row">
        <BannerLeft />
        <BannerRight />
      </v-row>
    </v-container>
  </div>
</template>

<script>
import BannerLeft from "./BannerLeft.vue";
import BannerRight from "./BannerRight.vue";
export default {
  name: "Banner",

  components: {
    BannerLeft,
    BannerRight,
  },
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
  }
}
</style>
