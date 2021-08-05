<template>
  <v-container>
    <h2 class="mb-6 mt-12">My list Auctions</h2>
    <v-row>
      <v-col>
        <router-link
          style="text-decoration: none; color: inherit"
          to="/create-NFT"
          ><v-btn color="error" outlined height="50"
            >Tạo đấu giá</v-btn
          ></router-link
        ></v-col
      >
      <v-col>
        <v-text-field
          outlined
          label="Search"
          append-icon="mdi-magnify"
        ></v-text-field>
      </v-col>
      <v-col>
        <v-select :items="items" label="Lựa chọn sắp xếp" outlined></v-select>
      </v-col>
      <v-col>
        <v-select
          :items="statusAuction"
          label="Lựa chọn trạng thái"
          outlined
        ></v-select>
      </v-col>
    </v-row>
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
  name: "MyAuctions",
  components: {},
  data: () => ({
    items: ["Giá từ thấp đến cao", "Giá từ cao đến thấp"],
    statusAuction: ["Đang đấu giá", "Đã kết thúc", "Đang tham gia"],
  }),
};
</script>

<style lang="scss" scoped></style>
