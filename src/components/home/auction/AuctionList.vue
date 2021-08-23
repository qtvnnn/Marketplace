<template>
  <v-container>
    <span class="title-auction-list">Explore the auction marketplace</span>
    <Loading v-if="isLoad" />
    <v-row v-else class="mt-6">
      <v-col v-for="(item, index) in auctionList" :key="index" cols="3">
        <router-link
          style="text-decoration: none; color: inherit"
          :to="`/auction/${item.Phien.tokenId}?maphien=${item.Phien.MaPhien}`"
        >
          <v-card height="400" align="center">
            <div class="img-contain" style="height: 320px">
              <img class="item-img" :src="item.Metadata.metadata.uri" />
            </div>
            <v-container>
              <v-row>
                <v-col class="text-left"
                  ><span class="item-name">{{
                    item.Metadata.metadata.title
                  }}</span
                  ><br />
                  <span class="item-owner">{{
                    shortAddress(item.Phien.NguoiBan)
                  }}</span></v-col
                >
                <v-col class="text-right"
                  ><span class="txt-price">Start Price</span><br /><span
                    class="price"
                    >{{ item.Phien.GiaKhoiDiem }}</span
                  ></v-col
                >
              </v-row>
            </v-container>
          </v-card>
        </router-link>
      </v-col>
    </v-row>
    <div v-if="auctionList.length > 0" class="text-center mt-8">
      <v-pagination
        v-model="page"
        :length="lengthPagingAuction"
        @input="paging"
      ></v-pagination>
    </div>
  </v-container>
</template>

<script>
import Loading from "../../common/Loading.vue";
export default {
  name: "AuctionList",
  components: {
    Loading,
  },
  props: {
    auctionList: Array,
    isLoad: Boolean,
    getAllAuction: Function,
    lengthPagingAuction: Number,
  },
  data() {
    return {
      page: 0,
    };
  },
  methods: {
    shortAddress(context) {
      return context ? context.slice(0, 10) + "..." : "";
    },
    paging() {
      let pageIndex = (this.page - 1) * 8;
      this.getAllAuction(pageIndex);
    },
  },
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
