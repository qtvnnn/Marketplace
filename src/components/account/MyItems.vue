<template>
  <v-container>
    <h2 class="mb-6">My list Items</h2>
    <v-row>
      <v-col>
        <router-link
          style="text-decoration: none; color: inherit"
          to="/create-nft"
          ><v-btn color="error" outlined height="50"
            >Tạo sản phẩm</v-btn
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
    </v-row>
    <v-row>
      <v-col v-for="n in 6" :key="n" cols="4">
        <router-link
          style="text-decoration: none; color: inherit"
          to="/auction/1"
        >
          <v-card height="400" align="center">
            <div class="img-contain" style="height: 320px">
              <img
                class="item-img"
                src="https://picsum.photos/500/400?random"
              />
            </div>
            <v-container>
              <v-row>
                <v-col class="text-left"
                  ><span class="item-name">Tên sản phẩm</span><br />
                  <span class="item-owner">Owner</span></v-col
                >
                <v-col class="text-right"
                  ><span class="txt-price">Price</span><br /><span class="price"
                    >$10</span
                  ></v-col
                >
              </v-row>
            </v-container>
          </v-card>
        </router-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "MyItems",
  components: {},
  data: () => ({
    items: ["Giá từ thấp đến cao", "Giá từ cao đến thấp"],
  }),
};
</script>

<style lang="scss" scoped>
.img-contain {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  .item-img {
    border-radius: 5px;
    max-width: 100%;
  }
}
.title-auction-list {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 15px;
}
.item-name,
.txt-price {
  font-size: 11px;
  color: #707a83;
}
.item-owner,
.price {
  font-size: 12px;
  font-weight: 500;
  color: #353840;
}
</style>
