<template>
  <v-container>
    <h2 class="mb-6 mt-12">My list Auctions</h2>
    <v-row>
      <v-col>
        <router-link
          style="text-decoration: none; color: inherit"
          to="/create-item-collection"
          ><v-btn color="error" outlined height="50" elevation="3"
            >Create a auction</v-btn
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
        <v-select :items="items" label="Filter" outlined></v-select>
      </v-col>
      <v-col>
        <v-select :items="statusAuction" label="Status" outlined></v-select>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="n in 6" :key="n" cols="4">
        <router-link
          style="text-decoration: none; color: inherit"
          to="/auction/1"
          target="_blank"
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
                  ><span class="item-name">Itemname</span><br />
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
    <div class="text-center mt-8 mb-16">
      <v-pagination v-model="page" :length="6"></v-pagination>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "MyAuctions",
  components: {},
  data: () => ({
    items: ["Price: Low to Hight", "Price: Hight to Low"],
    statusAuction: ["Auction in progress", "Finished", "Joined"],
    page: 1,
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
