<template>
  <v-container>
    <Loading v-if="isLoad" />
    <v-row v-else>
      <v-col class="nft-detail-left" cols="12" md="4">
        <v-img
          class="banner-img"
          max-height="600"
          :src="auctionDetail.Metadata.metadata.uri"
        ></v-img
      ></v-col>
      <v-col class="nft-detail-right" cols="12" md="8">
        <v-row>
          <v-col class="info-auction"
            ><p class="item-name">
              {{ auctionDetail.Metadata.metadata.title }}
            </p>
            <p class="owned">
              Owned by
              <span class="owner-name">{{ auctionDetail.Phien.NguoiBan }}</span>
            </p>
            <p>Description:</p>
            <p class="description">
              {{ auctionDetail.Metadata.metadata.desc }}
            </p>
            <!-- <p>
              Contract Address:
              <span style="color: #1868b7"
                >0x88B48F654c30e99bc2e4A1559b4Dcf1aD93FA656</span
              >
            </p> -->
            <p>
              Token ID:
              <span style="color: #707a83">{{
                auctionDetail.Phien.tokenId
              }}</span>
            </p>
            <p>Blockchain: <span style="color: #707a83"> Rinkeby</span></p>
            <p>
              Price:
              <span class="price">{{ auctionDetail.Phien.GiaBanLuon }}</span>
            </p>
            <v-btn>Make Offer</v-btn></v-col
          >
          <v-col>
            <h2 class="mt-15">Auction Rules</h2>
            <ul>
              <li>Start: {{ auctionDetail.Phien.ThoiGianBatDau }}</li>
              <li>End: {{ auctionDetail.Phien.ThoiGianKetThuc }}</li>
              <li>Recently Price: {{ auctionDetail.Phien.GiaCuoiCung }}</li>
              <li>
                Status:
                {{
                  auctionDetail.Phien.enTrangThaiDauGia == 0
                    ? "Có thể mua luôn"
                    : "Đang đấu giá"
                }}
              </li>
              <li>Starting Price: {{ auctionDetail.Phien.GiaKhoiDiem }}</li>
              <li>Step Price: {{ auctionDetail.Phien.BuocGia }}</li>
            </ul>
            <h3 class="mt-4 mb-2">Join the auction</h3>
            <v-form ref="AuctionForm" v-model="validAuction">
              <v-text-field
                solo
                :rules="priceRules"
                required
                suffix="NGIN"
                v-model="priceAuction"
              ></v-text-field>
              <v-btn class="btn-auction" @click="joinAuction">Auction</v-btn>
            </v-form>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Loading from "../common/Loading.vue";
import * as ListFunction from "../../Function/ListFunction";
import { mapGetters } from "vuex";
export default {
  name: "Auction",
  components: { Loading },
  data() {
    return {
      isLoad: true,
      tokenId: this.$route.params.id,
      priceAuction: "",
      auctionDetail: {},
      priceRules: [
        (v) => !!v || "Price is required",
        (v) =>
          v >=
            parseInt(this.auctionDetail.Phien.GiaCuoiCung) +
              parseInt(this.auctionDetail.Phien.BuocGia) ||
          "Auction Price must be more than Recently Price add Step Price",
      ],
      validAuction: true,
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
      this.layDanhSachPhienDauGia();
    }, 1000);
  },
  methods: {
    layDanhSachPhienDauGia() {
      ListFunction.LayTatCaDanhSachNFTDauGia(
        this.contractMarketplace,
        this.contractNginNFT,
        0
      ).then((res) => {
        res.forEach((item) => {
          console.log(item);
          if (item.Phien.tokenId == this.tokenId) {
            this.auctionDetail = item;
          }
        });
        this.isLoad = false;
      });
    },
    joinAuction() {
      if (this.$refs.AuctionForm.validate()) {
        console.log(this.priceAuction);
        ListFunction.ThucHienThamGiaDauGia(
          this.contractMarketplace,
          this.getContractQuan,
          this.account,
          this.auctionDetail.Phien.MaPhien,
          this.priceAuction
        )
          .then((res) => {
            console.log(res, "success");
          })
          .catch((err) => {
            console.log(err, "fail");
          });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.nft-detail-right {
  border-radius: 5px;
  border: 1px solid rgb(229, 232, 235);
  margin: auto;
}
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
.btn-auction {
  margin-left: calc(50% - 50px);
}
</style>
