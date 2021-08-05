<template>
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
</template>

<script>
export default {
  name: "AuctionList",

  components: {},
};
</script>

<style lang="scss" scoped></style>
