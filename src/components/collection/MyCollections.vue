<template>
  <div>
    <v-row>
      <v-col v-for="(item, index) in listCollection" :key="index" cols="4">
        <router-link
          style="text-decoration: none; color: inherit"
          :to="{
            name: 'ItemCollectionDetail',
            params: { id: item.TokenId },
          }"
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
                    shortAddress(account)
                  }}</span></v-col
                >
              </v-row>
            </v-container>
          </v-card>
        </router-link>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div class="text-center mt-8 mb-16">
          <v-pagination v-model="page" :length="6"></v-pagination>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import * as ListFunction from "../../Function/ListFunction";
import { mapGetters } from "vuex";
export default {
  name: "MyItems",
  components: {},
  data: () => ({
    page: 1,
    listCollection: [],
  }),
  computed: {
    ...mapGetters({ contractMarketplace: "getContractMarketplace" }),
    ...mapGetters({ contractNginNFT: "getContractNginNFT" }),
    ...mapGetters({ account: "getAccount" }),
  },
  mounted() {
    setTimeout(() => {
      this.LayDanhSachNFTSoHuu();
    }, 1000);
  },
  methods: {
    LayDanhSachNFTSoHuu() {
      ListFunction.LayDanhSachNFTSoHuu(
        this.contractNginNFT,
        this.account,
        0
      ).then((res) => {
        console.log(res);
        this.listCollection = res;
      });
    },
    shortAddress(context) {
      return context
        ? context.slice(0, 8) + "..." + context.slice(context.length - 8)
        : "";
    },
  },
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
    max-height: 100%;
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
