<template>
  <v-app id="inspire" style="background: #82b1ff">
    <Banner />
    <v-main>
      <v-container>
        <h2>Chợ mua bán sản phẩm</h2>
        <v-row>
          <v-col v-for="n in 6" :key="n" cols="4">
            <router-link
              style="text-decoration: none; color: inherit"
              to="/nft/1"
            >
              <v-card height="407" align="center">
                <v-img src="https://picsum.photos/500/400?random"></v-img>
                <p>Tên sản phẩm</p>
                <v-btn color="success">Chi tiết</v-btn>
              </v-card>
            </router-link>
          </v-col>
        </v-row>
      </v-container>

      <v-container>
        <h2>Chợ đấu giá sản phẩm</h2>
        <v-row>
          <v-col v-for="n in 6" :key="n" cols="4">
            <router-link
              style="text-decoration: none; color: inherit"
              to="/auction/1"
            >
              <v-card height="407" align="center">
                <v-img src="https://picsum.photos/500/400?random"></v-img>
                <p>Tên sản phẩm</p>
                <v-btn color="success">Chi tiết</v-btn>
              </v-card>
            </router-link>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Banner from "../components/home/Banner.vue";

export default {
  name: "Home",

  components: {
    Banner,
  },
};
</script>
