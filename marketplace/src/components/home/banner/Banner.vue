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
  background-image: linear-gradient(
      to top,
      rgba(255, 255, 255, 3),
      rgba(250, 245, 245, 0.7)
    ),
    url("https://lh3.googleusercontent.com/bXQ7PUJ2k_dzuIQMFrfiKJ0wKjGDeWm2EPDuNXqLiW6z9ZY5HnDagZl3Lhufv8rop_G9B9O7Pb7nqrj0gdyPXTH-=s250");
  background-color: white;
  background-size: cover;
  background-position: center center;
  padding: 12px;
  .banner-row {
    height: 100%;
    align-items: center;
  }
}
</style>
