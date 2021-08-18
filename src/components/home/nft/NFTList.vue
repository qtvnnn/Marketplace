<template>
  <v-container>
    <span class="title-nft-list">Explore the NFT marketplace</span>
    <Loading v-if="isLoad" />
    <div v-else>
      <v-row class="mt-6">
        <v-col v-for="(item, i) in nftList" :key="i" cols="3">
          <router-link
            style="text-decoration: none; color: inherit"
            :to="`/nft/${item.HopDong.tokenId}`"
            target="_blank"
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
                      shortAddress(item.HopDong.NguoiBan)
                    }}</span></v-col
                  >
                  <v-col class="text-right"
                    ><span class="txt-price">Price</span><br /><span
                      class="price"
                      >{{ item.HopDong.TienHang }}</span
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
    </div>
  </v-container>
</template>

<script>
import Loading from "../../common/Loading.vue";
export default {
  name: "NFTList",
  components: {
    Loading,
  },
  data() {
    return {
      page: 1,
    };
  },
  props: {
    nftList: Array,
    isLoad: Boolean,
  },
  methods: {
    shortAddress(context) {
      return context ? context.slice(0, 10) + "..." : "";
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
.title-nft-list {
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
