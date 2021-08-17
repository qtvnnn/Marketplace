<template>
  <v-container>
    <span class="title-auction-list">Explore the Auction marketplace</span>
    <!-- <p>test: {{ auctionList }}</p> -->
    <v-row class="mt-6">
      <v-col v-for="n in 8" :key="n" cols="3">
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
    <div class="text-center mt-8">
      <v-pagination v-model="page" :length="6"></v-pagination>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "AuctionList",
  props: {
    auctionList: Array,
  },
  data() {
    return {
      page: 1,
    };
  },
  components: {},
};
</script>

<style lang="scss" scoped>
* {
  text-align: center;
}
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
