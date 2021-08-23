<template>
  <v-container>
    <Loading v-if="isLoad" />
    <v-row v-else>
      <v-col cols="12" md="5">
        <v-img
          class="banner-img"
          max-height="600"
          :src="nftDetail.Metadata.metadata.uri"
        ></v-img
      ></v-col>
      <v-col class="nft-detail-right" cols="12" md="7">
        <p class="item-name">{{ nftDetail.Metadata.metadata.title }}</p>
        <p class="owned">
          Owned by
          <span class="owner-name">{{ nftDetail.HopDong.NguoiBan }}</span>
        </p>
        <p>Description:</p>
        <p class="description">
          {{ nftDetail.Metadata.metadata.desc }}
        </p>
        <!-- <p>
          Contract Address:
          <span style="color: #1868b7"
            >0x88B48F654c30e99bc2e4A1559b4Dcf1aD93FA656</span
          >
        </p> -->
        <p>
          Token ID:
          <span style="color: #707a83">{{ nftDetail.HopDong.tokenId }}</span>
        </p>
        <p>Blockchain: <span style="color: #707a83"> Rinkeby</span></p>
        <p>
          Price: <span class="price">{{ nftDetail.HopDong.TienHang }}</span>
        </p>
        <v-btn v-if="nftDetail.HopDong.NguoiBan !== account" @click="makeOffer"
          >Make Offer</v-btn
        >
        <v-btn v-else @click="cancelOffer">Cancel</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Loading from "../common/Loading.vue";
import * as ListFunction from "../../Function/ListFunction";
import { mapGetters } from "vuex";
export default {
  name: "NFT",
  components: { Loading },
  data() {
    return {
      isLoad: true,
      tokenId: this.$route.params.id,
      nftDetail: {},
    };
  },
  computed: {
    ...mapGetters({ contractMarketplace: "getContractMarketplace" }),
    ...mapGetters({ contractNginNFT: "getContractNginNFT" }),
    ...mapGetters({ account: "getAccount" }),
    ...mapGetters({ getContractQuan: "getContractQuan" }),
  },
  mounted() {
    setTimeout(() => {
      this.LayTatCaDanhSachNFTMuaBan();
    }, 1000);
  },
  methods: {
    LayTatCaDanhSachNFTMuaBan() {
      ListFunction.LayTatCaDanhSachNFTMuaBan(
        this.contractMarketplace,
        this.contractNginNFT,
        0
      ).then((res) => {
        res.forEach((item) => {
          console.log(item);
          if (item.HopDong.tokenId == this.tokenId) {
            this.nftDetail = item;
          }
        });
        this.isLoad = false;
      });
    },
    makeOffer() {
      console.log("start mua");
      ListFunction.ThucHienMuaHang(
        this.contractMarketplace,
        this.getContractQuan,
        this.account,
        this.nftDetail.HopDong.MaHopDong,
        this.nftDetail.HopDong.TienHang
      ).then((res) => {
        console.log(res);
        console.log("Mua hàng thành công");
      });
    },
    cancelOffer() {
      console.log("start huy");
      ListFunction.ThucHienHuyBanHang(
        this.contractMarketplace,
        this.account,
        this.nftDetail.HopDong.MaHopDong
      ).then((res) => {
        console.log(res);
        console.log("Huỷ thành công");
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.item-name {
  font-size: 30px;
  color: #353840;
  font-weight: 600;
}
.owned {
  font-size: 14px;
  color: #707a83;
  font-weight: 400;
  .owner-name {
    font-size: 15px;
    color: #1868b7;
  }
}
.description {
  font-size: 14px;
}
.price {
  font-size: 17px;
  color: #3291e9;
}
</style>
